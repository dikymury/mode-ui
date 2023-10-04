<template>
  <div class="relative base-option">
    <div class="relative">
      <slot
        name="target"
        :on="{ click: showing }"
        :attrs="{
          'aria-haspopup': 'true',
          'aria-expanded': show,
        }"
      />
    </div>
    <teleport to="#app">
      <div
        v-on-click-outside="clickOutside"
        :style="objectStyle"
        v-show="show"
        :class="[props.zIndex]"
        class="absolute mt-1 p-[7px] py-[1px] shadow-3xl rounded-[14px] bg-white"
      >
        <ul class="mb-0">
          <li
            v-for="(option, i) in props.options"
            :key="i"
            @click.prevent="
              option.action(props.item);
              show = false;
              currently = i;
            "
            :class="{
              'after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:z-10 after:w-full after:rounded-full after:transition-all after:h-8 after:bg-primary':
                currently == i && props.isCurrently,
            }"
            class="flex last:border-none relative cursor-pointer border-b border-gray-1 after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:z-10 after:w-full after:rounded-full after:transition-all after:h-8 hover:after:bg-primary-thin items-center min-w-[136px] gap-3 text-sm px-2 py-3"
          >
            <icon-svg
              v-if="option.icon"
              class="z-20"
              :width="16"
              :height="16"
              :icon="option.icon"
            />
            <span class="z-20">{{
              props.i18n ? $t(option.title) : option.title
            }}</span>
          </li>
        </ul>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { vOnClickOutside } from "@vueuse/components";
const props = defineProps({
  options: {
    type: Array,
    default: function () {
      return [];
    },
  },
  item: {
    type: Object,
    default: function () {
      return {};
    },
  },
  zIndex: {
    type: String,
    default: "z-10",
  },
  i18n: {
    type: Boolean,
    default: false,
  },
  isCurrently: {
    type: Boolean,
    default: true,
  },
  defaultIndex: {
    type: String,
    default: null,
  },
});
var objectStyle = reactive({});
const showing = (el) => {
  let elem = el.currentTarget.getBoundingClientRect();
  objectStyle = {
    top: `${elem.top + elem.height + window.scrollY}px`,
    right: `${window.innerWidth - elem.right}px`,
  };
  show.value = true;
};
const currently = ref(null);
const show = ref(false);
const clickOutside = () => {
  show.value = false;
};
onMounted(() => {
  currently.value = props.defaultIndex;
});
</script>
