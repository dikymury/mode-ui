<script setup>
import { onMounted, ref } from "vue"

const props = defineProps({
  color: {
    type: String,
    default: "primary"
  },
  width: {
    type: String,
    default: "w-fit"
  },
  height: {
    type: String,
    default: "h-[15px]"
  }
})
const style = ref("")
onMounted(() => {
  switch (props.color) {
    case "primary":
      style.value = "bg-primary"
      break
    case "blue":
      style.value = "bg-blue"
      break
    case "yellow":
      style.value = "bg-yellow"
      break
    case "error":
      style.value = "bg-error"
      break
    case "gray":
      style.value = "bg-gray"
      break
    case "white-2":
      style.value = "bg-white-2"
      break
    case "warning":
      style.value = "bg-warning"
      break
    case "success":
      style.value = "bg-success"
      break
    default:
      style.value = "bg-green"
      break
  }
})
</script>
<template>
  <div
    :class="[style, width, height]"
    class="flex text-[10px]/[15px] text-white px-2 rounded-full whitespace-nowrap"
  >
    <slot />
  </div>
</template>
