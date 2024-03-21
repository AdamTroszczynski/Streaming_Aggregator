<template>
  <nav
    class="h-[607px] bg-[url('/NavbarBgMb.png')] bg-right-top bg-no-repeat bg-white lg:bg-[url('/NavbarBgPc.png')] lg:h-[419px]"
  >
    <div
      class="w-full p-5 flex justify-between items-center relative lg:py-3.5 lg:px-5 l:px-14"
    >
      <h2 class="text-2xl font-bold text-black lg:min-w-[191px]">
        STREAM 'N GO
      </h2>

      <ActionButton
        :is-navibar="true"
        class="lg:hidden"
        @click-action="toggleMenu"
      >
        <MenuIcon />
      </ActionButton>
      <div
        class="hidden lg:flex lg:gap-5 lg:w-full lg:justify-end lg:pr-8 2xl:pr-14"
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
        class="absolute z-10 w-1/2 bg-decorator shadow-lg flex flex-col gap-2 p-4 items-center top-[95%] left-[25%] rounded-2xl lg:hidden"
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
      class="w-full h-[496px] px-5 flex justify-center items-center lg:h-[300px] lg:mt-5"
    >
      <div
        class="w-[339px] h-full bg-[#FCF6F6] shadow-lg rounded-lg flex justify-center items-center lg:w-[1113px]"
      ></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ActionButton from '@/components/buttons/ActionButton.vue';
import MenuIcon from '@/components/icons/navbar/MenuIcon.vue';
import LinkButton from '@/components/buttons/LinkButton.vue';
import LangButton from '@/components/buttons/LangButton.vue';
import { useI18n } from 'vue-i18n';
import { ref, type Ref } from 'vue';

const { t } = useI18n();
const isLogin = ref(true);

/** Side menu active status */
const isMenuActive: Ref<boolean> = ref(false);

/** Toggle side menu active status */
const toggleMenu = (): void => {
  isMenuActive.value = !isMenuActive.value;
};

/** Style classes for AvatarBtn */
const avatarBtnStyles = `btn btn-circle h-[37px] w-[37px] min-h-0 p-0 border-none bg-information rounded-full flex justify-center items-center hover:bg-information`;
</script>
