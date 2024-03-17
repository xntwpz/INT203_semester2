<script setup>
import { ref, computed, watch, watchEffect , onBeforeMount , onMounted } from "vue";
console.log("At App.vue (script setup)");
const count = ref(0);
console.log(count.value);

const multiple10 = computed(() => {
  console.log('computer for counter*10 working')
  return count.value * 10;
});
const multiple100 = computed(() => {
  console.log('computer for counter x 100 working')
  return count.value * 100;
});

// watch do before computed and lazy
watch(count,(newCount,OldCount) => {
  console.log('watch working')
  console.log(`new count : ${newCount} , old count : ${OldCount}`)
})

// watchEffect do since mounted
watchEffect(()=>{
  console.log('watchEffect working')
  console.log('watchEffect : '+count.value)
})


onBeforeMount(()=>{
  console.log('at app.vue onBeforeMount....')
})

</script>

<template>
  <div class="w-full">
    <div class="1/2 p-5 flex flex-col">
      <p >count * 10 = {{ multiple10 }}</p>
      <p>count * 100 = {{ multiple100 }}</p>
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
