<script setup>
import { useComponentStore } from "@/stores/component";
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  gradient: {
    type: Boolean,
    default: false,
  },
  name: {
    type: [Number, String],
    default: "",
  },
});
const emit = defineEmits(["update:modelValue", "change"]);
const onChange = (event) => {
  emit("update:modelValue", event.target.checked);
  emit("change", event.target.checked);
};
// watch(
//   () => props.modelValue,
//   (first, second) => {
//     console.log(
//       "Watch props.selected function called with args:",
//       first,
//       second
//     );
//   }
// );
const useComponent = useComponentStore();
useComponent.setUid();
const idComp = ref(useComponent.uid);
</script>

<template>
  <div
    class="mb-[0.125rem] relative flex items-center min-h-[1.5rem] pl-[1.5rem]"
  >
    <div
      v-if="props.gradient"
      class="absolute top-1 left-0 bg-gradient-to-tr from-secondary to-primary h-[18px] w-[18px] rounded-[3px] after:absolute after:w-[14px] after:h-[14px] after:top-[2px] after:left-[2px] after:bg-white after:rounded-[2px]"
    ></div>
    <input
      :class="
        disabled
          ? 'border-gray'
          : gradient
          ? 'border-transparent'
          : 'border-black'
      "
      class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-gradient-to-tr checked:from-secondary checked:border-0 checked:p-0.5 checked:to-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
      type="checkbox"
      :checked="props.modelValue"
      @change="onChange"
      :disabled="disabled"
      :name="props.name"
      :id="`checkboxDefault-${idComp}`"
    />
    <label
      v-if="props.label"
      style="width: calc(100% - 18px)"
      class="inline-block whitespace-nowrap text-xs select-none pl-[0.15rem] mb-0 hover:cursor-pointer"
      :for="`checkboxDefault-${idComp}`"
    >
      {{ props.label }}
    </label>
  </div>
</template>
