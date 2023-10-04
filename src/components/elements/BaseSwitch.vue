<template>
  <label class="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      value=""
      class="sr-only peer"
      :checked="props.modelValue"
      @change="onChange"
      :disabled="props.disabled"
      :id="`switchDefault-${idComp}`"
      :class="props.disabled ? 'border-gray' : 'border-black'"
    />
    <div
      class="w-9 h-5 bg-white-2 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-light dark:peer-focus:ring-secondary rounded-full peer dark:bg-gray peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-tr"
      :class="
        props.disabled
          ? 'peer-checked:from-gray-1 peer-checked:to-gray'
          : 'peer-checked:from-secondary peer-checked:to-primary'
      "
    ></div>
    <span
      v-if="props.label"
      :for="`switchDefault-${idComp}`"
      class="ml-3 text-sm font-medium text-secondary"
    >
      {{ props.label }}
    </span>
  </label>
</template>

<script setup>
import { useComponentStore } from "@/stores/component";
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue", "change"]);
const onChange = (event) => {
  emit("update:modelValue", event.target.checked);
  emit("change", event.target.checked);
};
const useComponent = useComponentStore();
useComponent.setUid();
const idComp = ref(useComponent.uid);
</script>
