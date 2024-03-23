<template>
  <nav
    class="h-[607px] bg-white bg-[url('/NavbarBgMb.png')] bg-right-top bg-no-repeat lg:h-[419px] lg:bg-[url('/NavbarBgPc.png')]"
  >
    <div
      class="relative flex w-full items-center justify-between p-5 lg:px-5 lg:py-3.5 l:px-14"
    >
      <h2 class="text-2xl font-bold text-black lg:min-w-[191px]">
        <button @click="toHomePage">STREAM 'N GO</button>
      </h2>

      <ActionButton
        :is-navibar="true"
        class="lg:hidden"
        data-test="NavigationBarToggleBtn"
        @click-action="toggleMenu"
      >
        <MenuIcon />
      </ActionButton>
      <div
        class="hidden lg:flex lg:w-full lg:justify-end lg:gap-5 lg:pr-8 2xl:pr-14"
      >
        <LinkButton :is-select="true">{{ t('navbar.homePage') }}</LinkButton>
        <LinkButton v-if="isLogin">{{ t('navbar.addStream') }}</LinkButton>
        <LinkButton>{{ t('navbar.organizations') }}</LinkButton>
        <LinkButton>{{ t('navbar.contact') }}</LinkButton>
        <LinkButton v-if="isLogin">{{ t('navbar.myEvents') }}</LinkButton>
      </div>
      <div class="hidden lg:flex lg:items-center lg:gap-4">
        <template v-if="!isLogin">
          <LinkButton>{{ t('navbar.login') }}</LinkButton>
          <LinkButton :is-button="true">{{
            t('navbar.registration')
          }}</LinkButton>
        </template>
        <template v-else>
          <button :class="avatarBtnStyles">
            <img src="/avatar.png" />
          </button>
        </template>
        <LangButton class="lg:ml-5" />
      </div>

      <div
        v-if="isMenuActive"
        class="absolute left-[25%] top-[95%] z-10 flex w-1/2 flex-col items-center gap-2 rounded-2xl bg-decorator p-4 shadow-lg lg:hidden"
        data-test="NavigationBarMenu"
      >
        <LinkButton :is-select="true">{{ t('navbar.homePage') }}</LinkButton>
        <LinkButton v-if="isLogin">{{ t('navbar.addStream') }}</LinkButton>
        <LinkButton>{{ t('navbar.organizations') }}</LinkButton>
        <LinkButton>{{ t('navbar.contact') }}</LinkButton>
        <LinkButton v-if="isLogin">{{ t('navbar.myEvents') }}</LinkButton>
        <template v-if="!isLogin">
          <LinkButton>{{ t('navbar.login') }}</LinkButton>
          <LinkButton :is-button="true">{{
            t('navbar.registration')
          }}</LinkButton>
        </template>
        <template v-else>
          <button :class="avatarBtnStyles">
            <img src="/avatar.png" />
          </button>
        </template>
        <LangButton class="lg:ml-5" />
      </div>
    </div>
    <div
      class="flex h-[496px] w-full items-center justify-center px-5 lg:mt-5 lg:h-[300px]"
    >
      <div
        class="flex h-full w-[339px] items-center justify-center rounded-lg bg-[#FCF6F6] shadow-lg lg:w-[1113px]"
      ></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ActionButton from '@/components/buttons/ActionButton.vue';
import MenuIcon from '@/components/icons/navbar/MenuIcon.vue';
import LinkButton from '@/components/buttons/LinkButton.vue';
import LangButton from '@/components/buttons/LangButton.vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ref, type Ref } from 'vue';

const { t } = useI18n();
const router = useRouter();
const isLogin = ref(true);

/** Side menu active status */
const isMenuActive: Ref<boolean> = ref(false);

/** Toggle side menu active status */
const toggleMenu = (): void => {
  isMenuActive.value = !isMenuActive.value;
};

/** Go to home page */
const toHomePage = (): void => {
  router.push('/');
};

/** Style classes for AvatarBtn */
const avatarBtnStyles = `btn btn-circle h-[37px] w-[37px] min-h-0 p-0 border-none bg-information rounded-full flex justify-center items-center hover:bg-information`;
</script>
