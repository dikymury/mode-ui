<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 20 13"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.980073 0H18.6214C19.1626 0 19.6015 0.453817 19.6015 1.01341V11.1475C19.6015 11.7071 19.1626 12.1609 18.6214 12.1609H0.980073C0.438889 12.1609 0 11.7071 0 11.1475V1.01341C0 0.453817 0.438889 0 0.980073 0ZM1.47011 8.61397V10.6408H3.43026C3.43026 9.52129 2.55278 8.61397 1.47011 8.61397ZM1.47011 1.52011V3.54693C2.55278 3.54693 3.43026 2.63961 3.43026 1.52011H1.47011ZM16.1712 10.6408H18.1313V8.61397C17.0487 8.61397 16.1712 9.52129 16.1712 10.6408ZM16.1712 1.52011C16.1712 2.63961 17.0487 3.54693 18.1313 3.54693V1.52011H16.1712ZM9.89999 2.78264C9.26705 2.78264 8.64831 2.97033 8.12204 3.32197C7.59576 3.67362 7.18558 4.17343 6.94336 4.7582C6.70114 5.34296 6.63776 5.98642 6.76125 6.60721C6.88473 7.22799 7.18952 7.79822 7.63708 8.24578C8.08464 8.69335 8.65487 8.99814 9.27566 9.12162C9.89644 9.2451 10.5399 9.18173 11.1247 8.93951C11.7094 8.69729 12.2092 8.28711 12.5609 7.76083C12.9125 7.23455 13.1002 6.61582 13.1002 5.98287C13.1002 5.13412 12.7631 4.32012 12.1629 3.71996C11.5627 3.1198 10.7488 2.78264 9.89999 2.78264Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="20" height="20" fill="none" />
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
