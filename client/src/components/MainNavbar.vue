<template>
  <nav class="w-full p-5 flex justify-between items-center border-4 border-black lg:py-3.5 lg:px-14">
    <h2 class="text-2xl font-bold text-black">STREAM 'N GO</h2>
    <ActionButton :isNavibar="true" class="lg:hidden"><MenuIcon></MenuIcon></ActionButton>
    <div class="hidden lg:flex lg:gap-5">
      <LinkButton :isSelect="true">Strona główna</LinkButton>
      <LinkButton>Organizacje</LinkButton>
      <LinkButton>Kontakt</LinkButton>
    </div>
    <div class="hidden lg:flex lg:items-center lg:gap-4">
      <LinkButton>Logowanie</LinkButton>
      <LinkButton :isButton="true">Rejestracja</LinkButton>
      <LangButton class="lg:ml-5"></LangButton>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ActionButton from './buttons/ActionButton.vue';
import MenuIcon from './icons/navbar/MenuIcon.vue';
import LinkButton from './buttons/LinkButton.vue';
import LangButton from './buttons/LangButton.vue';
</script>