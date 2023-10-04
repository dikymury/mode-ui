<template>
  <mode-ui v-model="val" label="Vite + Vue" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ModeUi from './components/ModeUi.vue'

const val = ref(false)
</script>
