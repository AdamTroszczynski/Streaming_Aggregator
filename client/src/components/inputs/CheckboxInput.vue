<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-row items-center gap-3">
      <input
        v-model="value"
        :name="name"
        id="link-checkbox"
        type="checkbox"
        class="checkbox-primary checkbox checkbox-sm h-5 w-5 rounded-md border-inputGrey bg-white ring-0"
      />
      <label
        for="link-checkbox"
        class="text-start text-[0.8rem] font-medium text-black lg:text-base"
      >
        <slot></slot>
      </label>
    </div>
    <div v-if="errorMessage">
      <span class="text-xs text-red lg:text-sm"> - {{ errorMessage }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

/** Catch value and errors from field (input component) */
const { errorMessage, value } = useField<boolean>(() => props.name);
</script>
