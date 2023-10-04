<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 19 19"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M17.284 18.5C15.134 18.5 13.0383 18.025 10.997 17.075C8.95565 16.125 7.14732 14.8583 5.57198 13.275C3.99665 11.6917 2.72998 9.879 1.77198 7.837C0.813985 5.795 0.334651 3.69933 0.333984 1.55V1.025C0.333984 0.841667 0.350651 0.666667 0.383984 0.5H6.23398L7.15898 5.525L4.30898 8.4C5.00898 9.6 5.88832 10.725 6.94698 11.775C8.00565 12.825 9.16798 13.7333 10.434 14.5L13.334 11.6L18.334 12.6V18.45C18.1673 18.4667 17.9923 18.4793 17.809 18.488C17.6257 18.4967 17.4507 18.5007 17.284 18.5Z"
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
