<template>
  <div class="relative base-timeline">
    <slot />
  </div>
</template>

<style lang="scss">
.base-timeline {
  .base-timeline-item {
    // z-index: 0;
    &::after {
      content: "";
      position: absolute;
      left: 7px;
      top: 2px;
      width: 1px;
      height: 100%;
      border-left: 1px dashed #afafaf;
      z-index: 2;
    }
    &:last-child::after {
      display: none;
    }
  }
}
</style>
