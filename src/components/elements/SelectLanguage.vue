<script setup>
import { useMainStore } from "@/stores/main";
import { getCurrentInstance, ref } from "vue";
import { vOnClickOutside } from "@vueuse/components";
import { useUserStore } from "@/stores/user";
const lang = useMainStore();
const show = ref(false);
defineProps({
  mini: {
    type: Boolean,
    default: false,
  },
});
const { proxy } = getCurrentInstance();
const storeUser = useUserStore();
const toggle = () => {
  show.value = !show.value;
};
const clickOutside = () => {
  show.value = false;
};
const setLang = async (id) => {
  show.value = false;
  if (storeUser.user) {
    proxy.$component.setLoading(true);
    let newLang = `ID-${id.toUpperCase()}`;
    let formData = new FormData();
    formData.append("language", newLang);
    try {
      await storeUser.updateProfile(formData);
      proxy.$component.setLoading(false);
    } catch (error) {
      proxy.$component.setLoading(false);
      console.log(error);
    }
  } else {
    lang.setLang(id);
  }
};
</script>

<template>
  <div
    v-on-click-outside="clickOutside"
    :class="{ 'min-w-[52px]': mini }"
    class="relative min-w-[150px] max-sm:min-w-[40px] inline-flex z-10"
  >
    <div
      @click.stop="toggle"
      :class="{ 'bg-gradient-to-tr from-secondary to-primary p-0.5': !mini }"
      class="relative rounded-full max-sm:rounded-lg select-none shadow-sm w-full cursor-pointer hover:shadow-md transition-shadow"
    >
      <div
        :class="show && !mini ? '' : 'bg-gray-4'"
        class="rounded-full max-sm:rounded-[6px]"
      >
        <div
          :class="[
            show
              ? 'text-white'
              : 'text-transparent bg-clip-text bg-gray-4 bg-gradient-to-tr from-secondary to-primary',
          ]"
          class="h-full w-full items-center inline-flex px-3 py-[6px] gap-[7px]"
        >
          <BaseIconImage
            :icon="lang.getCurrentLang.icon"
            :width="23.55"
            :height="17.66"
            class="mr-4 max-sm:mr-0"
          />
          <div
            :class="{ hidden: mini }"
            class="font-semibold text-xs max-sm:hidden capitalize"
          >
            {{ lang.getCurrentLang.name }}
          </div>
        </div>
      </div>
      <icon-svg
        icon="IconArrowDown"
        :class="{ 'rotate-180': show }"
        :color="show && !mini ? 'white' : mini ? 'black' : 'primary'"
        width="8"
        height="6"
        class="absolute max-sm:hidden transition-all -translate-y-1/2 top-1/2 right-3.5"
      />
    </div>
    <div
      v-show="show"
      class="absolute drop-shadow-md top-11 left-0 p-0.5 rounded-[14px] bg-gradient-to-tr from-secondary to-primary w-full min-w-[150px]"
    >
      <div class="w-full h-fit bg-gray-4 py-[6px] rounded-[12px]">
        <ul class="mb-0">
          <li
            v-for="(x, i) in lang.listLang"
            :key="i"
            @click.stop="setLang(x.id)"
            class="select-none cursor-pointer border-b mx-[6px] hover:font-semibold last:border-none border-transparent bg-clip-border bg-gradient-to-tr from-secondary to-primary"
          >
            <div
              class="p-[7px] py-[11px] flex align-center gap-[7px] bg-gray-4"
            >
              <BaseIconImage :icon="x.icon" :width="23.55" :height="17.66" />
              <div class="text-xs capitalize">{{ x.name }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
