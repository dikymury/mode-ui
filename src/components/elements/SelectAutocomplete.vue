<template>
  <div
    :class="{ grayscale: disabled }"
    class="relative w-full whitespace-normal"
  >
    <label
      v-if="props.label && !props.solo"
      for="price"
      :class="{ 'text-error': error.length }"
      class="block mb-1 ml-4 text-ellipsis overflow-hidden text-sm font-medium leading-6 text-gray-900"
      >{{ props.label }}</label
    >
    <div class="relative w-full flex items-center gap-[5px]">
      <div v-if="icon" class="w-6 h-6 flex justify-center items-center">
        <icon-svg
          :icon="icon"
          :width="iconSize"
          :height="iconSize"
          color="primary"
        />
      </div>
      <div class="relative w-full flex items-center gap-[5px]">
        <div
          class="absolute left-0 rounded-full top-0 w-full bg-gray-4 h-full z-[5]"
        ></div>
        <label
          v-if="props.label && props.solo"
          :for="props.label"
          class="whitespace-nowrap overflow-hidden absolute top-1/2 -translate-y-1/2 px-4 pr-6 z-[5] w-full text-ellipsis font-normal text-gray-900"
          :class="[
            { 'text-error': error.length },
            inputText ? 'text-[10px]' : 'text-sm',
            {
              '-mt-3 text-black-2 transition-all': inputText,
            },
          ]"
          >{{ props.label }}</label
        >
        <input
          v-if="props.type == 'input'"
          type="text"
          v-model="inputText"
          @blur="blurInput"
          @keydown="onChange"
          @input="emit('onPressKey', $event.target.value)"
          :disabled="props.disabled"
          :placeholder="props.placeholder"
          @keyup="onChange"
          @focus="focusInput"
          :class="[
            clearable ? 'pr-12' : 'pr-7',
            props.classes,
            height,
            {
              'outline outline-1 outline-offset-0 outline-error': error.length,
            },
            props.disabled ? 'text-gray-6' : 'text-black',
          ]"
          class="block w-full px-4 z-[5] outline-none bg-transparent rounded-full text-xs placeholder:text-gray placeholder:text-xs placeholder:font-light"
        />
        <textarea
          v-else
          v-model="inputText"
          @blur="blurInput()"
          @keydown="onChange"
          @input="emit('onPressKey', $event.target.value)"
          :disabled="props.disabled"
          :placeholder="props.placeholder"
          @keyup="onChange"
          ref="refArea"
          @focus="focusInput"
          :class="[
            clearable ? 'pr-12' : 'pr-7',
            props.classes,
            props.height,
            {
              'outline outline-1 outline-offset-0 outline-error': error.length,
            },
            props.disabled ? 'text-gray-6' : 'text-black',
            props.height == 'h-10' ? 'py-3' : 'py-2',
          ]"
          class="block w-full px-4 resize-ta z-[5] resize-none outline-none bg-transparent rounded-full text-xs placeholder:text-gray placeholder:text-xs placeholder:font-light"
        >
        </textarea>
        <div
          :class="props.loadingIcon ? 'right-2' : 'right-4'"
          class="absolute top-1/2 z-[5] transition-all -translate-y-1/2"
        >
          <icon-svg
            v-if="!props.loadingIcon"
            icon="IconArrowDown"
            width="8"
            color="black"
            :class="{ 'rotate-180': show }"
            height="6"
          />
          <base-icon-mdi
            v-else
            size="12"
            class="animate-spin"
            :path="mdiLoading"
          />
        </div>
        <div
          v-if="clearable && props.modelValue.value"
          @click="clear"
          class="absolute cursor-pointer top-1/2 -translate-y-1/2 bg-primary w-4 h-4 flex justify-center items-center rounded-full right-7 z-[5]"
        >
          <base-icon-mdi size="16" color="white" :path="mdiClose" />
        </div>
        <div
          v-show="show"
          :class="[
            align == 'middle' ? 'top-1/2 -translate-y-1/2' : 'top-[108%]',
            props.maxListHeight,
          ]"
          class="absolute z-10 rounded-2xl overflow-hidden overflow-y-auto scrollY w-full bg-white-1 shadow-3xl"
        >
          <ul class="mb-0" role="listbox" v-if="itemsList.length">
            <li
              class="text-sm py-2 px-4 cursor-pointer border-b border-gray-4 last:border-none flex items-center hover:bg-primary-light"
              v-for="x in itemsList"
              :class="{
                'font-semibold bg-primary-light':
                  x.value == props.modelValue.value,
              }"
              :key="x"
              @click="setValue(x)"
              role="option"
            >
              <slot name="customItem" :item="x">
                <span>{{ x.name }}</span>
              </slot>
            </li>
            <slot name="last" :input="inputText"> </slot>
          </ul>
          <ul class="mb-0" v-else @click="show = false">
            <slot name="empty" :input="inputText">
              <li
                class="text-sm py-2 px-4 cursor-pointer flex items-center hover:bg-primary-light"
              >
                Tidak Ada Data
              </li>
            </slot>
            <slot name="last" :input="inputText"> </slot>
          </ul>
        </div>
      </div>
    </div>
    <div
      v-if="error.length && props.showError"
      class="px-4 whitespace-normal text-[10px] leading-[11px] pt-1 text-error"
    >
      {{ error[0].$message }}
    </div>
  </div>
</template>

<script setup>
import { mdiLoading } from "@mdi/js";
import { computed, onMounted, ref, watch } from "vue";
import { mdiClose } from "@mdi/js";
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  align: {
    type: String,
    default: "bottom",
  },
  icon: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "h-10",
  },
  minHeight: {
    type: String,
    default: "min-h-[40px]",
  },
  maxListHeight: {
    type: String,
    default: "max-h-64",
  },
  type: {
    type: String,
    default: "input",
  },
  items: {
    type: Array,
    default() {
      return [];
    },
    // default [{
    //   name: "1",
    //   value: "Satu"
    // }]
  },
  classes: {
    type: String,
    default: "",
  },
  solo: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  iconSize: {
    type: [String, Number],
    default: "20",
  },
  modelValue: {
    type: Object,
    default: function () {
      return {
        name: "",
        value: "",
      };
    },
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  showError: {
    type: Boolean,
    default: true,
  },
  loadingIcon: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Array,
    default: function () {
      return [];
    },
  },
});
const isChange = ref(false);
const inputText = ref("");
const show = ref(false);
const refArea = ref(null);
const itemsList = computed(() => {
  if (inputText.value && !!isChange.value) {
    return props.items.filter((x) =>
      x.name.toLowerCase().includes(inputText.value.toLowerCase())
    );
  } else {
    return props.items;
  }
});
const emit = defineEmits([
  "update:modelValue",
  "onPressKey",
  "onSelected",
  "onClear",
]);
function focusInput() {
  isChange.value = false;
  inputText.value = props.modelValue.name;
  show.value = true;
}
function onChange(e) {
  isChange.value = true;
  if (props.modelValue.name && !!e.target.value) {
    let find = props.items.findIndex((x) => x.value == props.modelValue.value);
    var obj = {};
    if (find < itemsList.value.length - 1) {
      obj = {
        name: itemsList.value[find + 1].name,
        value: itemsList.value[find + 1].value,
      };
    } else {
      obj = {
        name: props.modelValue.name,
        value: props.modelValue.value,
      };
    }
    emit("update:modelValue", obj);
  } else if (props.modelValue.name && !e.target.value) {
    clear();
  }
}
const onChangeTextArea = () => {
  if (props.type == "textarea") {
    setTimeout(() => {
      refArea.value.style.height = "";
      refArea.value.style.cssText =
        "height: " + refArea.value.scrollHeight + "px !important";
    }, 500);
  }
};
function blurInput() {
  setTimeout(() => {
    if (inputText.value) {
      inputText.value = props.modelValue.name;
    } else {
      clear();
    }
    show.value = false;
  }, 500);
}
function clear() {
  if (!props.disabled) {
    let obj = {
      name: "",
      value: "",
    };
    emit("update:modelValue", obj);
    inputText.value = "";
    emit("onSelected", obj);
    emit("onClear", obj);
    onChangeTextArea();
  }
}
const setValue = (item) => {
  inputText.value = item.name;
  show.value = false;
  if (!props.disabled) {
    let obj = {
      name: item.name,
      value: item.value,
    };
    emit("update:modelValue", obj);
    emit("onSelected", obj);
    onChangeTextArea();
  }
};
const modelName = computed(() => {
  return props.modelValue.name;
});
watch(modelName, (val) => {
  if (!val) {
    inputText.value = "";
  } else {
    inputText.value = val;
    onChangeTextArea();
  }
});
onMounted(() => {
  setTimeout(() => {
    inputText.value = props.modelValue.name;
  }, 100);
});
</script>
