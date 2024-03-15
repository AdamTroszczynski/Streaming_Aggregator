<template>
  <footer class="w-full flex justify-end items-center flex-col gap-10">
    <div class="w-full flex gap-3 flex-col items-center">

      <div
        class="h-20 w-80 gap-1 bg-gradient-to-br from-[#AC9EFF] to-[#9DB9FF] flex flex-col justify-center items-center drop-shadow-md backdrop-blur-sm rounded-xl">
        <h3 class="text-lg font-bold ">Dołącz do nas:</h3>
        <div class="flex gap-6 justify-center items-center">
          <LinkButton :goTo="`/`" :isLink="true">
            <FacebookIcon></FacebookIcon>
          </LinkButton>
          <LinkButton :goTo="`/`" :isLink="true">
            <InstagramIcon></InstagramIcon>
          </LinkButton>
          <LinkButton :goTo="`/`" :isLink="true">
            <YoutubeIcon></YoutubeIcon>
          </LinkButton>
        </div>
      </div>
      <div
        class="h-24 w-80 gap-1 bg-gradient-to-br from-[#DB86DD] to-[#B38FFF] flex flex-col justify-center items-center drop-shadow-md backdrop-blur-sm rounded-xl">
        <h3 class="text-lg font-bold ">Newsletter Stream 'N Go</h3>
        <LinkButton :goTo="`/`" :isLink="true" class="h-10 w-48 border-4 flex justify-center items-center">
          <h3 class="text-xl font-extrabold">Zapisz się ></h3>
        </LinkButton>
      </div>
    </div>

    <div class="w-full flex flex-col gap-5">
      <h3 class="text-2xl font-bold">STREAM 'N GO</h3>
      <div class="w-full flex flex-col gap-2">
        <h4 class="flex text-sm font-medium gap-5 items-center">
          <MapMarkerIcon></MapMarkerIcon> ul. Ekspresowa 22, 52-130 Wrocław
        </h4>
        <h4 class="flex text-sm font-medium gap-5 items-center">
          <EmailIcon></EmailIcon> kontakt@xxxx.pl
        </h4>
        <h4 class="flex text-sm font-medium gap-5 items-center">
          <PhoneIcon></PhoneIcon> +48 xxx 654 321
        </h4>
      </div>
    </div>

    <div class="w-full flex">
      <ul class="w-1/2">
        <li><LinkButton :goTo="`/`" :isLink="true">Szkolenia</LinkButton></li>
        <li><LinkButton :goTo="`/`" :isLink="true">Prezentacje</LinkButton></li>
        <li><LinkButton :goTo="`/`" :isLink="true">Konferencje</LinkButton></li>
        <li><LinkButton :goTo="`/`" :isLink="true">Seminaria</LinkButton></li>
      </ul>
      <ul class="w-1/2">
        <li><LinkButton :goTo="`/`" :isLink="true">Strona główna</LinkButton></li>
        <li><LinkButton :goTo="`/`" :isLink="true">Dodaj streaming</LinkButton></li>
        <li><LinkButton :goTo="`/`" :isLink="true">Organizacje</LinkButton></li>
        <li><LinkButton :goTo="`/`" :isLink="true">Kontakt</LinkButton></li>
      </ul>
    </div>
    <div class="w-full font-medium">© 2024 | Stream N' Go Sp. z o. o.</div>
    <div class="w-full h-[1px] absolute bg-white opacity-60 shadow top-[93.5%]"></div>
  </footer>
</template>
<script setup lang="ts">
import FacebookIcon from '@/components/icons/socialmedia/FacebookIcon.vue';
import InstagramIcon from '@/components/icons/socialmedia/InstagramIcon.vue';
import YoutubeIcon from '@/components/icons/socialmedia/YoutubeIcon.vue';
import MapMarkerIcon from '@/components/icons/footer/MapMarkerIcon.vue';
import EmailIcon from '@/components/icons/footer/EmailIcon.vue';
import PhoneIcon from '@/components/icons/footer/PhoneIcon.vue';
import LinkButton from '@/components/buttons/LinkButton.vue';
</script>