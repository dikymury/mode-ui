<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  maxWidth: {
    type: [String, Number],
    default: "400px",
  },
  persistent: {
    type: Boolean,
    default: false,
  },
  zIndex: {
    type: String,
    default: "50",
  },
});
const emit = defineEmits(["update:modelValue"]);
const updateValue = () => {
  if (!props.persistent) {
    emit("update:modelValue", false);
  }
};
const zIndexes = computed(() => {
  switch (props.zIndex) {
    case "50":
      return "z-50";
    case "60":
      return "z-[60]";
    case "70":
      return "z-[70]";
    default:
      return "z-50";
  }
});

const zIndexContain = computed(() => {
  switch (props.zIndex) {
    case "50":
      return "z-[51]";
    case "60":
      return "z-[61]";
    case "70":
      return "z-[71]";
    default:
      return "z-[51]";
  }
});
</script>

<template>
  <teleport to="#app">
    <div
      v-show="props.modelValue"
      :class="zIndexes"
      class="fixed top-0 left-0 w-full h-full"
    >
      <div
        :class="zIndexContain"
        class="absolute top-1/2 -translate-y-1/2 w-screen min-w-[300px] overflow-y-auto overflow-hidden scrollbar-hide max-h-screen left-1/2 p-4 -translate-x-1/2"
        :style="`max-width: calc(${props.maxWidth} + 32px)`"
      >
        <div class="relative w-full">
          <slot />
        </div>
      </div>
      <OverlayLayer @overlay-click="updateValue" :z-index="zIndexes">
      </OverlayLayer>
    </div>
  </teleport>
</template>
