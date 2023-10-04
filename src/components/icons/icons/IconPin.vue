<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 15 19"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M7.83301 9.5C7.16997 9.5 6.53408 9.23661 6.06524 8.76777C5.5964 8.29893 5.33301 7.66304 5.33301 7C5.33301 6.33696 5.5964 5.70107 6.06524 5.23223C6.53408 4.76339 7.16997 4.5 7.83301 4.5C8.49605 4.5 9.13193 4.76339 9.60077 5.23223C10.0696 5.70107 10.333 6.33696 10.333 7C10.333 7.3283 10.2683 7.65339 10.1427 7.95671C10.0171 8.26002 9.83292 8.53562 9.60077 8.76777C9.36863 8.99991 9.09303 9.18406 8.78972 9.3097C8.4864 9.43534 8.16131 9.5 7.83301 9.5ZM7.83301 0C5.97649 0 4.19601 0.737498 2.88326 2.05025C1.57051 3.36301 0.833008 5.14348 0.833008 7C0.833008 10.7317 4.3697 15.7265 6.41529 18.3034C7.15193 19.2314 8.51408 19.2314 9.25072 18.3034C11.2963 15.7265 14.833 10.7317 14.833 7C14.833 5.14348 14.0955 3.36301 12.7828 2.05025C11.47 0.737498 9.68952 0 7.83301 0Z"
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
