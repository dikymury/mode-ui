<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 18 21"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M15 14.4844L17.0156 16.5V17.4844H0.984375V16.5L3 14.4844V9.51562C3 7.95312 3.39062 6.59375 4.17188 5.4375C4.98438 4.28125 6.09375 3.53125 7.5 3.1875V2.48438C7.5 2.07812 7.64062 1.73438 7.92188 1.45312C8.20312 1.14062 8.5625 0.984375 9 0.984375C9.4375 0.984375 9.79688 1.14062 10.0781 1.45312C10.3594 1.73438 10.5 2.07812 10.5 2.48438V3.1875C11.9062 3.53125 13 4.28125 13.7812 5.4375C14.5938 6.59375 15 7.95312 15 9.51562V14.4844ZM9 20.4844C8.4375 20.4844 7.95312 20.2969 7.54688 19.9219C7.17188 19.5469 6.98438 19.0781 6.98438 18.5156H11.0156C11.0156 19.0469 10.8125 19.5156 10.4062 19.9219C10 20.2969 9.53125 20.4844 9 20.4844Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="21" height="21" fill="none" />
      </clipPath>
    </defs>
  </svg>
</template>
<script setup>
import LinearGradientSvg from "./components/LinearGradientSvg.vue";
defineProps({
  width: {
    type: [String, Number],
    default: 18,
  },
  height: {
    type: [String, Number],
    default: 18,
  },
  gradient: {
    type: Boolean,
    default: false,
  },
  // id uniq for every svg icon
  idx: {
    type: [String, Number],
    default: "1",
  },
});
</script>
