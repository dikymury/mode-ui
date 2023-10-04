<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 16 15"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M0.5 1.5C0.5 1.10218 0.658035 0.720644 0.93934 0.43934C1.22064 0.158035 1.60218 0 2 0L4.5 0V4H0.5V1.5ZM0.5 5V13.5C0.5 13.8978 0.658035 14.2794 0.93934 14.5607C1.22064 14.842 1.60218 15 2 15H4.5V5H0.5ZM5.5 15H14C14.3978 15 14.7794 14.842 15.0607 14.5607C15.342 14.2794 15.5 13.8978 15.5 13.5V5H5.5V15ZM15.5 4V1.5C15.5 1.10218 15.342 0.720644 15.0607 0.43934C14.7794 0.158035 14.3978 0 14 0L5.5 0V4H15.5Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
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
