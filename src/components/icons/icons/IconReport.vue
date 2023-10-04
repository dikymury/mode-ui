<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 16 20"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M9 6.2C9 6.64183 9.35817 7 9.8 7H12.5686C13.2814 7 13.6383 6.13829 13.1343 5.63431L9.85355 2.35355C9.53857 2.03857 9 2.26165 9 2.70711V6.2ZM2 0H9.79289C9.9255 0 10.0527 0.0526784 10.1464 0.146447L15.8536 5.85355C15.9473 5.94732 16 6.0745 16 6.20711V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2C0 0.89 0.89 0 2 0ZM3 17C3 17.5523 3.44772 18 4 18V18C4.55228 18 5 17.5523 5 17V13C5 12.4477 4.55228 12 4 12V12C3.44772 12 3 12.4477 3 13V17ZM7 17C7 17.5523 7.44772 18 8 18V18C8.55228 18 9 17.5523 9 17V11C9 10.4477 8.55228 10 8 10V10C7.44772 10 7 10.4477 7 11V17ZM11 17C11 17.5523 11.4477 18 12 18V18C12.5523 18 13 17.5523 13 17V15C13 14.4477 12.5523 14 12 14V14C11.4477 14 11 14.4477 11 15V17Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="16" height="20" fill="none" />
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
