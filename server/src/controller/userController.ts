import type { Request, Response } from 'express';
import type { UserToken, RequestError } from '@/types/common';
import type ITokenRequest from '@/interfaces/ITokenRequest';
import { ErrorMessagesEnum } from '@/enums/ErrorMessagesEnum';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';
import bcrypt from 'bcrypt';
import {
  getUserByUsernameBO,
  getUserByIdBO,
  createUserBO,
  getUserByEmailBO,
  verifyUserBO,
} from '@/services/userService/userBO';
import { createToken, createVerificationToken } from '@/utils/helpers/tokenHelpers';
import { sendMail } from '@/utils/helpers/emailHelpers';
import { BASE_CLIENT_URL } from '@/const/commonConst';
import jwt from 'jsonwebtoken';

/**
 * Login action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const loginAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res
        .status(StatusCodesEnum.BadRequest)
        .json({ name: ErrorMessagesEnum.ValidationError, errorMsg: 'All inputs are required !' } as RequestError);

      return;
    }

    const user = await getUserByEmailBO(email);
    if (user && (await bcrypt.compare(password, user?.passwordHash!))) {
      if (!user.isVerified) {
        res.status(StatusCodesEnum.ResourceForbidden).json({
          name: ErrorMessagesEnum.ValidationError,
          errorMsg: 'Access only for verified users !',
        } as RequestError);
        return;
      }

      const token = createToken(user);
      user.passwordHash = undefined;
      const resResult: UserToken = { user, token };
      res.status(StatusCodesEnum.OK).json(resResult);
      return;
    }

    res
      .status(StatusCodesEnum.BadRequest)
      .json({ name: ErrorMessagesEnum.ValidationError, errorMsg: 'Wrong email or password !' } as RequestError);
  } catch (err) {
    res
      .status(StatusCodesEnum.ServerError)
      .json({ name: ErrorMessagesEnum.ServerError, errorMsg: err } as RequestError);
  }
};

/**
 * Register action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const registerAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password, passwordRepeat } = req.body;

    if (!(username && email && password && passwordRepeat)) {
      res
        .status(StatusCodesEnum.BadRequest)
        .json({ name: ErrorMessagesEnum.ValidationError, errorMsg: 'All inputs are required !' } as RequestError);

      return;
    }

    if (password !== passwordRepeat) {
      res.status(StatusCodesEnum.BadRequest).json({
        name: ErrorMessagesEnum.ValidationError,
        errorMsg: 'Password and repeated password are not the same! ',
      } as RequestError);

      return;
    }

    const oldUserByUsername = await getUserByUsernameBO(username);
    const oldUserByEmail = await getUserByEmailBO(email);

    if (oldUserByUsername || oldUserByEmail) {
      res
        .status(StatusCodesEnum.ResourceConflict)
        .json({ name: ErrorMessagesEnum.ResourceError, errorMsg: 'User already exist. Please Login' } as RequestError);

      return;
    }

    const hash = await bcrypt.hash(password, 10);
    await createUserBO(username, email, hash);
    const user = (await getUserByUsernameBO(username))!;
    const token = createToken(user);
    user.passwordHash = undefined;
    const resResult: UserToken = { user, token };

    // Send verification mail
    try {
      const verificationToken = createVerificationToken(user);
      const info = await sendMail(
        'fela55555@wp.pl',
        user.email,
        'test',
        'Verification',
        `<a href="${BASE_CLIENT_URL}/verify?token=${verificationToken}">Click here to verify email</a>`,
      );

      console.log(`Email sent: ${info.response}`);
    } catch (err) {
      console.log(err);
    }

    res.status(StatusCodesEnum.NewResources).json(resResult);
  } catch (err) {
    res
      .status(StatusCodesEnum.ServerError)
      .json({ name: ErrorMessagesEnum.ServerError, errorMsg: err } as RequestError);
  }
};

/**
 * Get user from token action
 * @param {TokenRequest} req Request
 * @param {Response} res Response
 */
export const getValidUserAction = async (req: ITokenRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.user!;
    const user = await getUserByIdBO(id);
    res.status(StatusCodesEnum.OK).json(user);
  } catch (err) {
    res
      .status(StatusCodesEnum.ServerError)
      .json({ name: ErrorMessagesEnum.ServerError, errorMsg: err } as RequestError);
  }
};

/**
 * Email verification action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const emailVerificationAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const { token } = req.body;
    const { email } = jwt.verify(token, process.env.TOKEN_KEY ?? 'abcd1234') as { id: string; email: string };

    const user = await getUserByEmailBO(email);

    if (user) {
      const verifiedUserId = await verifyUserBO(user.id);
      res.status(StatusCodesEnum.OK).json(verifiedUserId);
    } else {
      res
        .status(StatusCodesEnum.Unauthorized)
        .json({ name: ErrorMessagesEnum.ValidationError, errorMsg: 'Wrong email address !' } as RequestError);
    }
  } catch (err) {
    res.status(StatusCodesEnum.Unauthorized).json({
      name: ErrorMessagesEnum.ResourceError,
      errorMsg: 'Invalid Token',
    } as RequestError);
  }
};
