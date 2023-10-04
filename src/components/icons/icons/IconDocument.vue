<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 20 23"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M1.66211 2.5C1.66211 2.23478 1.76747 1.98043 1.955 1.79289C2.14254 1.60536 2.39689 1.5 2.66211 1.5H12.6621L17.6621 6.5V20.5C17.6621 20.7652 17.5568 21.0196 17.3692 21.2071C17.1817 21.3946 16.9273 21.5 16.6621 21.5H2.66211C2.39689 21.5 2.14254 21.3946 1.955 21.2071C1.76747 21.0196 1.66211 20.7652 1.66211 20.5V2.5Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="20" height="23" fill="none" />
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
