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
        d="M2 16.25H3.4L12.025 7.625L10.625 6.225L2 14.85V16.25ZM16.3 6.175L12.05 1.975L13.45 0.575C13.8333 0.191667 14.3043 0 14.863 0C15.4217 0 15.8923 0.191667 16.275 0.575L17.675 1.975C18.0583 2.35833 18.2583 2.821 18.275 3.363C18.2917 3.905 18.1083 4.36733 17.725 4.75L16.3 6.175ZM1 18.25C0.71667 18.25 0.479003 18.154 0.287003 17.962C0.0950034 17.77 -0.000663206 17.5327 3.46021e-06 17.25V14.425C3.46021e-06 14.2917 0.0250035 14.1623 0.0750035 14.037C0.125004 13.9117 0.200003 13.7993 0.300003 13.7L10.6 3.4L14.85 7.65L4.55 17.95C4.45 18.05 4.33767 18.125 4.213 18.175C4.08834 18.225 3.959 18.25 3.825 18.25H1ZM11.325 6.925L10.625 6.225L12.025 7.625L11.325 6.925Z"
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
