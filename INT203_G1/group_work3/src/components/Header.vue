<script setup>
import { onBeforeUnmount, onUnmounted } from "vue";

onBeforeUnmount(() => {
  console.log("07 : At Header.vue, on before unmount");
});
onUnmounted(() => {
  console.log("08 : At Header.vue, on unmounted");
});
</script>

<template>
  <div>This is a header components</div>
</template>

<style scoped></style>
