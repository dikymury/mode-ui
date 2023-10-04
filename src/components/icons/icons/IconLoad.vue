<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 21 18"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M11.8132 13.1329L12.55 12.9319V12.1681V1.55C12.55 1.5215 12.5715 1.5 12.6 1.5L20 1.5V13.625C20 15.1038 18.8038 16.3 17.325 16.3C15.8888 16.3 14.7199 15.1609 14.6623 13.726L14.612 12.4707L13.4 12.8013L1.19423 16.131L1.16844 16.0363L11.8132 13.1329ZM14.75 13.625C14.75 15.0468 15.9032 16.2 17.325 16.2C18.7468 16.2 19.9 15.0468 19.9 13.625C19.9 12.2032 18.7468 11.05 17.325 11.05C15.9032 11.05 14.75 12.2032 14.75 13.625Z"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="2"
      />
      <path
        d="M1.10865 6.93711L2.21974 6.63958L2.64583 8.23227C2.85985 9.03226 3.68169 9.50746 4.4818 9.29384L5.54346 9.01039C6.34413 8.79662 6.81974 7.97406 6.60556 7.17349L6.17908 5.57935L7.2886 5.28041L8.67332 10.4487L2.49069 12.1058L1.10865 6.93711Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="2"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="21" height="18" fill="none" />
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
