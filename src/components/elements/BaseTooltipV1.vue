<template>
  <div class="relative base-tooltip">
    <div class="relative">
      <slot name="target" />
    </div>
    <div
      class="tooltip-content absolute bg-primary/90 text-xs/[18px] mt-2 w-full z-50 rounded-2xl text-white p-[10px]"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss">
.base-tooltip {
  & .tooltip-content {
    transform: translate3d(0, -10px, 0);
    transition: all 0.15s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
  &:hover {
    & .tooltip-content {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }
  }
}
</style>
