<script setup>
// one way data flow for edit props
import { computed } from "vue";

// 1.defineEmits
// defineEmits("closeModal");
defineEmits(['closeModal' , 'saveTodo'])

const props = defineProps({
  todo: {
    type: Object,
    default: { id: undefined, category: "", description: "" }, //add mode
  },
});

// cus props is read only
// computed cus have to follow changing
const previousTodo = computed(() => props.todo)
</script>

<template>
  <div class="flex flex-col p-2 gap-5">
    <!-- Add or Edit Heading -->
    <h1 class="font-semibold text-xl">
      {{ previousTodo.id === undefined ? 'Add Todo' : 'Edit Todo' }}
    </h1>
  </div>
  <div class="flex flex-col p-2">
    <div class="flex gap-3">
      <span>Category</span>
      <input type="radio" v-model="previousTodo.category" value="home" />
      <span>home</span>
      <input type="radio" v-model="previousTodo.category" value="work" />
      <span>work</span>
    </div>
    <div class="flex gap-3">
      <span>Description</span>
      <input v-model.trim="previousTodo.description" type="text"
        class="w-full p-0.5 border border-gray-300 rounded-lg outline-none" />
    </div>
  </div>
  <div class="flex gap-3 p-2">

    <button 
    @click="$emit('saveTodo',previousTodo)"
    class="bg-slate-100 border border-gray-300 rounded-md hover:opacity-80 px-2 py-0.5">
      Save
    </button>

    <button @click="$emit('closeModal', false)"
      class="bg-slate-100 border border-gray-300 rounded-md hover:opacity-80 px-2 py-0.5">
      Cancel
    </button>
  </div>
</template>

<style scoped></style>
