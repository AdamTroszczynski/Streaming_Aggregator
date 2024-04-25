<template>
  <label class="form-control w-full">
    <div v-if="label" class="label pb-1">
      <span class="label-text text-sm font-medium text-navy lg:text-base"
        >{{ label }} <span v-if="isRequired" class="text-red">*</span></span
      >
    </div>
    <select
      v-model="value"
      :name="name"
      class="select select-bordered select-sm w-full border-inputGrey bg-white py-1.5 text-sm text-black focus:border-inputGrey lg:h-9 lg:px-4 lg:text-base"
    >
      <slot></slot>
    </select>
    <div v-if="errorMessage" class="mt-[-3px]">
      <span class="text-xs text-red"> - {{ errorMessage }} </span>
    </div>
  </label>
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
  isRequired: {
    type: Boolean,
    default: false,
  },
});
</script>
