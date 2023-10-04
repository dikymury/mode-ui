<template>
  <div class="relative flex items-center cursor-pointer">
    <icon-svg :icon="icon" :width="width" :height="height" :color="color" :class="classIcon" />
    <div
      class="bg-primary rounded-full text-white text-[10px] min-w-[20px] text-center font-medium px-1 py-0.5 absolute -top-1/4 left-2/3"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: 'IconNotification'
  },
  width: {
    type: Number,
    default: 24
  },
  height: {
    type: Number,
    default: 24
  },
  classIcon: {
    type: String,
    default: 'black'
  },
  color: {
    type: String,
    default: 'primary'
  }
})
</script>
