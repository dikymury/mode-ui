<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 13 16"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M8.94478 1V2.84848C8.94478 3.58486 9.54174 4.18182 10.2781 4.18182H12M6.50061 13.0909V7.36364M4.05644 9.27273L5.53886 7.72887C6.06359 7.18241 6.93763 7.1824 7.46236 7.72887L8.94478 9.27273M2.33444 15H10.6667C11.403 15 12 14.403 12 13.6667V3.76377C12 3.41952 11.8669 3.0886 11.6284 2.84029L10.2549 1.40985C10.0035 1.14801 9.65615 1 9.29315 1H2.33345C1.59702 1 1.00005 1.59702 1.00012 2.33345L1.00111 13.6668C1.00117 14.4031 1.5981 15 2.33444 15Z"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="13" height="16" fill="none" />
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
