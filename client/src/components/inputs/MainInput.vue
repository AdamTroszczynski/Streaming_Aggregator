<template>
  <label class="form-control w-full">
    <div v-if="label" class="label pb-1">
      <span class="label-text text-sm font-medium text-navy lg:text-base"
        >{{ label }} <span v-if="isRequired" class="text-red">*</span></span
      >
    </div>
    <input
      v-model="value"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      class="input input-bordered input-sm w-full border-inputGrey bg-white text-black lg:input-md focus:border-inputGrey lg:h-9 lg:px-4 lg:text-base"
    />
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
  type: {
    type: String,
    required: true,
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
