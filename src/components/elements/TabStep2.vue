<template>
  <div class="h-full w-full grid content-between">
    <div
      class="bg-white-1 relative overflow-hidden min-h-[100px] flex rounded-full items-center justify-center max-md:rounded-2xl"
    >
      <ul class="flex list-none border-b-0 pl-0 mb-0 max-md:gap-x-1 gap-x-3">
        <li
          v-for="(x, i) in props.totalStep"
          :key="x"
          @click="setCurrentStep(x)"
          class="flex items-center gap-x-3 max-md:gap-x-1 pb-[30px]"
        >
          <div
            v-if="x !== 1"
            :class="
              x <= currentStep
                ? 'bg-gradient-to-tr from-secondary to-primary'
                : 'bg-disabled'
            "
            class="block rounded-full h-[8px] w-[290px] max-xl:w-[150px] max-md:w-[100px] max-sm:w-[50px]"
          ></div>
          <div class="relative">
            <div
              :class="
                x <= currentStep
                  ? 'bg-gradient-to-tr from-secondary to-primary'
                  : 'bg-disabled'
              "
              class="text-xl font-bold h-9 w-9 rounded-full flex items-center justify-center text-white"
            >
              {{ x }}
            </div>
            <div
              :class="x == currentStep ? 'font-semibold' : 'font-normal'"
              class="absolute text-[13px] leading-5 top-full left-1/2 -translate-x-1/2 w-max mt-[10px] max-xl:hidden"
            >
              {{
                labelSteps[i]
                  ? props.i18n
                    ? $t(labelSteps[i])
                    : labelSteps[i]
                  : "No Label"
              }}
            </div>
          </div>
        </li>
      </ul>
      <div
        class="absolute text-[13px] font-semibold leading-5 top-[66px] left-1/2 -translate-x-1/2 w-max hidden max-xl:block"
      >
        {{
          labelSteps[currentStep - 1]
            ? props.i18n
              ? $t(labelSteps[currentStep - 1])
              : labelSteps[currentStep - 1]
            : "No Label"
        }}
      </div>
    </div>
    <div
      class="overflow-hidden whitespace-nowrap -mx-0.5 px-0.5 relative h-full w-full"
    >
      <!-- :class="props.height" -->
      <TransitionGroup
        :name="transitionName"
        tag="div"
        :class="beforeTransition ? 'h-[5000px]' : 'h-auto'"
        class="flex relative"
      >
        <div
          v-if="show"
          :key="currentStep"
          :class="beforeTransition ? 'absolute' : 'relative'"
          class="w-full absolute left-0 top-0 h-full"
        >
          <slot :name="`step-${currentStep}`"> </slot>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  totalStep: {
    type: Number,
    default: 1,
  },
  labelSteps: {
    type: Array,
    default: function () {
      return [];
    },
  },
  modelValue: {
    type: Number,
    default: 1,
  },
  // action step next on indicator
  actionNav: {
    type: Boolean,
    default: false,
  },
  i18n: {
    type: Boolean,
    default: false,
  },
  // height: {
  //   type: String,
  //   default: "h-[400px]",
  // },
});
const currentStep = ref(1);
const beforeTransition = ref(false);
const transitionName = ref("fade");
let show = ref(false);
watch(
  () => props.modelValue,
  (first) => {
    if (first) {
      beforeTransition.value = true;
      transitionName.value =
        props.modelValue < currentStep.value ? "slide-prev" : "slide-next";
      setTimeout(() => {
        currentStep.value = first;
      }, 100);
      setTimeout(() => {
        beforeTransition.value = false;
      }, 500);
    }
  }
);

const emit = defineEmits(["update:modelValue"]);
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
