<template>
  <main class="flex min-h-screen w-full flex-col bg-white">
    <NavigationBar
      :is-adv="false"
      :selected="''"
      :is-login="userStore.isUserLoggedIn"
    />
    <div class="mt-[-500px] flex flex-col items-center p-6 lg:mt-[-300px]">
      <LoginForm
        :title="t('loginForm.register')"
        :button-title="t('loginForm.registerBtn')"
        :is-options="true"
        @on-submit="register"
      >
        <template #content>
          <div class="flex w-full flex-col gap-2">
            <MainInput
              :name="'username'"
              :label="`${t('loginForm.nick')}:`"
              :type="'text'"
            />
            <MainInput :name="'email'" :label="'Email:'" :type="'email'" />
            <MainInput
              :name="'password'"
              :label="`${t('loginForm.password')}:`"
              :type="'password'"
            />
            <MainInput
              :name="'passwordRepeat'"
              :label="`${t('loginForm.passwordRepeat')}:`"
              :type="`password`"
            />
          </div>
        </template>
        <template #links>
          <div class="mt-2 flex flex-col gap-11 lg:mt-4">
            <div class="flex flex-col">
              <RouterLink
                :to="'/login'"
                class="text-[0.8125rem] font-medium text-purpleForm lg:text-[1rem]"
                >{{ t('loginForm.haveAc') }}</RouterLink
              >
            </div>
          </div>
        </template>
      </LoginForm>
    </div>
    <MainFooter />
  </main>
</template>
<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useForm } from 'vee-validate';
import { object, string, ref as yupRef } from 'yup';
import { type RegisterForm } from '@/types/commonTypes';
import { useUserStore } from '@/stores/userStore';
import { register as registerAction } from '@/services/userServices';

import NavigationBar from '@/components/common/NavigationBar.vue';
import MainFooter from '@/components/common/MainFooter.vue';
import LoginForm from '@/components/layout/LoginForm.vue';
import MainInput from '@/components/inputs/MainInput.vue';
import { AxiosError } from 'axios';

const { t } = useI18n();
const userStore = useUserStore();
const router = useRouter();

const createRegisterSchema = () =>
  object({
    username: string()
      .required(t('addEventForm.errors.requiredField'))
      .min(6, t('loginForm.minPassword')),
    email: string()
      .email(t('addEventForm.errors.invalidEmail'))
      .required(t('addEventForm.errors.requiredField')),
    password: string()
      .required(t('addEventForm.errors.requiredField'))
      .min(6, t('loginForm.minPassword')),
    passwordRepeat: string()
      .oneOf([yupRef('password')], t('loginForm.samePassword'))
      .required(t('addEventForm.errors.requiredField')),
  });

let { validate, meta, values, setFieldError } = useForm<RegisterForm>({
  validationSchema: createRegisterSchema(),
});

const register = async (): Promise<void> => {
  try {
    await validate();
    if (meta.value.valid) {
      const { email, username, password, passwordRepeat } = values;
      const response = await registerAction(
        username,
        email,
        password,
        passwordRepeat,
      );
      const { user, token } = response;
      userStore.login(user, token);
      router.push('/');
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case 409:
          setFieldError('passwordRepeat', 'Konto już istnieje. Zaloguj się!');
          break;
      }
    }
    console.log(error);
  }
};
</script>
