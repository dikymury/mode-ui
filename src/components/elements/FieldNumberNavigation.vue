<template>
  <div class="flex items-center gap-1">
    <base-button
      width="w-[25px]"
      height="h-[25px]"
      classes="!pl-0 !pr-0"
      @click.stop="setValue(valueNumber - 1)"
      :disabled="props.disabled"
    >
      <base-icon-mdi color="white" :path="mdiMinus" size="10" />
    </base-button>
    <input
      type="number"
      v-model="valueNumber"
      @change="changeValue"
      :disabled="props.disabled"
      class="field-number-navigation bg-gray-4 text-center text-sm font-light text-gray-8 rounded-full w-[58px] h-10"
    />
    <base-button
      width="w-[25px]"
      height="h-[25px]"
      classes="!pl-0 !pr-0"
      @click.stop="setValue(valueNumber + 1)"
      :disabled="props.disabled"
    >
      <base-icon-mdi color="white" :path="mdiPlus" size="10" />
    </base-button>
  </div>
</template>
<script setup>
import { mdiMinus, mdiPlus } from "@mdi/js";
import { computed, onMounted, ref, watch } from "vue";
const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
  maxValue: {
    type: Number,
    default: 15,
  },
  minValue: {
    type: Number,
    default: 1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const valueNumber = ref(1);
const emit = defineEmits(["update:modelValue", "change"]);
const setValue = (val) => {
  if (val >= props.minValue && val <= props.maxValue) {
    valueNumber.value = val;
  }
  if (val > props.maxValue) {
    valueNumber.value = props.maxValue;
  }
  if (val < props.minValue) {
    valueNumber.value = props.minValue;
  }
  emit("update:modelValue", valueNumber.value);
  emit("change", valueNumber.value);
};
const changeValue = () => {
  setValue(valueNumber.value);
  emit("update:modelValue", valueNumber.value);
  emit("change", valueNumber.value);
};
const model = computed(() => {
  return props.modelValue;
});
watch(model, (val) => {
  valueNumber.value = val;
});
onMounted(() => {
  valueNumber.value = props.modelValue;
});
</script>
<style scoped>
/* Chrome, Safari, Edge, Opera */
.field-number-navigation::-webkit-outer-spin-button,
.field-number-navigation::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.field-number-navigation[type="number"] {
  -moz-appearance: textfield;
}
</style>
