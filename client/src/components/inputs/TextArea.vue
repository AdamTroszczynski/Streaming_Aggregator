<template>
  <label class="form-control relative w-full">
    <div v-if="label" class="label pb-1">
      <span class="label-text text-sm font-medium text-navy lg:text-base"
        >{{ label }} <span v-if="isRequired" class="text-red">*</span></span
      >
    </div>
    <textarea
      v-model="value"
      class="textarea textarea-bordered textarea-md relative h-24 w-full border-inputGrey bg-white px-3 py-1 leading-5 text-black focus:border-inputGrey lg:h-36 lg:px-4 lg:text-base"
      :placeholder="placeholder"
    ></textarea>
    <div v-if="errorMessage" class="mt-[-3px]">
      <span class="text-xs text-red lg:text-sm"> - {{ errorMessage }} </span>
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
  placeholder: {
    type: String,
    default: '',
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
});
</script>
