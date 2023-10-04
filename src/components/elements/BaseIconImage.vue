<template>
  <div
    :class="[`icons-${props.size || 'medium'}`, props.icon]"
    class="icon-container"
    :style="styles"
  ></div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: 'i-default'
  },
  color: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: 24
  },
  height: {
    type: [String, Number],
    default: 24
  }
})
var styles = ref('')
if (!props.size) {
  styles.value = `width : ${props.width}px; height : ${props.height}px;`
}
if (props.color) {
  switch (props.color) {
    case 'white':
      styles.value = ` text-white`
      break

    default:
      break
  }
}
</script>
