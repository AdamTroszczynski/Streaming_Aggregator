<template>
  <footer
    class="w-full h-[595px] relative flex items-end bg-[url(/FooterBgMobile.png)] z-[1] sm:bg-[url(/FooterBgPc.png)] bg-no-repeat bg-cover"
  >
    <div
      class="w-full h-max flex justify-end items-center flex-col gap-10 relative text-white"
    >
      <div
        class="w-full flex gap-3 flex-col items-center lg:flex-row lg:justify-center lg:gap-14 relative z-[2]"
      >
        <div
          class="h-20 w-80 gap-1 bg-gradient-to-br to-gradients-peranoPurple from-gradients-peranoBlue flex flex-col justify-center items-center drop-shadow-lg rounded-xl backdrop-blur-sm lg:h-52 lg:w-[26.875rem] lg:rounded-[3.125rem] lg:gap-8"
        >
          <h3 class="text-lg font-bold select-none lg:text-2xl">
            {{ t(`footer.joinUs`) }}
          </h3>
          <div class="flex gap-6 justify-center items-center lg:gap-10">
            <LinkButton :go-to="`/`" :is-link="true">
              <FacebookIcon class="lg:w-[50px] lg:h-[50px]" />
            </LinkButton>
            <LinkButton :go-to="`/`" :is-link="true">
              <InstagramIcon class="lg:w-[50px] lg:h-[50px]" />
            </LinkButton>
            <LinkButton :go-to="`/`" :is-link="true">
              <YoutubeIcon class="lg:w-[50px] lg:h-[50px]" />
            </LinkButton>
          </div>
        </div>
        <div
          class="h-24 w-80 gap-1 bg-gradient-to-br from-gradients-orchid to-gradients-bilobaFlower flex flex-col justify-center items-center drop-shadow-md rounded-xl backdrop-blur-sm lg:h-52 lg:w-[26.875rem] lg:rounded-[3.125rem] lg:gap-8"
        >
          <h3 class="text-lg font-bold select-none lg:text-2xl">
            {{ t(`footer.newsletter`) }}
          </h3>
          <LinkButton
            :go-to="`/`"
            :is-link="true"
            class="h-10 w-48 border-4 flex justify-center items-center select-none lg:h-14 lg:w-64"
          >
            <h3 class="text-xl font-extrabold select-none lg:text-3xl">
              {{ t(`footer.signUp`) }}
            </h3>
          </LinkButton>
        </div>
      </div>

      <div
        class="w-full flex flex-col gap-10 relative z-[2] px-8 lg:flex-row lg:items-center lg:justify-around lg:w-2/3 lg:max-w-5xl"
      >
        <div class="w-full flex flex-col gap-5 lg:w-max">
          <h3 class="text-2xl font-bold select-none w-max">STREAM 'N GO</h3>
          <div class="flex flex-col gap-2 w-max">
            <h4 class="flex text-sm font-medium gap-5 items-center w-max">
              <MapMarkerIcon /> ul. Ekspresowa 22, 52-130 Wrocław
            </h4>
            <h4 class="flex text-sm font-medium gap-5 items-center w-max">
              <EmailIcon /> kontakt@xxxx.pl
            </h4>
            <h4 class="flex text-sm font-medium gap-5 items-center w-max">
              <PhoneIcon /> +48 xxx 654 321
            </h4>
          </div>
        </div>

        <div class="w-full flex gap-8 lg:w-max lg:gap-36">
          <ul class="flex w-1/2 flex-col lg:gap-1 lg:w-max">
            <li>
              <LinkButton :go-to="`/`" :is-link="true">{{
                t(`footer.trainings`)
              }}</LinkButton>
            </li>
            <li>
              <LinkButton :go-to="`/`" :is-link="true">{{
                t(`footer.presentations`)
              }}</LinkButton>
            </li>
            <li>
              <LinkButton :go-to="`/`" :is-link="true">{{
                t(`footer.conferences`)
              }}</LinkButton>
            </li>
            <li>
              <LinkButton :go-to="`/`" :is-link="true">{{
                t(`footer.seminars`)
              }}</LinkButton>
            </li>
          </ul>
          <ul class="flex w-1/2 flex-col lg:gap-1 lg:w-max">
            <li>
              <LinkButton :go-to="`/`" :is-link="true">{{
                t(`footer.homePage`)
              }}</LinkButton>
            </li>
            <li>
              <LinkButton :go-to="`/`" :is-link="true">{{
                t(`footer.addStream`)
              }}</LinkButton>
            </li>
            <li>
              <LinkButton :go-to="`/`" :is-link="true">{{
                t(`footer.organizations`)
              }}</LinkButton>
            </li>
            <li>
              <LinkButton :go-to="`/`" :is-link="true">{{
                t(`footer.contact`)
              }}</LinkButton>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full font-medium relative z-[2] px-8 py-2 lg:px-14 lg:py-4">
        © 2024 | Stream N' Go Sp. z o. o.
      </div>
      <div
        class="w-full h-[1px] absolute bg-white opacity-60 shadow top-[93%] z-[2] lg:top-[88%]"
      ></div>
    </div>
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
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
