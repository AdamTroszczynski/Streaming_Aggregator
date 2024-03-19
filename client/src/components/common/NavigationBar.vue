<template>
  <div
    class="h-[140px] bg-[url('/NavbarBgMobile.png')] bg-right-top bg-no-repeat lg:bg-[url('/NavbarBgPc.png')] lg:h-[419px]">
    <nav class="w-full p-5 flex justify-between items-center lg:py-3.5 lg:px-14 relative">
      <h2 class="text-2xl font-bold text-black">STREAM 'N GO</h2>
      <ActionButton @clickAction="toggleMenu" :isNavibar="true" class="lg:hidden">
        <MenuIcon/>
      </ActionButton>
      <div class="hidden lg:flex lg:gap-5 3xl:ml-[300px] 4xl:ml-[500px]">
        <LinkButton :isSelect="true">{{ t(`navbar.homePage`) }}</LinkButton>
        <LinkButton>{{ t(`navbar.organizations`) }}</LinkButton>
        <LinkButton>{{ t(`navbar.contact`) }}</LinkButton>
      </div>
      <div class="hidden lg:flex lg:items-center lg:gap-4">
        <template v-if="isLogin">
          <LinkButton>{{ t(`navbar.login`) }}</LinkButton>
          <LinkButton :isButton="true">{{ t(`navbar.registration`) }}</LinkButton>
        </template>
        <template v-else>
          <button
            :class="avatarBtnStyles">
            <img src="/avatar.png">
          </button>
        </template>
        <LangButton class="lg:ml-5"/>
      </div>
      <div v-if="isMenuActive"
        class="absolute z-10 w-1/2 bg-decorator shadow-lg flex flex-col gap-2 p-4 items-center top-[95%] left-[25%] rounded-2xl  lg:hidden">
        <LinkButton :isSelect="true">{{ t(`navbar.homePage`) }}</LinkButton>
        <LinkButton>{{ t(`navbar.organizations`) }}</LinkButton>
        <LinkButton>{{ t(`navbar.contact`) }}</LinkButton>
        <template v-if="isLogin">
          <LinkButton>{{ t(`navbar.login`) }}</LinkButton>
          <LinkButton :isButton="true">{{ t(`navbar.registration`) }}</LinkButton>
        </template>
        <template v-else>
          <button
            :class="avatarBtnStyles">
            <img src="/avatar.png">
          </button>
        </template>
        <LangButton class="lg:ml-5"/>
      </div>
    </nav>
  </div>
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
const avatarBtnStyles = `btn btn-circle h-[37px] w-[37px] min-h-0 p-0 border-none bg-information rounded-full flex justify-center items-center hover:bg-information`

</script>