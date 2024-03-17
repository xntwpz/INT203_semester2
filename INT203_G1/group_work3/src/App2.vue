<script setup>
import {
  ref,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
} from "vue";

import pageHeader from "./components/Header.vue";

onBeforeMount(() => {
  //count.value = 1
  console.log("01 : at app.vue onBeforeMount....");
}); //หลังsetup

onMounted(() => {
  //count.value = 10
  console.log("02 : at app.vue on Mount....");
}); //user เห็นผลของการrenderแล้ว แต่ยังไม่เสร็จ

onBeforeUpdate(() => {
  count.value = count.value * 10;
  console.log("03 : at app.vue on before update....");
});

onUpdated(() => {
  console.log("04 : at app.vue on update....");
});

// after hook = setup script
console.log("05 : At App.vue (script setup)");
const count = ref(0);
console.log("06 : count.value = " + count.value);

const fullname = ref("Nattawan");
const hasHeader = ref(true);
</script>

<template>
  <Header2>
    <template #logo> </template>
    <template #header>

    </template>
  </Header2>

  <div class="w-full">
    <div>
      <div v-if="hasHeader">
        <pageHeader />
      </div>

      {{ hasHeader }}
      <p>
        <input
          type="checkbox"
          v-model="hasHeader"
          @click="hasHeader = !hasHeader"
        />
      </p>
      Enable Header
    </div>
    <div class="full-name">
      {{ fullname }}
      <button
        @click="fullname = fullname.toUpperCase()"
        class="px-3 py-2 bg-purple-400"
      >
        ToUpperCase
      </button>
    </div>

    <div class="w-1/2 p-10">
      <div class="flex gap-2 text-xl">
        <button
          @click="--count < 0 ? (count = 0) : count"
          class="px-2 py-1 bg-red-500 text-white"
        >
          -
        </button>
        <h1>Counter: {{ count }}</h1>
        <button @click="count++" class="px-2 py-1 bg-green-500 text-white">
          +
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
