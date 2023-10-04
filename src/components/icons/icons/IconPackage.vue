<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 16 19"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M15 5.5L8 1.5L1 5.5M15 5.5V13.5L8 17.5M15 5.5L8 9.5M8 17.5L1 13.5V5.5M8 17.5V9.5M1 5.5L8 9.5M11.5 3.5L4.5 7.5"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect
          width="19"
          height="19"
          :fill="gradient ? `url(#${idx})` : 'currentColor'"
        />
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
