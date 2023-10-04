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
        d="M10 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6L10 0ZM14 17C14 17.5523 13.5523 18 13 18H3C2.44772 18 2 17.5523 2 17V3C2 2.44772 2.44772 2 3 2H8C8.55229 2 9 2.44772 9 3V6C9 6.55228 9.44771 7 10 7H13.5C13.7761 7 14 7.22386 14 7.5V17ZM4 11C4.55228 11 5 11.4477 5 12V16C5 16.5523 4.55228 17 4 17C3.44772 17 3 16.5523 3 16V12C3 11.4477 3.44772 11 4 11ZM12 13C11.4477 13 11 13.4477 11 14V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V14C13 13.4477 12.5523 13 12 13ZM8 9C7.44772 9 7 9.44771 7 10V16C7 16.5523 7.44772 17 8 17C8.55229 17 9 16.5523 9 16V10C9 9.44771 8.55229 9 8 9Z"
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
