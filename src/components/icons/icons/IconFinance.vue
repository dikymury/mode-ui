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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 18C1.45 18 0.979001 17.804 0.587001 17.412C0.195001 17.02 -0.000665176 16.5493 1.69885e-06 16V2C1.69885e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H8C8.55 1.69779e-06 9.021 0.196002 9.413 0.588002C9.805 0.980002 10.0007 1.45067 10 2V3C10 3.55229 10.4477 4 11 4H18C18.55 4 19.021 4.196 19.413 4.588C19.805 4.98 20.0007 5.45067 20 6V16C20 16.55 19.804 17.021 19.412 17.413C19.02 17.805 18.5493 18.0007 18 18H2ZM1.5 12.75C1.5 13.1642 1.83579 13.5 2.25 13.5H7.75C8.16422 13.5 8.5 13.1642 8.5 12.75C8.5 12.3358 8.16422 12 7.75 12L2.25 12C1.83579 12 1.5 12.3358 1.5 12.75ZM1.5 8.75C1.5 9.16421 1.83579 9.5 2.25 9.5H7.75C8.16422 9.5 8.5 9.16421 8.5 8.75C8.5 8.33579 8.16422 8 7.75 8H2.25C1.83579 8 1.5 8.33579 1.5 8.75ZM1.5 4.75C1.5 5.16421 1.83579 5.5 2.25 5.5H7.75C8.16422 5.5 8.5 5.16421 8.5 4.75C8.5 4.33579 8.16422 4 7.75 4H2.25C1.83579 4 1.5 4.33579 1.5 4.75ZM13 14C12.4477 14 12 13.5523 12 13C12 12.4477 12.4477 12 13 12L16 12C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H15.502L13 14ZM15.5 8H16C16.5523 8 17 8.44771 17 9C17 9.55228 16.5523 10 16 10H15.5H13C12.4477 10 12 9.55228 12 9C12 8.44771 12.4477 8 13 8H15.5Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="20" height="18" fill="none" />
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
