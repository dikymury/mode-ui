<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 19 16"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M2.50007 2H16.5001C17.0501 2 17.5001 1.55 17.5001 1C17.5001 0.45 17.0501 0 16.5001 0H2.50007C1.95007 0 1.50007 0.45 1.50007 1C1.50007 1.55 1.95007 2 2.50007 2ZM17.6601 3.8C17.5701 3.34 17.1601 3 16.6801 3H2.32007C1.84007 3 1.43007 3.34 1.34007 3.8L0.340074 8.8C0.220074 9.42 0.690074 10 1.32007 10H1.50007V15C1.50007 15.55 1.95007 16 2.50007 16H10.5001C11.0501 16 11.5001 15.55 11.5001 15V10H15.5001V15C15.5001 15.55 15.9501 16 16.5001 16C17.0501 16 17.5001 15.55 17.5001 15V10H17.6801C18.3101 10 18.7801 9.42 18.6601 8.8L17.6601 3.8ZM9.50007 14H3.50007V10H9.50007V14Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="19" height="19" fill="none" />
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
