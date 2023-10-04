<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 8 14"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M4 14C2.88485 14 1.93939 13.6267 1.16364 12.88C0.387879 12.1333 0 11.2233 0 10.15V2.8C0 2.03 0.284849 1.37083 0.854546 0.8225C1.42424 0.274167 2.10909 0 2.90909 0C3.70909 0 4.39394 0.274167 4.96364 0.8225C5.53333 1.37083 5.81818 2.03 5.81818 2.8V9.45C5.81818 9.94 5.64242 10.3542 5.29091 10.6925C4.93939 11.0308 4.50909 11.2 4 11.2C3.49091 11.2 3.06061 11.0308 2.70909 10.6925C2.35758 10.3542 2.18182 9.94 2.18182 9.45V2.8H3.27273V9.45C3.27273 9.64833 3.34255 9.81447 3.48218 9.9484C3.62133 10.0828 3.79394 10.15 4 10.15C4.20606 10.15 4.37891 10.0828 4.51855 9.9484C4.6577 9.81447 4.72727 9.64833 4.72727 9.45V2.8C4.72727 2.31 4.55152 1.89583 4.2 1.5575C3.84848 1.21917 3.41818 1.05 2.90909 1.05C2.4 1.05 1.9697 1.21917 1.61818 1.5575C1.26667 1.89583 1.09091 2.31 1.09091 2.8V10.15C1.09091 10.92 1.37576 11.5792 1.94545 12.1275C2.51515 12.6758 3.2 12.95 4 12.95C4.8 12.95 5.48485 12.6758 6.05455 12.1275C6.62424 11.5792 6.90909 10.92 6.90909 10.15V2.8H8V10.15C8 11.2233 7.61212 12.1333 6.83636 12.88C6.06061 13.6267 5.11515 14 4 14Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="8" height="14" fill="none" />
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
