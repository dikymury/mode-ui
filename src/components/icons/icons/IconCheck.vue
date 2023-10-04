<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 12 10"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M4.00078 7.0998L9.90078 1.1998C10.0841 1.01647 10.3174 0.924805 10.6008 0.924805C10.8841 0.924805 11.1174 1.01647 11.3008 1.1998C11.4841 1.38314 11.5758 1.61647 11.5758 1.8998C11.5758 2.18314 11.4841 2.41647 11.3008 2.5998L4.70078 9.1998C4.50078 9.3998 4.26745 9.4998 4.00078 9.4998C3.73411 9.4998 3.50078 9.3998 3.30078 9.1998L0.700781 6.5998C0.517448 6.41647 0.425781 6.18314 0.425781 5.8998C0.425781 5.61647 0.517448 5.38314 0.700781 5.1998C0.884114 5.01647 1.11745 4.9248 1.40078 4.9248C1.68411 4.9248 1.91745 5.01647 2.10078 5.1998L4.00078 7.0998Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="12" height="10" fill="none" />
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
