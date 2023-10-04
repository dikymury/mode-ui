<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 15 9"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M0 1.3C0 1.08783 0.0790176 0.884344 0.21967 0.734315C0.360322 0.584286 0.551088 0.5 0.75 0.5H14.25C14.4489 0.5 14.6397 0.584286 14.7803 0.734315C14.921 0.884344 15 1.08783 15 1.3C15 1.51217 14.921 1.71566 14.7803 1.86569C14.6397 2.01571 14.4489 2.1 14.25 2.1H0.75C0.551088 2.1 0.360322 2.01571 0.21967 1.86569C0.0790176 1.71566 0 1.51217 0 1.3ZM0 4.5C0 4.28783 0.0790176 4.08434 0.21967 3.93431C0.360322 3.78429 0.551088 3.7 0.75 3.7H14.25C14.4489 3.7 14.6397 3.78429 14.7803 3.93431C14.921 4.08434 15 4.28783 15 4.5C15 4.71217 14.921 4.91566 14.7803 5.06569C14.6397 5.21571 14.4489 5.3 14.25 5.3H0.75C0.551088 5.3 0.360322 5.21571 0.21967 5.06569C0.0790176 4.91566 0 4.71217 0 4.5ZM0.75 6.9C0.551088 6.9 0.360322 6.98429 0.21967 7.13432C0.0790176 7.28434 0 7.48783 0 7.7C0 7.91217 0.0790176 8.11566 0.21967 8.26569C0.360322 8.41572 0.551088 8.5 0.75 8.5H9.75C9.94891 8.5 10.1397 8.41572 10.2803 8.26569C10.421 8.11566 10.5 7.91217 10.5 7.7C10.5 7.48783 10.421 7.28434 10.2803 7.13432C10.1397 6.98429 9.94891 6.9 9.75 6.9H0.75Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="15" height="17" fill="none" />
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
