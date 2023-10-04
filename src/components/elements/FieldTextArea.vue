<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String || Number,
  },
  error: {
    type: Array,
    default: function () {
      return [];
    },
  },
  rows: {
    type: String,
    default: "3",
  },
  width: {
    type: String,
    default: "w-full",
  },
});
const emit = defineEmits(["update:modelValue"]);
const updateValue = (event) => {
  if (!props.disabled) {
    emit("update:modelValue", event.target.value);
  }
};
</script>

<template>
  <div>
    <label
      v-if="props.label"
      for="price"
      :class="{ 'text-error': error.length }"
      class="block mb-1 ml-4 text-sm font-medium leading-6 text-gray-900"
      >{{ props.label }}</label
    >
    <div class="w-full relative rounded-2xl shadow-sm">
      <div v-if="disabled" class="absolute w-full h-full"></div>
      <textarea
        :value="modelValue"
        @input="updateValue"
        :rows="props.rows"
        :class="[
          {
            'outline outline-1 outline-offset-0 outline-error': error.length,
          },
          props.disabled ? 'text-gray-6' : 'text-black',
        ]"
        :name="`x-${label}`"
        :disabled="props.disabled"
        class="block outline-none px-4 resize-none bg-gray-4 py-2.5 w-full h-full rounded-2xl text-xs leading-[18px] font-normal placeholder:text-gray"
        :placeholder="placeholder"
      />
    </div>
    <div
      v-if="error.length"
      class="px-4 whitespace-normal text-[10px] leading-[15px] pt-1 2xl:pt-1 text-error"
    >
      {{ error[0].$message }}
    </div>
  </div>
</template>
