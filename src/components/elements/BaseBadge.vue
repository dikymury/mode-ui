<template>
  <div class="relative flex items-center cursor-pointer">
    <icon-svg
      :icon="props.icon"
      :width="props.width"
      :height="props.height"
      :color="props.color"
      :class="props.classIcon"
    />
    <div
      class="bg-primary rounded-full text-white text-[10px] min-w-[20px] text-center font-medium px-1 py-0.5 absolute -top-1/4 left-2/3"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  icon: string
  width: number
  height: number
  classIcon: string
  color: string
}
const props = withDefaults(defineProps<Props>(), {
  icon: "IconNotification",
  width: 24,
  height: 24,
  classIcon: "black",
  color: "primary"
})
</script>
