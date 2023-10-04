<template>
  <tri-state-checkbox v-model="val" label="Vite + Vue" />
</template>

<script setup>
import { ref } from 'vue'
import TriStateCheckbox from './components/TriStateCheckbox.vue'

const val = ref(false)
</script>
