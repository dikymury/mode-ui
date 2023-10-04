<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 10 18"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M9.6176 0.396208C9.86245 0.649976 10 0.994114 10 1.35294C10 1.71177 9.86245 2.05591 9.6176 2.30968L3.15257 9.00817L9.6176 15.7067C9.85551 15.9619 9.98715 16.3037 9.98418 16.6585C9.9812 17.0133 9.84385 17.3528 9.60169 17.6037C9.35954 17.8546 9.03196 17.9969 8.68951 18C8.34706 18.003 8.01715 17.8666 7.77082 17.6201L0.382399 9.9649C0.137549 9.71114 0 9.367 0 9.00817C0 8.64934 0.137549 8.3052 0.382399 8.05144L7.77082 0.396208C8.01575 0.142516 8.34789 0 8.69421 0C9.04053 0 9.37268 0.142516 9.6176 0.396208Z"
        :fill="gradient ? `url(#$idx)` : 'currentColor'"
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
