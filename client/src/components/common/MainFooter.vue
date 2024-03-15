<template>
  <footer class="w-full flex justify-end items-center flex-col gap-10 relative text-white">
    <div class="w-full flex gap-3 flex-col items-center lg:flex-row lg:justify-center lg:gap-14">
      <div class="h-20 w-80 gap-1 bg-gradient-to-br from-gradients-peranoPurple to-gradients-peranoBlue flex flex-col justify-center items-center drop-shadow-lg backdrop-blur-sm rounded-xl
          lg:h-52 lg:w-[26.875rem] lg:rounded-[3.125rem] lg:gap-8">
        <h3 class="text-lg font-bold select-none lg:text-2xl">Dołącz do nas:</h3>
        <div class="flex gap-6 justify-center items-center lg:gap-10">
          <LinkButton :goTo="`/`" :isLink="true">
            <FacebookIcon class="lg:w-[50px] lg:h-[50px]"></FacebookIcon>
          </LinkButton>
          <LinkButton :goTo="`/`" :isLink="true">
            <InstagramIcon class="lg:w-[50px] lg:h-[50px]"></InstagramIcon>
          </LinkButton>
          <LinkButton :goTo="`/`" :isLink="true">
            <YoutubeIcon class="lg:w-[50px] lg:h-[50px]"></YoutubeIcon>
          </LinkButton>
        </div>
      </div>
      <div class="h-24 w-80 gap-1 bg-gradient-to-br from-gradients-orchid to-gradients-bilobaFlower flex flex-col justify-center items-center drop-shadow-md backdrop-blur-sm rounded-xl
          lg:h-52 lg:w-[26.875rem] lg:rounded-[3.125rem] lg:gap-8">
        <h3 class="text-lg font-bold select-none lg:text-2xl">Newsletter Stream 'N Go</h3>
        <LinkButton :goTo="`/`" :isLink="true"
          class="h-10 w-48 border-4 flex justify-center items-center select-none lg:h-14 lg:w-64">
          <h3 class="text-xl font-extrabold select-none lg:text-3xl">Zapisz się ></h3>
        </LinkButton>
      </div>
    </div>

    <div class="w-full flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-around lg:w-2/3 lg:max-w-5xl">
      <div class="w-full flex flex-col gap-5 lg:w-max">
        <h3 class="text-2xl font-bold select-none w-max">STREAM 'N GO</h3>
        <div class="flex flex-col gap-2 w-max">
          <h4 class="flex text-sm font-medium gap-5 items-center w-max">
            <MapMarkerIcon></MapMarkerIcon> ul. Ekspresowa 22, 52-130 Wrocław
          </h4>
          <h4 class="flex text-sm font-medium gap-5 items-center w-max">
            <EmailIcon></EmailIcon> kontakt@xxxx.pl
          </h4>
          <h4 class="flex text-sm font-medium gap-5 items-center w-max">
            <PhoneIcon></PhoneIcon> +48 xxx 654 321
          </h4>
        </div>
      </div>

      <div class="w-full flex lg:w-max lg:gap-36">
        <ul class="flex w-1/2 flex-col lg:gap-1 lg:w-max">
          <li>
            <LinkButton :goTo="`/`" :isLink="true">Szkolenia</LinkButton>
          </li>
          <li>
            <LinkButton :goTo="`/`" :isLink="true">Prezentacje</LinkButton>
          </li>
          <li>
            <LinkButton :goTo="`/`" :isLink="true">Konferencje</LinkButton>
          </li>
          <li>
            <LinkButton :goTo="`/`" :isLink="true">Seminaria</LinkButton>
          </li>
        </ul>
        <ul class="flex w-1/2 flex-col lg:gap-1 lg:w-max">
          <li>
            <LinkButton :goTo="`/`" :isLink="true">Strona główna</LinkButton>
          </li>
          <li>
            <LinkButton :goTo="`/`" :isLink="true">Dodaj streaming</LinkButton>
          </li>
          <li>
            <LinkButton :goTo="`/`" :isLink="true">Organizacje</LinkButton>
          </li>
          <li>
            <LinkButton :goTo="`/`" :isLink="true">Kontakt</LinkButton>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full font-medium lg:pb-0">© 2024 | Stream N' Go Sp. z o. o.</div>
    <div class="w-full h-[1px] absolute bg-white opacity-60 shadow top-[93%]"></div>
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