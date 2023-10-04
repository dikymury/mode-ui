<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 17 18"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M1 5.25V12.75L7.66667 16.5V9M1 5.25L7.66667 1.5L11 3.375M1 5.25L4.33333 7.125M14.3333 5.25V9M14.3333 5.25L7.66667 9M14.3333 5.25L11 3.375M7.66667 9L4.33333 7.125M10.1667 14H16M16 14L13.5 11.5M16 14L13.5 16.5M4.33333 7.125L11 3.375"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="18" height="18" fill="none" />
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
