<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 21 24"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M18.9 2.6H17.85V1.55C17.85 0.9725 17.3775 0.5 16.8 0.5C16.2225 0.5 15.75 0.9725 15.75 1.55V2.6H5.25V1.55C5.25 0.9725 4.7775 0.5 4.2 0.5C3.6225 0.5 3.15 0.9725 3.15 1.55V2.6H2.1C0.945 2.6 0 3.545 0 4.7V21.5C0 22.655 0.945 23.6 2.1 23.6H18.9C20.055 23.6 21 22.655 21 21.5V4.7C21 3.545 20.055 2.6 18.9 2.6ZM17.85 21.5H3.15C2.5725 21.5 2.1 21.0275 2.1 20.45V7.85H18.9V20.45C18.9 21.0275 18.4275 21.5 17.85 21.5Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="24" height="24" fill="none" />
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
