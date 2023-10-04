<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 18 15"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M15.6787 0H2.34538C1.42621 0 0.678711 0.7475 0.678711 1.66667V13.3333C0.678711 14.2525 1.42621 15 2.34538 15H15.6787C16.5979 15 17.3454 14.2525 17.3454 13.3333V1.66667C17.3454 0.7475 16.5979 0 15.6787 0ZM2.34538 13.3333V1.66667H15.6787L15.6804 13.3333H2.34538Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
      <path
        d="M4.01204 4.16667C4.01204 3.70643 4.38514 3.33333 4.84538 3.33333H13.1787C13.6389 3.33333 14.012 3.70643 14.012 4.16667C14.012 4.6269 13.6389 5 13.1787 5H4.84538C4.38514 5 4.01204 4.6269 4.01204 4.16667ZM4.01204 7.5C4.01204 7.03976 4.38514 6.66667 4.84538 6.66667H13.1787C13.6389 6.66667 14.012 7.03976 14.012 7.5C14.012 7.96024 13.6389 8.33333 13.1787 8.33333H4.84538C4.38514 8.33333 4.01204 7.96024 4.01204 7.5ZM4.01204 10.8333C4.01204 10.3731 4.38514 10 4.84538 10H8.17871C8.63895 10 9.01204 10.3731 9.01204 10.8333C9.01204 11.2936 8.63895 11.6667 8.17871 11.6667H4.84538C4.38514 11.6667 4.01204 11.2936 4.01204 10.8333Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="18" height="15" fill="none" />
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
