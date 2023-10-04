<template>
  <div>
    <div
      ref="expandPHR"
      class="text-xs line-clamp-1 max-w-[100px]"
      @click="showing"
      name="target"
    >
      {{ props.data ? props.data : "-" }}
    </div>
    <teleport to="#app">
      <transition name="expand">
        <div
          v-on-click-outside="clickOutside"
          v-if="show"
          :style="objectStyle"
          class="bg-white overflow-hidden text-xs p-2 px-3 absolute z-[100] w-52 rounded-2xl shadow-3xl"
        >
          {{ props.data }}
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { vOnClickOutside } from "@vueuse/components";
const props = defineProps({
  data: {
    type: String,
    default: "",
  },
});
var objectStyle = reactive({});
const showing = (el) => {
  if (props.data) {
    let elem = el.currentTarget.getBoundingClientRect();
    let widthScreen = window.innerWidth;
    let right = widthScreen - elem.right;
    let totalSize = right + 208;
    if (totalSize > widthScreen) {
      right = widthScreen - 208 - 20;
    }
    objectStyle = {
      top: `${elem.top + elem.height + window.scrollY}px`,
      right: `${right}px`,
    };
    show.value = true;
  }
};
const show = ref(false);
const expandPHR = ref();
const clickOutside = [
  () => {
    show.value = false;
  },
  { ignore: [expandPHR] },
];
</script>
