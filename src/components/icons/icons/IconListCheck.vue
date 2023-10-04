<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 24 24"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M20.9527 10.6665H6.66602V11.9998H20.9527C21.1295 11.9998 21.2991 11.9296 21.4241 11.8046C21.5491 11.6796 21.6193 11.51 21.6193 11.3332C21.6193 11.1564 21.5491 10.9868 21.4241 10.8618C21.2991 10.7367 21.1295 10.6665 20.9527 10.6665Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="1.5"
      />
      <path
        d="M20.9527 16H6.66602V17.3333H20.9527C21.1295 17.3333 21.2991 17.2631 21.4241 17.1381C21.5491 17.013 21.6193 16.8435 21.6193 16.6667C21.6193 16.4899 21.5491 16.3203 21.4241 16.1953C21.2991 16.0702 21.1295 16 20.9527 16Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="1.5"
      />
      <path
        d="M10.3008 6.66683H20.9674C21.1443 6.66683 21.3138 6.59659 21.4389 6.47157C21.5639 6.34654 21.6341 6.17697 21.6341 6.00016C21.6341 5.82335 21.5639 5.65378 21.4389 5.52876C21.3138 5.40373 21.1443 5.3335 20.9674 5.3335H11.6341L10.3008 6.66683Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="1.5"
      />
      <path
        d="M11.6665 2.28014C11.5989 2.21181 11.5184 2.15756 11.4298 2.12054C11.3411 2.08352 11.2459 2.06445 11.1498 2.06445C11.0537 2.06445 10.9586 2.08352 10.8699 2.12054C10.7812 2.15756 10.7007 2.21181 10.6332 2.28014L5.25982 7.65347L3.00649 5.22681C2.87388 5.08447 2.69016 5.00065 2.49575 4.99377C2.30134 4.9869 2.11215 5.05753 1.96982 5.19014C1.82749 5.32275 1.74366 5.50647 1.73679 5.70088C1.72991 5.89529 1.80055 6.08447 1.93315 6.22681L5.22649 9.76014L11.6665 3.33347C11.7371 3.2651 11.7932 3.18325 11.8315 3.09278C11.8698 3.00231 11.8895 2.90506 11.8895 2.80681C11.8895 2.70856 11.8698 2.61131 11.8315 2.52083C11.7932 2.43036 11.7371 2.34851 11.6665 2.28014Z"
        :fill="gradient ? `url(#${idx})` : 'currentColor'"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="1.5"
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
