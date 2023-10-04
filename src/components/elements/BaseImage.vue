<template>
  <div
    :class="classes"
    class="image-container bg-center bg-contain bg-no-repeat"
    :style="styles"
  ></div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  url: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: '100'
  },
  height: {
    type: [String, Number],
    default: '100'
  },
  classes: {
    type: String,
    default: ''
  }
})
var styles = ref(`background-image: url(${props.url});`)
if (!props.size) {
  styles.value += ` width: ${props.width}px; height: ${props.height}px;`
}
</script>
