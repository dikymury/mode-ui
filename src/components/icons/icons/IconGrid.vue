<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 17 17"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M6.72179 2.27783H3.16623C2.67531 2.27783 2.27734 2.6758 2.27734 3.16672V6.72228C2.27734 7.2132 2.67531 7.61117 3.16623 7.61117H6.72179C7.21271 7.61117 7.61068 7.2132 7.61068 6.72228V3.16672C7.61068 2.6758 7.21271 2.27783 6.72179 2.27783Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
      <path
        d="M13.8331 2.27783H10.2776C9.78664 2.27783 9.38867 2.6758 9.38867 3.16672V6.72228C9.38867 7.2132 9.78664 7.61117 10.2776 7.61117H13.8331C14.324 7.61117 14.722 7.2132 14.722 6.72228V3.16672C14.722 2.6758 14.324 2.27783 13.8331 2.27783Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
      <path
        d="M6.72179 9.38867H3.16623C2.67531 9.38867 2.27734 9.78664 2.27734 10.2776V13.8331C2.27734 14.324 2.67531 14.722 3.16623 14.722H6.72179C7.21271 14.722 7.61068 14.324 7.61068 13.8331V10.2776C7.61068 9.78664 7.21271 9.38867 6.72179 9.38867Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
      <path
        d="M13.8331 9.38867H10.2776C9.78664 9.38867 9.38867 9.78664 9.38867 10.2776V13.8331C9.38867 14.324 9.78664 14.722 10.2776 14.722H13.8331C14.324 14.722 14.722 14.324 14.722 13.8331V10.2776C14.722 9.78664 14.324 9.38867 13.8331 9.38867Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="17" height="17" fill="none" />
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
