<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 24 18"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M8.16602 3.8335H18.9993M8.16602 9.25016H18.9993M8.16602 14.6668H18.9993"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="2.22656"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.83333 4.66667C5.29357 4.66667 5.66667 4.29357 5.66667 3.83333C5.66667 3.3731 5.29357 3 4.83333 3C4.3731 3 4 3.3731 4 3.83333C4 4.29357 4.3731 4.66667 4.83333 4.66667Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="1.48437"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.83333 10.5002C5.29357 10.5002 5.66667 10.1271 5.66667 9.66683C5.66667 9.20659 5.29357 8.8335 4.83333 8.8335C4.3731 8.8335 4 9.20659 4 9.66683C4 10.1271 4.3731 10.5002 4.83333 10.5002Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="1.48437"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.83333 15.5002C5.29357 15.5002 5.66667 15.1271 5.66667 14.6668C5.66667 14.2066 5.29357 13.8335 4.83333 13.8335C4.3731 13.8335 4 14.2066 4 14.6668C4 15.1271 4.3731 15.5002 4.83333 15.5002Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="1.48437"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="24" height="24" fill="none" />
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
