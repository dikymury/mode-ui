<script setup>
const props = defineProps({
  zIndex: {
    type: String,
    default: "z-50",
  },
  persistent: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["overlay-click"]);

const overlayClick = (event) => {
  if (!props.persistent) {
    emit("overlay-click", event);
  }
};
</script>

<template>
  <div :class="[props.zIndex]" class="overflow-hidden fixed inset-0">
    <transition
      enter-active-class="transition duration-150 ease-in"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        class="absolute inset-0 bg-gradient-to-tr dark:from-gray-4 dark:via-gray-2 dark:to-gray-4 dark:bg-gray-2 opacity-50 from-gray-3 via-gray-2 to-gray-7"
        @click="overlayClick"
      />
    </transition>
  </div>
</template>
