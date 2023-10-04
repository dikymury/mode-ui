<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 10 10"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M9.14176 5.6903H5.6903V9.14176C5.6903 9.32484 5.61757 9.50042 5.48812 9.62987C5.35866 9.75933 5.18309 9.83205 5.00001 9.83205C4.81693 9.83205 4.64136 9.75933 4.5119 9.62987C4.38245 9.50042 4.30972 9.32484 4.30972 9.14176V5.6903H0.85826C0.675184 5.6903 0.499605 5.61757 0.370151 5.48812C0.240696 5.35867 0.167969 5.18309 0.167969 5.00001C0.167969 4.81693 0.240696 4.64136 0.370151 4.5119C0.499605 4.38245 0.675184 4.30972 0.85826 4.30972H4.30972V0.85826C4.30972 0.675184 4.38245 0.499605 4.5119 0.37015C4.64136 0.240696 4.81693 0.167969 5.00001 0.167969C5.18309 0.167969 5.35866 0.240696 5.48812 0.37015C5.61757 0.499605 5.6903 0.675184 5.6903 0.85826V4.30972H9.14176C9.32484 4.30972 9.50041 4.38245 9.62987 4.5119C9.75932 4.64136 9.83205 4.81693 9.83205 5.00001C9.83205 5.18309 9.75932 5.35867 9.62987 5.48812C9.50041 5.61757 9.32484 5.6903 9.14176 5.6903Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="10" height="10" fill="none" />
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
