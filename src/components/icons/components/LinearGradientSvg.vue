<template>
  <linearGradient :id="ids">
    <stop class="svg-start" offset="6%" />
    <stop class="svg-stop" offset="93%" />
  </linearGradient>
</template>
<script setup>
defineProps({
  ids: {
    type: [String, Number],
    default: "1",
  },
});
</script>
