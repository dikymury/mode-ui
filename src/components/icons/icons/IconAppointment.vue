<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 20 21"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 3.66667H16V1H14.6667V3.66667H5.33333V1H4V3.66667H2C1.46957 3.66667 0.960859 3.87738 0.585786 4.25245C0.210714 4.62753 0 5.13623 0 5.66667V19C0 19.5304 0.210714 20.0391 0.585786 20.4142C0.960859 20.7893 1.46957 21 2 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V5.66667C20 5.13623 19.7893 4.62753 19.4142 4.25245C19.0391 3.87738 18.5304 3.66667 18 3.66667ZM4 10C3.44772 10 3 10.4477 3 11C3 11.5523 3.44772 12 4 12H8.28571C8.838 12 9.28571 11.5523 9.28571 11C9.28571 10.4477 8.838 10 8.28571 10H4ZM12.5714 10C12.0191 10 11.5714 10.4477 11.5714 11C11.5714 11.5523 12.0191 12 12.5714 12H16.8571C17.4094 12 17.8571 11.5523 17.8571 11C17.8571 10.4477 17.4094 10 16.8571 10H12.5714ZM4 14.1379C3.44772 14.1379 3 14.5856 3 15.1379C3 15.6902 3.44772 16.1379 4 16.1379H8.28571C8.838 16.1379 9.28571 15.6902 9.28571 15.1379C9.28571 14.5856 8.838 14.1379 8.28571 14.1379H4ZM12.5714 14.1379C12.0191 14.1379 11.5714 14.5856 11.5714 15.1379C11.5714 15.6902 12.0191 16.1379 12.5714 16.1379H16.8571C17.4094 16.1379 17.8571 15.6902 17.8571 15.1379C17.8571 14.5856 17.4094 14.1379 16.8571 14.1379H12.5714Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
      <path
        d="M4.28577 1V7.89655M15.7143 1V7.89655"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="20" height="21" fill="none" />
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
