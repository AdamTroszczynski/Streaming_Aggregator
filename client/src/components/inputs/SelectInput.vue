<template>
  <label class="form-control w-full">
    <div v-if="label" class="label pb-1">
      <span class="label-text text-sm font-medium text-navy lg:text-base"
        >{{ label }} <span v-if="isRequired" class="text-red">*</span></span
      >
    </div>
    <select class="select select-bordered select-sm w-full py-1.5 text-sm">
      <option disabled selected>Choose One</option>
      <option>Small Apple</option>
      <option>Small Orange</option>
      <option>Small Tomato</option>
    </select>
    <div v-if="errorMessage">
      <span class=""> - {{ errorMessage }} </span>
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
