<template>
  <div class="h-full w-full grid content-between">
    <div
      class="overflow-hidden whitespace-nowrap -mx-0.5 px-0.5 relative h-full w-full"
    >
      <TransitionGroup
        :name="transitionName"
        tag="div"
        :class="props.height"
        class="flex relative"
      >
        <div
          v-if="show"
          :key="currentStep"
          class="w-full absolute left-0 top-0 h-full"
        >
          <slot :name="`step-${currentStep}`"> </slot>
        </div>
      </TransitionGroup>
    </div>
    <div>
      <ul class="mb-2 flex list-none border-b-0 pl-0">
        <li
          v-for="x in props.totalStep"
          :key="x"
          @click="setCurrentStep(x)"
          class="w-full mx-2"
        >
          <a
            href="#tabs-home"
            :class="x == currentStep ? 'bg-gray' : 'bg-gray-4'"
            class="block rounded-full h-[8px] w-full"
          ></a>
        </li>
      </ul>
      <div
        class="text-[13px] leading-5 text-black font-normal w-full text-center"
      >
        {{ currentStep }}/{{ props.totalStep }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  // total of step
  totalStep: {
    type: Number,
    default: 1,
  },
  // current step
  modelValue: {
    type: Number,
    default: 1,
  },
  // action step next on indicator
  actionNav: {
    type: Boolean,
    default: false,
  },
  height: {
    type: String,
    default: "h-[400px]",
  },
});
// current step on stepper
const currentStep = ref(1);
// transition
const transitionName = ref("fade");
let show = ref(false);
// watching current step fot animation slide
watch(
  () => props.modelValue,
  (first) => {
    if (first) {
      transitionName.value =
        props.modelValue < currentStep.value ? "slide-prev" : "slide-next";
      setTimeout(() => {
        currentStep.value = first;
      }, 100);
    }
  }
);

const emit = defineEmits(["update:modelValue"]);
// set step onclick step indicator
const setCurrentStep = (id) => {
  if (props.actionNav) {
    transitionName.value =
      props.modelValue < currentStep.value ? "slide-prev" : "slide-next";
    emit("update:modelValue", id);
    setTimeout(() => {
      currentStep.value = id;
    }, 100);
  }
};
onMounted(() => {
  show.value = true;
});
</script>
