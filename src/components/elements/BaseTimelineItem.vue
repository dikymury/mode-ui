<template>
  <div class="relative base-timeline-item flex text-black w-full">
    <div class="z-10">
      <icon-svg :icon="icon" width="14" :color="color" height="17" />
    </div>
    <div class="pl-4" style="width: calc(100% - 14px)">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: "IconEllipse",
  },
  color: {
    type: String,
    default: "blue",
  },
});
</script>
