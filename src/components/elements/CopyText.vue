<template>
  <button @click="clickCopy()" class="m-0 p-0 bg-none leading-none">
    <icon-svg
      :color="props.color"
      icon="IconCopy"
      width="12"
      height="14"
    ></icon-svg>
  </button>
</template>

<script setup>
import { useToast } from "vue-toastification";

const props = defineProps({
  value: {
    type: [String, Number],
    default: "",
  },
  color: {
    type: [String, Number],
    default: "black",
  },
});
const toast = useToast();
const clickCopy = () => {
  navigator.clipboard.writeText(props.value);
  if (props.value) {
    toast.success("" + props.value + " berhasil disalin");
  } else {
    toast.warning("Gagal salin teks");
  }
};
</script>
