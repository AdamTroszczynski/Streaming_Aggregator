type User = {
  id: string;
  username: string;
  email: string;
  passwordHash?: string;
  isAdmin: boolean;
  isVerified: boolean;
};

export default User;
