<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-row items-center gap-3">
      <input
        v-model="value"
        :name="name"
        id="link-checkbox"
        type="checkbox"
        class="h-5 w-5 rounded-md border-inputGrey bg-white"
      />
      <label
        for="link-checkbox"
        class="text-sm font-medium text-black lg:text-base"
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

/** Catch value and errors from field (input component) */
const { errorMessage, value } = useField<string>(() => props.name);

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
});
</script>
