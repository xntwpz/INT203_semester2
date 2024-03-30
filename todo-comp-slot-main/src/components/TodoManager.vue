<script setup>
// Add, Edit, Delete, Read todo here
import AddEditTodo from './AddEditTodo.vue'
import TodoList from './TodoList.vue'
import { TodoManagement } from "../libs/TodoManagement"
// direct access file
// import todos from '../../data/todos.json'
import { getItems, getItemById, deleteItemById, addItem, editItem } from '../libs/fetchUtils'
import { onMounted, ref } from 'vue'
const showModal = ref(false)
const clearModal = (flagModal) => {
  showModal.value = flagModal
}
const editingTodo = ref({ id: undefined, category: '', description: '' })

const openModalToEdit = (todo) => {
  showModal.value = true
  editingTodo.value = todo
}
// create object for import class TodoManagement
const myTodos = ref(new TodoManagement()) // ref for can change called by myTodo.value

// GET getItems ; async function
onMounted(async () => {
  // async must await 
  const items = await getItems(import.meta.env.VITE_BASE_URL) // server
  // add items to myTodos
  myTodos.value.addTodos(items) // frontend
  //console.log(myTodos.value.getTodos());
})

//DELETE
const removeTodo = async (removeId) => {
  // backend
  const removeStatus = await deleteItemById(
    import.meta.env.VITE_BASE_URL, // endpoint = backend
    removeId)

  //frontend  
  if (removeStatus === 200) {
    myTodos.value.removeTodo(removeId)
  }
}

//UPDATE
const updateTodo = async (newTodo) => {
  // backend
  if (newTodo.id === undefined) {
    const addedItem = await addItem(import.meta.env.VITE_BASE_URL,
      // cus backend will gen id , then send just  data without id
      {
        category: newTodo.category,
        description: newTodo.description
      })
    console.log(addedItem);
    // frontend
    myTodos.value.addTodo(addedItem.id, addedItem.category, addedItem.description)
  }
  else {
    // backend put (replace with new)
    const editedItem = await editItem(import.meta.env.VITE_BASE_URL, newTodo.id, newTodo)
    // frontend
    myTodos.value.updateTodo(newTodo.id, newTodo.category, newTodo.description)
  }

  // finish operation then clear value to old data
  showModal.value = false; // close modal after click submit button
  editingTodo.value = { id: undefined, category: '', description: '' }; // clear value of input when click submit

}
</script>

<template>
  <div>
    <div class="flex justify-end">
      <button @click="openModalToEdit" class="px-2 py-0.5 text-green-600 rounded-lg hover:text-green-500">
        Add New Todo
      </button>
    </div>

    <TodoList :todos="myTodos.getTodos()" @editMode="openModalToEdit" @deleteTodo="removeTodo" />

    <Teleport to="#addEditModal">
      <div v-show="showModal" class="absolute left-0 right-0 top-1/3 m-auto 
        bg-slate-50 h-48 w-72 shadow-lg rounded-md">
        <AddEditTodo @closeModal="clearModal" @saveTodo="updateTodo" :todo="editingTodo" />
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>