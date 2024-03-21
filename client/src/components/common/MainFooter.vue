<template>
  <footer
    class="relative z-[1] flex h-[595px] w-full items-end bg-[url(/FooterBgMb.png)] bg-cover bg-no-repeat sm:bg-[url(/FooterBgPc.png)]"
  >
    <div
      class="relative flex h-max w-full flex-col items-center justify-end gap-10 text-white"
    >
      <div
        class="relative z-[2] flex w-full flex-col items-center gap-3 lg:flex-row lg:justify-center lg:gap-14"
      >
        <div
          class="flex h-20 w-80 flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-br from-gradients-peranoBlue to-gradients-peranoPurple drop-shadow-lg backdrop-blur-sm lg:h-52 lg:w-[26.875rem] lg:gap-8 lg:rounded-[3.125rem]"
        >
          <h3 class="select-none text-lg font-bold lg:text-2xl">
            {{ t(`footer.joinUs`) }}
          </h3>
          <div class="flex items-center justify-center gap-6 lg:gap-10">
            <LinkButton :go-to="`/`" :is-link="true">
              <FacebookIcon class="lg:h-[50px] lg:w-[50px]" />
            </LinkButton>
            <LinkButton :go-to="`/`" :is-link="true">
              <InstagramIcon class="lg:h-[50px] lg:w-[50px]" />
            </LinkButton>
            <LinkButton :go-to="`/`" :is-link="true">
              <YoutubeIcon class="lg:h-[50px] lg:w-[50px]" />
            </LinkButton>
          </div>
        </div>
        <div
          class="flex h-24 w-80 flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-br from-gradients-orchid to-gradients-bilobaFlower drop-shadow-md backdrop-blur-sm lg:h-52 lg:w-[26.875rem] lg:gap-8 lg:rounded-[3.125rem]"
        >
          <h3 class="select-none text-lg font-bold lg:text-2xl">
            {{ t(`footer.newsletter`) }}
          </h3>
          <LinkButton
            :go-to="`/`"
            :is-link="true"
            class="flex h-10 w-48 select-none items-center justify-center border-4 lg:h-14 lg:w-64"
          >
            <h3 class="select-none text-xl font-extrabold lg:text-3xl">
              {{ t(`footer.signUp`) }}
            </h3>
          </LinkButton>
        </div>
      </div>

      <div
        class="relative z-[2] flex w-full flex-col gap-10 px-8 lg:w-2/3 lg:max-w-5xl lg:flex-row lg:items-center lg:justify-around"
      >
        <div class="flex w-full flex-col gap-5 lg:w-max">
          <h3 class="w-max select-none text-2xl font-bold">STREAM 'N GO</h3>
          <div class="flex w-max flex-col gap-2">
            <h4 class="flex w-max items-center gap-5 text-sm font-medium">
              <MapMarkerIcon /> ul. Ekspresowa 22, 52-130 Wrocław
            </h4>
            <h4 class="flex w-max items-center gap-5 text-sm font-medium">
              <EmailIcon /> kontakt@xxxx.pl
            </h4>
            <h4 class="flex w-max items-center gap-5 text-sm font-medium">
              <PhoneIcon /> +48 xxx 654 321
            </h4>
          </div>
        </div>

        <div class="flex w-full gap-8 lg:w-max lg:gap-36">
          <ul class="flex w-1/2 flex-col lg:w-max lg:gap-1">
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
          <ul class="flex w-1/2 flex-col lg:w-max lg:gap-1">
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
      <div class="relative z-[2] w-full px-8 py-2 font-medium lg:px-14 lg:py-4">
        © 2024 | Stream N' Go Sp. z o. o.
      </div>
      <div
        class="absolute top-[93%] z-[2] h-[1px] w-full bg-white opacity-60 shadow lg:top-[88%]"
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
