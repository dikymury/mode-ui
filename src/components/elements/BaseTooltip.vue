<template>
  <div class="relative">
    <div class="relative">
      <slot
        name="target"
        :on="{ mouseover: showing, mouseleave: hidden }"
        :attrs="{
          'aria-haspopup': 'true',
          'aria-expanded': show,
        }"
      />
    </div>
    <teleport to="#app">
      <div
        v-if="show"
        :style="objectStyle"
        class="tooltip-content absolute bg-primary-dark/95 text-xs/[18px] mt-2 z-50 rounded-2xl text-white p-[10px]"
        :class="props.classes"
      >
        <slot name="content" />
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const props = defineProps({
  width: {
    type: [String, Number],
    default: 200,
  },
  classes: {
    type: String,
    default: "",
  },
});
const show = ref(false);
var objectStyle = reactive({});
const showing = (el) => {
  let elem = el.currentTarget.getBoundingClientRect();
  let totalSize = elem.left + parseInt(props.width);
  let widthScreen = window.innerWidth;
  let left = elem.left;
  if (totalSize > widthScreen) {
    left = widthScreen - parseInt(props.width) - 20;
  } else if (parseInt(props.width) > elem.width) {
    left = left - (parseInt(props.width) - elem.width) / 2;
  } else {
    left = left + (elem.width - parseInt(props.width)) / 2;
  }
  objectStyle = {
    top: `${elem.top + elem.height + window.scrollY}px`,
    left: `${left}px`,
    width: `${props.width}px`,
  };
  show.value = true;
};
const hidden = () => {
  show.value = false;
};
</script>
