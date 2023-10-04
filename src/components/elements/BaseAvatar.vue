<template>
  <div
    class="base-avatar h-[34px] w-[34px] flex items-center justify-center text-xs overflow-hidden text-white rounded-full bg-black"
  >
    <slot />
  </div>
</template>

<style>
.base-avatar img {
  object-fit: cover;
  object-position: center;
}
</style>
