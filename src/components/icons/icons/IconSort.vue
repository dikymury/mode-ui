<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 14 15"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M5.24877 4.19999C5.39269 4.34392 5.57587 4.41142 5.75826 4.41142C5.94065 4.41142 6.12382 4.34392 6.26775 4.19999C6.54689 3.92085 6.54689 3.46015 6.26775 3.18101L4.19804 1.11131C3.9189 0.832169 3.4582 0.832169 3.17906 1.11131L1.10935 3.18101C0.830215 3.46015 0.830215 3.92085 1.10935 4.19999C1.38849 4.47913 1.84919 4.47913 2.12833 4.19999L3.68855 2.63977L5.24877 4.19999Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="0.2"
      />
      <path
        d="M2.96836 13.2113C2.96836 13.6059 3.29461 13.9322 3.68927 13.9322C4.08393 13.9322 4.41018 13.6059 4.41018 13.2113V1.62091C4.41018 1.22625 4.08393 0.9 3.68927 0.9C3.29461 0.9 2.96836 1.22625 2.96836 1.62091V13.2113ZM9.80285 13.7208C9.94677 13.8647 10.1299 13.9322 10.3123 13.9322C10.4947 13.9322 10.6779 13.8647 10.8218 13.7208L12.8915 11.6511C13.1707 11.3719 13.1707 10.9112 12.8915 10.6321C12.6124 10.3529 12.1517 10.3529 11.8726 10.6321L10.3123 12.1923L8.75212 10.6321C8.47298 10.3529 8.01228 10.3529 7.73314 10.6321C7.454 10.9112 7.454 11.3719 7.73314 11.6511L9.80285 13.7208Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="0.2"
      />
      <path
        d="M9.58945 13.2113C9.58945 13.6059 9.9157 13.9322 10.3104 13.9322C10.705 13.9322 11.0313 13.6059 11.0313 13.2113V1.62091C11.0313 1.22625 10.705 0.9 10.3104 0.9C9.9157 0.9 9.58945 1.22625 9.58945 1.62091V13.2113Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="0.2"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="15" height="15" fill="none" />
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
