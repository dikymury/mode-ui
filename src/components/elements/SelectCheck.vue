<template>
  <div
    :class="{ grayscale: disabled }"
    class="relative"
    v-on-click-outside="clickOutside"
  >
    <div class="relative flex items-center gap-[5px]">
      <div v-if="icon" class="w-6 h-6 flex justify-center items-center">
        <icon-svg
          :icon="icon"
          :width="iconSize"
          :height="iconSize"
          color="primary"
        />
      </div>
      <div class="relative flex items-center gap-[5px] w-full">
        <div
          class="absolute left-0 rounded-full top-0 w-full bg-gray-4 h-full z-[5]"
        ></div>
        <label
          v-if="props.label"
          :for="props.label"
          class="whitespace-nowrap overflow-hidden absolute top-1/2 -translate-y-1/2 px-4 pr-6 z-[5] w-full text-ellipsis font-normal text-gray-900"
          :class="[
            { 'text-error': error.length },
            inputText.length ? 'text-[10px]' : 'text-sm',
            {
              '-mt-3 text-black-2 transition-all': inputText.length,
            },
          ]"
          >{{ props.label }}</label
        >
        <input
          type="text"
          v-model="inputText"
          @click="open"
          :disabled="disabled"
          :placeholder="props.placeholder"
          readonly
          :class="[
            props.disabled ? 'text-gray-6' : 'text-black',
            {
              'outline outline-1 outline-offset-0 outline-error': error.length,
            },
          ]"
          class="block w-full px-4 h-10 z-[5] outline-none bg-transparent rounded-full text-xs font-medium placeholder:text-gray"
        />
        <div
          :class="{ 'rotate-180': show }"
          class="absolute top-1/2 z-[5] transition-all -translate-y-1/2 right-4"
        >
          <icon-svg icon="IconArrowDown" width="8" height="6" />
        </div>
        <div
          v-if="clearable && props.modelValue.value"
          @click="clear"
          class="absolute cursor-pointer top-1/2 -translate-y-1/2 bg-primary w-4 h-4 flex justify-center items-center rounded-full right-7 z-[5]"
        >
          <base-icon-mdi size="16" color="white" :path="mdiClose" />
        </div>
        <div
          v-if="show"
          class="absolute top-[108%] z-20 rounded-2xl overflow-hidden overflow-y-auto scrollY max-h-64 w-full bg-white-1 shadow-3xl"
        >
          <div
            class="p-1 sticky top-0 left-0 w-full z-10 bg-white-1 border-b border-gray-4"
          >
            <field-text
              height="h-8"
              clearable
              placeholder="Cari"
              v-model="search"
            />
          </div>
          <ul class="mb-0" role="listbox" v-if="itemsList.length">
            <li
              class="text-sm bg-gray-4 py-2 px-4 cursor-pointer border-b border-gray-4 last:border-none flex items-center hover:bg-primary-light"
              role="option"
            >
              <check-box
                @click="clickSelectAll"
                v-model="selectAll"
              ></check-box>
              <span>{{ $t("el.select_check.select_all") }}</span>
            </li>
            <li
              class="text-sm py-2 px-4 border-b border-gray-4 last:border-none flex hover:bg-primary-light"
              v-for="x in itemsListShow"
              :class="{
                'font-semibold bg-primary-light':
                  x.value == props.modelValue.value,
              }"
              :key="x"
              role="option"
            >
              <check-box
                @click="setValue(x)"
                :name="nameCheckbox"
                v-model="x.check"
              ></check-box>
              <span class="pt-0.5">{{ props.i18n ? $t(x.name) : x.name }}</span>
            </li>
          </ul>
          <ul class="mb-0" v-else @click="show = false">
            <li
              class="text-sm py-2 px-4 flex items-center hover:bg-primary-light"
            >
              {{ $t("el.select_check.no_data") }}
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

<script setup>
import { computed, onMounted, ref, toRaw, watch } from "vue";
import { mdiClose } from "@mdi/js";
import { vOnClickOutside } from "@vueuse/components";
import { useI18n } from "vue-i18n";
// DIFINE PROPS
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default() {
      return [];
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  iconSize: {
    type: [String, Number],
    default: "20",
  },
  single: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Array,
    default: function () {
      return [];
    },
  },
  showError: {
    type: Boolean,
    default: true,
  },
  showValue: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Array,
    default: function () {
      return [];
    },
  },
  i18n: {
    type: Boolean,
    default: false,
  },
});
const nameCheckbox = ref(`check-${new Date().getTime()}`);
const search = ref("");
// CALL MULTI LANGUAGE
const { t } = useI18n();
// FOR TEXT DISPLAY IN INPUT
const inputText = ref("");
// FOR TOGGLE SHOWING
const show = ref(false);
// LIST OF ITEM
const itemsList = ref([]);
const selectAll = ref(false);
const emit = defineEmits(["update:modelValue"]);
function open() {
  show.value = true;
  search.value = "";
}
// ONCLICK OUTSIDE
const clickOutside = () => {
  show.value = false;
};
// PUT VALUE
function setValue(item) {
  itemsList.value.map((x) => {
    if (x.value == item.value) {
      x.check = !x.check;
    }
  });
  checkSelectAll();
  submitChange();
}
const itemsListShow = computed(() => {
  let list = [...itemsList.value];
  if (search.value) {
    list = list.filter((item) => {
      var truth = [];
      for (let i = 0; i < Object.keys(item).length; i++) {
        let key = Object.keys(item)[i];
        let dd = item[key];
        if (typeof dd == "string")
          truth.push(dd.toLowerCase().includes(search.value.toLowerCase()));
        if (typeof dd == "number")
          truth.push(String(dd).includes(search.value));
      }
      return truth.some((x) => x);
    });
  }
  return list;
});
function checkSelectAll() {
  let count = itemsList.value.filter((x) => x.check).length;
  selectAll.value = count == itemsList.value.length;
  inputText.value =
    count > 0
      ? `${count} ${t("el.select_check.selected")} ${
          props.showValue
            ? `(${itemsList.value
                .filter((j) => j.check)
                .map((x) => x.name)
                .join(",")})`
            : ""
        }`
      : ``;
}
function clickSelectAll() {
  setTimeout(() => {
    itemsList.value.map((x) => {
      x.check = selectAll.value;
    });
    submitChange();
    checkSelectAll();
  }, 200);
}
function submitChange() {
  let checked = [];
  itemsList.value.map((x) => {
    if (x.check) {
      checked.push(x.value);
    }
  });
  emit("update:modelValue", checked);
}
const parsingData = async () => {
  // PARSING DATA ITEMS TO LOCAL VARIABLE
  itemsList.value = [];
  let items = toRaw(props.items);
  let copyItems = [...items];
  let copyModel = [...props.modelValue];
  copyItems.forEach((x) => {
    itemsList.value.push({
      name: x.name,
      value: x.value,
      check: copyModel.includes(x.value),
    });
  });
  // CHECK SELECT ALL
  checkSelectAll();
};
const modelData = computed(() => {
  return props.modelValue;
});
watch(modelData, () => {
  parsingData();
});
onMounted(async () => {
  setTimeout(() => {
    parsingData();
  }, 100);
});
</script>
