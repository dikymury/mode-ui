<template>
  <div>
    <label
      v-if="props.label"
      for="price"
      :class="{ 'text-error': error.length }"
      class="block mb-1 ml-4 text-sm font-medium leading-6 text-gray-900"
      >{{ props.label }}</label
    >
    <div class="relative shadow-sm" :class="rounded">
      <select
        @change="updateValue"
        :value="modelValue"
        :class="[
          props.height,
          props.rounded,
          props.classes,
          {
            'outline outline-1 outline-offset-0 outline-error': error.length,
          },
        ]"
        class="block w-full px-4 pr-8 outline-none bg-gray-4 text-xs font-medium placeholder:text-gray"
      >
        <option selected value="" class="text-gray" v-if="placeholder">
          {{ placeholder }}
        </option>
        <option v-for="x in items" :key="x.value" :value="x.value">
          {{ x.name }}
        </option>
      </select>
      <div
        class="cursor-pointer absolute sm:text-sm top-1/2 -translate-y-1/2 right-4 flex items-center"
      >
        <icon-svg icon="IconArrowDown" :width="10" :height="8" />
      </div>
    </div>
    <div
      v-if="error.length"
      class="px-4 whitespace-normal text-[10px] leading-[15px] pt-1 text-error"
    >
      {{ error[0].$message }}
    </div>
  </div>
</template>

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
  items: {
    type: Array,
    default() {
      return [];
    },
    // default [{
    //   name: "1",
    //   value: "Satu"
    // }]
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number],
  },
  height: {
    type: String,
    default: "h-10",
  },
  rounded: {
    type: String,
    default: "rounded-full",
  },
  classes: {
    type: String,
    default: "",
  },
  error: {
    type: Array,
    default: function () {
      return [];
    },
  },
});
const emit = defineEmits(["update:modelValue", "change"]);
const updateValue = (event) => {
  if (!props.disabled) {
    emit("update:modelValue", event.target.value);
    emit("change", event.target.value);
  }
};
</script>

<style>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}
</style>
