<script setup>
import BaseCard from './BaseCard.vue'
import ListModel from './ListModel.vue'

defineEmits(['editMode', 'deleteTodo'])
defineProps({
  todos: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <ListModel :items="todos">
      <template #header>TODO List</template>

      <template #default="slotProps">
        <BaseCard size="sm" variant="outlined">
          
          <template v-slot:title>
            <router-link :to="{ name: 'TodoDetail', params: { todoId: slotProps.item.id } }">
              {{ slotProps.item.id }}
            </router-link>
          </template>

          <template v-slot:subtitle>{{ slotProps.item.category }} </template>
          <template v-slot:content>{{ slotProps.item.description }}</template>
          <template v-slot:action>
            <!--edit-->
            <button @click="$emit('editMode', slotProps.item)" class="text-sm text-purple-600 hover:text-purple-400">
              Edit
            </button>

            <button @click="$emit('deleteTodo', slotProps.item.id)" class="text-sm text-red-600 hover:text-red-400">
              Delete
            </button>
          </template>
        </BaseCard>
      </template>
    </ListModel>


  </div>
</template>

<style scoped></style>
