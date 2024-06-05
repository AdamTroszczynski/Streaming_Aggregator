<template>
  <main class="flex min-h-screen w-full flex-col bg-white">
    <NavigationBar
      :is-adv="false"
      :selected="''"
      :is-login="userStore.isUserLoggedIn"
    />
    <div class="mt-[-500px] flex flex-col items-center p-6 lg:mt-[-300px]">
      <div
        class="flex min-h-[400px] w-full flex-col items-center justify-between gap-6 rounded-2xl bg-white p-6 shadow-2xl lg:w-[40%] lg:p-12"
      >
        <h1
          class="text-center text-[2.375rem] font-bold text-navy lg:text-[3rem]"
        >
          Email zweryfikowany!
        </h1>
        <CheckIcon class="h-[80px] w-[80px]" />
        <SubmitButton @click-action="router.push('/login')" class="lg:w-[70%]"
          >Zaloguj się</SubmitButton
        >
      </div>
    </div>
    <MainFooter />
  </main>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/common/NavigationBar.vue';
import MainFooter from '@/components/common/MainFooter.vue';
import { useUserStore } from '@/stores/userStore';
import CheckIcon from '@/components/icons/details/CheckIcon.vue';
import { verifyAccount } from '@/services/userServices';
import SubmitButton from '@/components/buttons/SubmitButton.vue';
import { useRouter, useRoute } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

onMounted(async () => {
  const token = route.query.token;
  if (typeof token === 'string') {
    try {
      const response = await verifyAccount(token);
    } catch (error) {
      console.log(error);
    }
  }
});
</script>
