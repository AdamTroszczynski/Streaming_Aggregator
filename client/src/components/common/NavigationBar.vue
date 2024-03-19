<template>
  <nav
    class="h-[607px] bg-[url('/NavbarBgMobile.png')] bg-right-top bg-no-repeat bg-white lg:bg-[url('/NavbarBgPc.png')] lg:h-[419px]">
    <div class="w-full p-5 flex justify-between items-center relative lg:py-3.5 lg:px-14">
      <h2 class="text-2xl font-bold text-black">STREAM 'N GO</h2>
      <ActionButton
        :is-navibar="true"
        class="lg:hidden"
        @click-action="toggleMenu"
      >
        <MenuIcon />
      </ActionButton>
      <div class="hidden lg:flex lg:gap-5 3xl:ml-[300px] 4xl:ml-[500px]">
        <LinkButton :is-select="true">{{ t(`navbar.homePage`) }}</LinkButton>
        <LinkButton>{{ t(`navbar.organizations`) }}</LinkButton>
        <LinkButton>{{ t(`navbar.contact`) }}</LinkButton>
      </div>
      <div class="hidden lg:flex lg:items-center lg:gap-4">
        <template v-if="isLogin">
          <LinkButton>{{ t(`navbar.login`) }}</LinkButton>
          <LinkButton :is-button="true">{{
            t(`navbar.registration`)
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
        <LinkButton :is-select="true">{{ t(`navbar.homePage`) }}</LinkButton>
        <LinkButton>{{ t(`navbar.organizations`) }}</LinkButton>
        <LinkButton>{{ t(`navbar.contact`) }}</LinkButton>
        <template v-if="isLogin">
          <LinkButton>{{ t(`navbar.login`) }}</LinkButton>
          <LinkButton :is-button="true">{{
            t(`navbar.registration`)
          }}</LinkButton>
        </template>
        <template v-else>
          <button :class="avatarBtnStyles">
            <img src="/avatar.png" />
          </button>
        </template>
        <LangButton class="lg:ml-5"/>
      </div>
    </div>
    <div class="w-full h-[496px] px-5 flex justify-center items-center lg:h-[300px] lg:mt-5">
      <slot></slot>
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
