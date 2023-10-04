<script setup>
import { computed, ref, getCurrentInstance } from "vue";
import { mdiEyeOutline, mdiEyeOffOutline } from "@mdi/js";
import { vOnClickOutside } from "@vueuse/components";
import { onKeyStroke } from "@vueuse/core";
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  appendIconOuterLeft: {
    type: String,
    default: "",
  },
  appendIconLeft: {
    type: String,
    default: "",
  },
  appendIconRight: {
    type: String,
    default: "",
  },
  appendTextLeft: {
    type: String,
    default: "",
  },
  appendTextRight: {
    type: String,
    default: "",
  },
  colorIcon: {
    type: String,
    default: "primary",
  },
  sizeIcon: {
    type: [String, Number],
    default: "18",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  navNumber: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  autocomplete: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: [String, Number],
  },
  type: {
    type: String,
    default: "text",
  },
  typeNumberRound: {
    type: Boolean,
    default: false,
  },
  showError: {
    type: Boolean,
    default: true,
  },
  error: {
    type: Array,
    default: function () {
      return [];
    },
  },
  height: {
    type: String,
    default: "h-10",
  },
  width: {
    type: String,
    default: "w-full",
  },
  min: {
    type: String,
    default: "",
  },
  max: {
    type: String,
    default: "",
  },
  rounded: {
    type: String,
    default: "rounded-full",
  },
});
const { proxy } = getCurrentInstance();
const emit = defineEmits(["update:modelValue", "input", "clearValue"]);
const focus = ref(false);
// for show text of password
var showPassword = ref(true);
// for toggle showing or hidden passowrd
const togglePassword = () => {
  let value = props.modelValue;
  showPassword.value = !showPassword.value;
  emit("update:modelValue", value);
};
// email recommendation property
const showEmail = ref(false);
const clickOutside = () => {
  showEmail.value = false;
};
onKeyStroke("Escape", () => {
  if (showEmail.value) {
    showEmail.value = false;
  }
});
const recommendEmail = computed(() => {
  if (!!props.modelValue && props.type == "email") {
    let append = props.modelValue.includes("@")
      ? props.modelValue.substring(0, props.modelValue.indexOf("@"))
      : props.modelValue;
    let emails = [
      "mologiz.com",
      "modena.com",
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "google.com",
      "hotmail.com",
      "me.com",
      "aol.com",
      "mac.com",
      "live.com",
      "comcast.com",
      "googlemail.com",
      "msn.com",
      "hotmail.co.uk",
      "yahoo.co.uk",
      "verizon.net",
      "att.net",
      "mail.com",
    ];
    return emails.map((x) => {
      return append + "@" + x;
    });
  } else {
    return [];
  }
});
const matchEmail = computed(() => {
  return recommendEmail.value.filter((x) => x.includes(props.modelValue));
});
const showRecommendMail = computed(() => {
  if (matchEmail.value.length == 1) {
    return (
      props.type == "email" &&
      showEmail.value &&
      matchEmail.value.length > 0 &&
      matchEmail.value[0] !== props.modelValue
    );
  } else {
    return (
      props.type == "email" && showEmail.value && matchEmail.value.length > 0
    );
  }
});
const selectEmail = (val) => {
  emit("update:modelValue", val);
  emit("input", val);
};

const updateValue = (event) => {
  if (!props.disabled) {
    let value = event.target.value;
    if (props.type == "number") {
      value = parseFloat(value) ? parseFloat(value) : 0;
      if (props.typeNumberRound) value = parseInt(value);
    }
    if (props.type == "email" && !!value) showEmail.value = true;
    emit("update:modelValue", value);
    emit("input", value);
  }
};
const clearInput = () => {
  if (!props.disabled) {
    emit("update:modelValue", null);
    emit("input", "");
    showEmail.value = false;
    emit("clearValue", "");
  }
};
const onFocus = () => {
  focus.value = true;
  showEmail.value = true;
};
const onBlur = () => {
  focus.value = false;
  showEmail.value = false;
};
const modelValue = computed(() => {
  if (props.type == "number" && !focus.value)
    return proxy.$filters.formatNumber(props.modelValue, false);
  return props.modelValue;
});
const typeInput = computed(() => {
  if (props.type == "password") {
    return showPassword.value ? "password" : "text";
  } else if (!focus.value && props.type == "number") {
    return "text";
  } else {
    return props.type;
  }
});
</script>

<template>
  <div class="w-full" v-on-click-outside="clickOutside">
    <label
      v-if="props.label"
      for="price"
      :class="{ 'text-error': error.length }"
      class="block mb-1 ml-4 text-ellipsis overflow-hidden text-sm font-medium leading-6 text-gray-900"
      v-html="props.label"
    ></label>
    <div class="flex items-center">
      <div v-if="appendIconOuterLeft" class="pr-2 flex items-center">
        <icon-svg
          :color="colorIcon"
          :width="sizeIcon"
          :height="sizeIcon"
          :icon="appendIconOuterLeft"
        />
      </div>
      <div
        :class="[height, width, { 'number-notnav': !navNumber }, rounded]"
        class="relative shadow-sm"
      >
        <div
          v-if="appendIconLeft"
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <icon-svg
            :color="colorIcon"
            :width="sizeIcon"
            :height="sizeIcon"
            :icon="appendIconLeft"
          />
        </div>
        <div
          v-else-if="appendTextLeft"
          class="pointer-events-none absolute text-xs inset-y-0 left-0 flex items-center pl-3"
        >
          {{ appendTextLeft }}
        </div>
        <input
          :type="typeInput"
          :value="modelValue"
          @input="updateValue"
          :class="[
            rounded,
            appendIconLeft ? 'pl-8' : appendTextLeft ? 'pl-9' : 'pl-4',
            appendIconRight
              ? 'pr-8'
              : appendTextRight
              ? 'pr-9'
              : clearable && modelValue
              ? 'pr-6'
              : 'pr-4',
            {
              'outline outline-1 outline-offset-0 outline-error': error.length,
            },
            props.disabled ? 'text-gray-6' : 'text-black',
          ]"
          @focus="onFocus"
          @blur="onBlur"
          :name="props.name"
          :min="min"
          :max="max"
          :disabled="props.disabled"
          class="block outline-none bg-gray-4 w-full h-full text-xs leading-[18px] font-normal placeholder:text-gray"
          :placeholder="placeholder"
        />
        <div
          v-if="clearable && modelValue"
          @click.stop="clearInput"
          :class="[appendIconRight || appendTextRight ? 'pr-10' : 'pr-2']"
          class="cursor-pointer absolute inset-y-0 right-0 flex items-center"
        >
          <icon-svg
            color="primary"
            :width="sizeIcon"
            :height="sizeIcon"
            icon="IconClose"
          />
        </div>
        <div
          v-if="appendIconRight"
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <icon-svg
            :color="colorIcon"
            :width="sizeIcon"
            :height="sizeIcon"
            :icon="appendIconRight"
          />
        </div>
        <div
          v-else-if="appendTextRight"
          class="pointer-events-none absolute text-xs inset-y-0 right-0 flex items-center pr-3"
          v-html="appendTextRight"
        ></div>
        <div
          v-if="props.type == 'password'"
          @click="togglePassword"
          class="cursor-pointer absolute sm:text-sm top-1/2 -translate-y-1/2 right-3 flex items-center"
        >
          <base-icon-mdi
            size="18"
            :path="showPassword ? mdiEyeOffOutline : mdiEyeOutline"
          />
        </div>
        <!-- option for email -->
        <div
          v-if="showRecommendMail"
          class="absolute bg-white border border-gray-4 overflow-hidden shadow-sm mt-1 rounded-2xl z-10 left-0 w-full"
        >
          <ul class="m-0 scrollX overflow-auto max-h-[200px] top-full">
            <li
              v-for="(mail, i) in matchEmail"
              @click="selectEmail(mail)"
              :key="i"
              class="px-4 py-1 border-b cursor-pointer hover:bg-gray-4 border-gray-4"
            >
              {{ mail }}
            </li>
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

<style lang="scss" scoped>
// for hidden button arrow in the format number
/* Chrome, Safari, Edge, Opera */
.number-notnav {
  & input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  & input[type="number"] {
    -moz-appearance: textfield;
  }
}
</style>
