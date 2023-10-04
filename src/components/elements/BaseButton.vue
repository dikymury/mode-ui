<script setup>
import { onMounted, ref, watch } from 'vue'
import { mdiLoading } from '@mdi/js'
const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  colorIcon: {
    type: String,
    default: 'black'
  },
  height: {
    type: String,
    default: 'h-[33px]'
  },
  width: {
    type: String,
    default: ''
  },
  outlined: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: String,
    default: 'rounded-full'
  },
  shadow: {
    type: Boolean,
    default: true
  },
  link: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  to: {
    type: [String, Object],
    default: '/'
  },
  fontSize: {
    type: String,
    default: 'text-[11px]'
  },
  type: {
    type: String,
    default: 'Button'
  },
  iconLeft: {
    type: String,
    default: ''
  },
  iconRight: {
    type: String,
    default: ''
  },
  iconButton: {
    type: String,
    default: ''
  },
  iconLeftImage: {
    type: String,
    default: ''
  },
  iconRightImage: {
    type: String,
    default: ''
  },
  iconSize: {
    type: [String, Number],
    default: '13'
  },
  icon: {
    type: Boolean,
    default: false
  },
  classes: {
    type: String,
    default: ''
  }
})
const styles = ref('')
const setStyles = () => {
  if (props.icon) {
    styles.value = '!pl-0 !pr-0'
  } else {
    if (props.disabled) {
      if (props.outlined) {
        styles.value =
          ' bg-white px-[14px] py-1.5 border-2 text-gray hover:text-gray border-gray hover:border-gray'
      } else {
        styles.value = `bg-gray hover:bg-gray py-2 text-white`
      }
    } else {
      if (props.outlined) {
        styles.value = `bg-white px-[14px] py-1.5 border-2`
        switch (props.color) {
          case 'primary':
            styles.value +=
              ' relative text-primary-dark z-[1] !border-none before:bg-gradient-to-tr before:from-secondary before:to-primary outlined-border'
            break
          case 'primary-light':
            styles.value +=
              ' text-primary-light hover:text-primary-light border-primary-light hover:border-primary'
            break
          case 'blue-gray':
            styles.value +=
              ' text-blue-gray hover:text-blue-gray border-blue-gray hover:border-blue-gray'
            break
          case 'gray':
            styles.value += ' text-gray hover:text-gray border-gray hover:border-gray'
            break
          case 'gray-4':
            styles.value += ' text-gray-4 hover:text-gray-4 border-gray-4 hover:border-gray-4'
            break
          case 'error':
            styles.value += ' text-error hover:text-error border-error hover:border-error'
            break
          case 'error-dark':
            styles.value +=
              ' text-error-dark hover:text-error-dark border-error-dark hover:border-error-dark'
            break

          default:
            break
        }
      } else {
        switch (props.color) {
          case 'primary':
            styles.value = `bg-gradient-to-tr from-secondary to-primary hover:bg-gradient-to-r py-2 text-white`
            break

          case 'primary-light':
            styles.value = `bg-primary-light hover:bg-primary-light py-2 text-white`
            break

          case 'blue-gray':
            styles.value = `bg-blue-gray hover:bg-blue-gray py-2 text-black`
            break
          case 'gray':
            styles.value = `bg-gray hover:bg-gray py-2 text-white`
            break
          case 'gray-4':
            styles.value = `bg-gray-4 hover:bg-gray-4 py-2 text-black`
            break
          case 'error':
            styles.value = `bg-error hover:bg-error py-2 text-white`
            break
          case 'error-dark':
            styles.value = `bg-error-dark hover:bg-error-dark py-2 text-white`
            break

          default:
            break
        }
      }
    }
  }
  styles.value += ` ${props.rounded} ${props.height} ${props.width} ${props.fontSize}`
  styles.value += ` ${props.classes}`
  // SHOW SHADOW IF SHADOW TRUE AND FALSE FOR ICON
  if (props.shadow && !props.icon) {
    styles.value += ` shadow-md hover:shadow-lg`
  }
}
// set style on mounted
onMounted(() => {
  setStyles()
})
// Monitor change props
watch(props, () => {
  setStyles()
})
</script>

<template>
  <router-link
    v-if="link"
    :class="[styles, { grayscale: loading }]"
    :disabled="disabled || props.loading"
    :to="to"
    class="px-4 font-semibold flex items-center leading-[0px] justify-center outline-none transition-all"
  >
    <base-icon-mdi
      v-if="props.iconLeft"
      :path="props.iconLeft"
      :class="{ grayscale: props.disabled }"
      class="-ml-2"
    />
    <icon-svg
      v-if="props.iconLeftImage"
      :icon="props.iconLeftImage"
      :width="iconSize"
      :height="iconSize"
      :class="{ grayscale: props.disabled }"
      :color="props.colorIcon"
      class="mr-2"
    />
    <span class="whitespace-nowrap">
      <slot />
    </span>
    <icon-svg
      v-if="props.iconButton"
      :icon="props.iconButton"
      :width="iconSize"
      :class="{ grayscale: props.disabled }"
      :height="iconSize"
    />
    <base-icon-mdi
      v-if="props.iconRight"
      :path="props.iconRight"
      :class="{ grayscale: props.disabled }"
      class="-mr-2"
    />
    <icon-svg
      v-else-if="props.iconRightImage"
      :icon="props.iconRightImage"
      :width="iconSize"
      :height="iconSize"
      :class="{ grayscale: props.disabled }"
      class="ml-2"
    />
  </router-link>
  <button
    v-else
    :class="[styles, { grayscale: loading }]"
    :type="props.button"
    :disabled="disabled || props.loading"
    class="px-4 font-semibold overflow-hidden flex items-center leading-[0px] justify-center outline-none transition-all"
  >
    <base-icon-mdi
      v-if="props.iconLeft"
      :class="{ grayscale: props.disabled }"
      :path="props.iconLeft"
      class="-ml-2"
    />
    <icon-svg
      v-else-if="props.iconLeftImage"
      :icon="props.iconLeftImage"
      :width="iconSize"
      :height="iconSize"
      class="mr-2"
      :color="props.colorIcon"
      :class="{ grayscale: props.disabled }"
    />
    <div class="whitespace-nowrap">
      <slot />
    </div>
    <icon-svg
      v-if="props.iconButton"
      :icon="props.iconButton"
      :width="iconSize"
      :height="iconSize"
      :color="props.colorIcon"
      :class="{ grayscale: props.disabled }"
    />
    <base-icon-mdi
      v-if="props.iconRight"
      :path="props.iconRight"
      class="-mr-2"
      :class="{ grayscale: props.disabled }"
    />
    <icon-svg
      v-else-if="props.iconRightImage"
      :icon="props.iconRightImage"
      :width="iconSize"
      :height="iconSize"
      class="ml-2"
      :class="{ grayscale: props.disabled }"
      :color="props.colorIcon"
    />
    <div
      v-if="props.loading"
      class="absolute left-0 top-0 w-full h-full flex justify-center items-center rounded-full"
    >
      <div
        class="w-6 relative h-6 after:rounded-full after:absolute after:top-[1px] after:left-[1px] after:w-[22px] after:h-[22px] after:border-4 after:border-gray-6"
      >
        <div class="absolute left-0 top-0 w-full h-full animate-spin z-[1]">
          <base-icon-mdi :path="mdiLoading" color="white" size="24"></base-icon-mdi>
        </div>
      </div>
    </div>
  </button>
</template>

<style>
.outlined-border::before {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: -2;
  height: 100%;
  border-radius: 50px;
}
.outlined-border::after {
  content: '';
  position: absolute;
  background: white;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  z-index: -1;
  border-radius: 50px;
}
</style>
