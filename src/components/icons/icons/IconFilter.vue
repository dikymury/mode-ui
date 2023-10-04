<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 16 16"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M13.0002 1.3335H3.00023C2.07939 1.3335 1.31189 2.09183 1.53939 2.9835C1.78159 3.92841 2.22773 4.80883 2.84649 5.56292C3.46526 6.31701 4.24162 6.92647 5.12106 7.3485C5.80689 7.67683 6.33356 8.32183 6.33356 9.08183V14.1518C6.33364 14.2938 6.36999 14.4334 6.43918 14.5574C6.50837 14.6814 6.60809 14.7857 6.72889 14.8603C6.84969 14.935 6.98755 14.9775 7.1294 14.9839C7.27125 14.9903 7.41238 14.9603 7.53939 14.8968L9.20606 14.0635C9.34446 13.9943 9.46088 13.888 9.54227 13.7564C9.62366 13.6249 9.66681 13.4732 9.66689 13.3185V9.08183C9.66689 8.32183 10.1936 7.67683 10.8786 7.3485C11.7583 6.92671 12.5351 6.31735 13.1541 5.56324C13.7732 4.80914 14.2196 3.92859 14.4619 2.9835C14.6877 2.09183 13.9194 1.3335 13.0002 1.3335Z"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="1.5"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="16" height="16" fill="none" />
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
