<template>
  <main class="flex min-h-screen w-full flex-col bg-white">
    <NavigationBar
      :is-adv="false"
      :selected="''"
      :is-login="userStore.isUserLoggedIn"
    />
    <div class="mt-[-500px] flex flex-col items-center p-6 lg:mt-[-300px]">
      <LoginForm
        :title="t('loginForm.login')"
        :button-title="t('loginForm.loginBtn')"
        :is-options="true"
        @on-submit="login"
      >
        <template #content>
          <div class="flex w-full flex-col gap-2">
            <MainInput :name="'email'" :label="'Email:'" :type="'email'" />
            <MainInput
              :name="'password'"
              :label="`${t('loginForm.password')}:`"
              :type="'password'"
            />
          </div>
        </template>
        <template #links>
          <div class="mt-2 flex flex-col gap-11 lg:mt-4">
            <CheckboxInput :name="'isRemember'">{{
              t('loginForm.rememberMe')
            }}</CheckboxInput>
            <div class="flex flex-col">
              <RouterLink
                :to="'/recoverPassword'"
                class="text-[0.8125rem] font-normal text-black lg:text-[1rem]"
              >
                {{ t('loginForm.forgetPass') }}
              </RouterLink>
              <RouterLink
                :to="'/register'"
                class="text-[0.8125rem] font-medium text-purpleForm lg:text-[1rem]"
                >{{ t('loginForm.notHaveAc') }}</RouterLink
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
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useForm } from 'vee-validate';
import { boolean, object, string } from 'yup';
import { type LoginForm as LoginType } from '@/types/commonTypes';
import { useUserStore } from '@/stores/userStore';

import NavigationBar from '@/components/common/NavigationBar.vue';
import MainFooter from '@/components/common/MainFooter.vue';
import LoginForm from '@/components/layout/LoginForm.vue';
import MainInput from '@/components/inputs/MainInput.vue';
import CheckboxInput from '@/components/inputs/CheckboxInput.vue';

const { t } = useI18n();
const userStore = useUserStore();

const loginSchema = object({
  email: string()
    .email(t('addEventForm.errors.invalidEmail'))
    .required(t('addEventForm.errors.requiredField')),
  password: string().required(t('addEventForm.errors.requiredField')),
  isRemember: boolean(),
});

const { validate, meta, values, setFieldError } = useForm<LoginType>({
  validationSchema: loginSchema,
});

const login = async (): Promise<void> => {
  try {
    await validate();
    if (meta.value.valid) {
      console.log(values);
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
