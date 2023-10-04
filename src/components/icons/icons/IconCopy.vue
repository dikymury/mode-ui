<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 15 18"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M5.5 13.9998C5.04167 13.9998 4.64944 13.8368 4.32333 13.5107C3.99667 13.184 3.83333 12.7915 3.83333 12.3332V2.33317C3.83333 1.87484 3.99667 1.48234 4.32333 1.15567C4.64944 0.829559 5.04167 0.666504 5.5 0.666504H13C13.4583 0.666504 13.8508 0.829559 14.1775 1.15567C14.5036 1.48234 14.6667 1.87484 14.6667 2.33317V12.3332C14.6667 12.7915 14.5036 13.184 14.1775 13.5107C13.8508 13.8368 13.4583 13.9998 13 13.9998H5.5ZM5.5 12.3332H13V2.33317H5.5V12.3332ZM2.16667 17.3332C1.70833 17.3332 1.31583 17.1701 0.989167 16.844C0.663055 16.5173 0.5 16.1248 0.5 15.6665V4.83317C0.5 4.59706 0.58 4.399 0.74 4.239C0.899445 4.07956 1.09722 3.99984 1.33333 3.99984C1.56944 3.99984 1.7675 4.07956 1.9275 4.239C2.08694 4.399 2.16667 4.59706 2.16667 4.83317V15.6665H10.5C10.7361 15.6665 10.9342 15.7465 11.0942 15.9065C11.2536 16.0659 11.3333 16.2637 11.3333 16.4998C11.3333 16.7359 11.2536 16.9337 11.0942 17.0932C10.9342 17.2532 10.7361 17.3332 10.5 17.3332H2.16667Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="15" height="18" fill="none" />
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
