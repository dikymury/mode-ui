<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 20 18"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M4.89867 1.42871V7.29502M14.62 1.42871V7.29502M4.29108 10.2282H7.93658M15.2276 10.2282H11.5821M4.29108 13.748H7.93658M11.5821 13.748H15.2276M2.46834 4.36187H17.0503C17.3726 4.36187 17.6817 4.48548 17.9096 4.70551C18.1374 4.92554 18.2655 5.22396 18.2655 5.53513V17.2678C18.2655 17.5789 18.1374 17.8773 17.9096 18.0974C17.6817 18.3174 17.3726 18.441 17.0503 18.441H2.46834C2.14606 18.441 1.83697 18.3174 1.60909 18.0974C1.3812 17.8773 1.25317 17.5789 1.25317 17.2678V5.53513C1.25317 5.22396 1.3812 4.92554 1.60909 4.70551C1.83697 4.48548 2.14606 4.36187 2.46834 4.36187Z"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="1.70123"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="20" height="20" fill="none" />
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
