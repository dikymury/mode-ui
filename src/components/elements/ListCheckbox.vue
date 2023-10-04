<template>
  <div class="px-2 w-full">
    <div
      class="flex w-full justify-between items-center min-h-[30px] pb-[14px] border-b border-gray-8 max-md:flex-col max-md:items-start"
    >
      <check-box
        @change="onChangeAll"
        v-model="checkAll"
        :label="$t('el.list_checkbox.select_all')"
      ></check-box>
      <div class="text-xs font-light">
        {{ props.modelValue.length }} {{ $t("el.list_checkbox.selected") }}
      </div>
    </div>
    <div class="pt-[14px]">
      <check-box
        v-for="x in checkboxs"
        :key="x.value"
        :label="storeMain.currentLang == 'en' && props.i18n ? x.nameEn : x.name"
        v-model="x.checked"
        @change="onChangeCheck()"
      ></check-box>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/main";
import { onMounted, ref } from "vue";
const storeMain = useMainStore();
const props = defineProps({
  items: {
    type: Array,
    default: function () {
      return [];
    },
  },
  i18n: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Array,
    default: function () {
      return [];
    },
  },
});
const emit = defineEmits(["update:modelValue", "changed"]);
const checkAll = ref(false);
const checkboxs = ref([]);
const onChangeAll = () => {
  for (let i = 0; i < checkboxs.value.length; i++) {
    checkboxs.value[i].checked = checkAll.value;
  }
  result();
};
const onChangeCheck = () => {
  let isAllChecked = checkboxs.value.every((x) => x.checked == true);
  checkAll.value = isAllChecked;
  result();
};
const result = () => {
  let output = checkboxs.value.filter((x) => x.checked == true);
  emit("update:modelValue", output);
  emit("changed", output);
};
onMounted(async () => {
  props.items.map((x) => {
    checkboxs.value.push(x);
  });
  if (props.modelValue.length > 0) {
    props.modelValue.forEach((x) => {
      checkboxs.value = checkboxs.value.map((item) => {
        if (item.value == x.value) {
          item.checked = true;
        }
        return item;
      });
    });
    let isAllChecked = checkboxs.value.every((x) => x.checked == true);
    checkAll.value = isAllChecked;
  }
});
</script>
