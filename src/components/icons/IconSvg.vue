<script setup>
import { computed, defineAsyncComponent, ref } from "vue"
const props = defineProps({
  icon: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: "black"
  },
  width: {
    type: [String, Number],
    default: 18
  },
  height: {
    type: [String, Number],
    default: 18
  },
  classes: {
    type: [String, Number],
    default: 18
  }
})
const comp = computed(() => {
  if (props.icon) {
    let name = props.icon
    return defineAsyncComponent(() => import(`./icons/${name}.vue`))
  }
  return ""
})
const colour = computed(() => {
  switch (props.color) {
    case "black":
      return "text-black"

    case "white":
      return "text-white"

    case "primary":
      return "text-primary"

    case "blue":
      return "text-blue"

    case "red":
      return "text-red"

    case "green":
      return "text-green"

    case "gray":
      return "text-gray"

    case "disabled":
      return "text-disabled"

    default:
      return "text-black"
  }
})
const idx = ref(new Date().getUTCMilliseconds())
</script>

<template>
  <div :class="[colour, props.classes]" class="object-contain">
    <component
      :is="comp"
      :width="props.width"
      :height="props.height"
      :gradient="props.color == 'primary'"
      :idx="idx"
    ></component>
  </div>
</template>
