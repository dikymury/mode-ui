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
        d="M8.50003 4.95824L11.3334 7.79157M8.50003 4.95824L5.66669 7.90986M8.50003 4.95824V11.3332M8.19969 1.00857C8.27938 0.928981 8.3874 0.884277 8.50003 0.884277C8.61265 0.884277 8.72067 0.928981 8.80036 1.00857L15.9914 8.19957C16.0709 8.27926 16.1157 8.38728 16.1157 8.4999C16.1157 8.61253 16.0709 8.72055 15.9914 8.80024L8.80036 15.9912C8.72067 16.0708 8.61265 16.1155 8.50003 16.1155C8.3874 16.1155 8.27938 16.0708 8.19969 15.9912L1.00869 8.80024C0.929103 8.72055 0.884399 8.61253 0.884399 8.4999C0.884399 8.38728 0.929103 8.27926 1.00869 8.19957L8.19969 1.00857Z"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
