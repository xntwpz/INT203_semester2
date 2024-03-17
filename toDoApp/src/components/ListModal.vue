<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  // x: {
  //   type: Number,
  // },
});

console.log(props.items);
/*
const x10 = computed(() => props.x * 10); // change everytime
// const x10 = ref(props.x * 10) => change firstTime
*/
</script>

<template>
  <div>
    <div class="text-3xl font-semibold tracking-wide">
      <slot name="header"></slot>
    </div>

    <slot v-for="(item, index) in items" :key="index" :item="item"></slot>
  </div>
</template>

<style scoped>
</style>
