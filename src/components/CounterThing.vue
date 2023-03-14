<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ counter.count }}</div>
  <button @click="counter.increment()">Poke</button>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()


</script>


