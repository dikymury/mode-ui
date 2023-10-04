<template>
  <mode-ui v-model="val" label="Vite + Vue" />
</template>

<script setup>
import { ref } from 'vue'
import modeUi from './components/ModeUi.vue'

const val = ref(false)
</script>
