<template>
  <div class="w-full flex items-center" @click="onClick">
    <div
      class="bg-gradient-to-tr from-secondary to-primary rounded-full cursor-pointer flex justify-center items-center w-[25px] h-[25px] mr-2"
    >
      <icon-svg width="8" height="14" color="white" icon="IconFile" />
    </div>
    <div style="width: calc(100% - 33px)" class="file-input relative">
      <div
        class="w-full bg-gray-4 h-10 cursor-pointer rounded-full px-4 flex items-center text-xs text-gray"
      >
        <span class="font-normal" v-if="props.modelValue.length">
          {{ inputNames }}
        </span>
        <span class="font-light" v-else>{{ props.placeholder }}</span>
      </div>
      <input
        type="file"
        :id="`input-${idInput}`"
        @change="onChange"
        :multiple="props.multiple"
        :accept="validTypes.map((x) => `.${x}`).join(',')"
        class="w-full bg-gray-4 h-10 rounded-full px-4"
      />
      <div
        v-if="clearable && props.modelValue.length"
        @click.stop="clearInput"
        class="cursor-pointer absolute top-1/2 -translate-y-1/2 right-4 flex items-center"
      >
        <icon-svg width="20" height="20" icon="IconClose" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useComponentStore } from "@/stores/component";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useToast } from "vue-toastification";
const { t } = useI18n();
const toast = useToast();
const props = defineProps({
  modelValue: {
    type: Array,
    default: function () {
      return [];
    },
  },
  placeholder: {
    type: String,
    default: "Masukkan File",
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  validTypes: {
    type: Array,
    default: function () {
      return ["pdf", "doc", "docx", "png", "jpg", "jpeg"];
    },
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  maxSize: {
    type: Number,
    default: 5, // by Mb
  },
  maxFiles: {
    type: Number,
    default: 10,
  },
});
const componentStore = useComponentStore();
componentStore.setUid();
const inputNames = computed(() => {
  if (props.modelValue.length == 1)
    return props.modelValue.map((x) => x.name).join(" ,");
  if (props.modelValue.length > 1) return `${props.modelValue.length} File`;
  return "-";
});
const idInput = ref(componentStore.uid);
const emit = defineEmits(["update:modelValue", "change"]);
const onClick = () => {
  document.getElementById(`input-${idInput.value}`).click();
};
const clearInput = () => {
  emit("update:modelValue", []);
  document.getElementById(`input-${idInput.value}`).value = "";
  emit("change", []);
};
const onChange = () => {
  let value = document.getElementById(`input-${idInput.value}`).files;
  let result = [];
  Object.keys(value).forEach((x) => {
    result.push(value[x]);
  });
  let validFormat = result.every((x) => {
    let formatFile = x.name
      .substring(x.name.lastIndexOf(".") + 1)
      .toLowerCase();
    return props.validTypes.includes(formatFile.toLowerCase());
  });
  let validSize = result.every((x) => {
    let maximaze = props.maxSize * 1000000;
    let maxiFile = x.size;
    return maxiFile < maximaze;
  });
  if (validFormat && validSize && result.length <= props.maxFiles) {
    emit("update:modelValue", result);
    emit("change", result);
  } else {
    emit("update:modelValue", []);
    emit("change", []);
    if (!validFormat) {
      toast.warning(
        t("el.file_input.warning_type", {
          msg: props.validTypes.join(", "),
        })
      );
    } else if (!validSize) {
      toast.warning(t("el.file_input.warning_size", { msg: props.maxSize }));
    } else if (result.length > props.maxFiles) {
      toast.warning(t("el.file_input.warning_amount", { msg: props.maxFiles }));
    }
  }
};
</script>
<style lang="scss" scoped>
.file-input {
  input {
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    max-width: 0;
    width: 0;
  }
}
</style>
