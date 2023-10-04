<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 8 4"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M3.40136 3.30774L1.20067 1.33606C0.932633 1.09591 0.87282 0.821142 1.02123 0.511738C1.16963 0.202335 1.434 0.0473806 1.81432 0.046875H6.17338C6.55427 0.046875 6.81892 0.201829 6.96732 0.511738C7.11573 0.821647 7.05563 1.09642 6.78704 1.33606L4.58634 3.30774C4.5017 3.38358 4.41001 3.44045 4.31126 3.47837C4.21251 3.51629 4.10671 3.53525 3.99385 3.53525C3.88099 3.53525 3.77519 3.51629 3.67644 3.47837C3.57769 3.44045 3.486 3.38358 3.40136 3.30774Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="8" height="8" fill="none" />
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
