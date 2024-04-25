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
      class="select select-bordered select-sm w-full border-inputGrey bg-white py-1.5 text-[0.8rem] text-sm text-black focus:border-inputGrey lg:h-9 lg:px-4 lg:text-base"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <div v-if="errorMessage" class="mt-[-3px]">
      <span class="text-xs text-red lg:text-sm"> - {{ errorMessage }} </span>
    </div>
  </label>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import { type SelectOptions } from '@/types/commonTypes';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  options: {
    type: Array<SelectOptions>,
    required: true,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
});

/** Catch value and errors from field (input component) */
const { errorMessage, value } = useField<string>(() => props.name);
</script>
