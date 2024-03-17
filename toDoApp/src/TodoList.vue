<script setup>
import BaseCard from './components/baseCard.vue'
import ListModal from './components/ListModal.vue'
import todos from '../data/todos.json'



</script>

<template>
  <div>
    
    <ListModal :items="todos">
      <template #header> TODO List </template>
      <!-- <template #default="slotProps">
        <BaseCard size="sm" variant="flat">
          <template #title>{{ slotProps.item.id }}</template>
          <template #subtitle>{{ slotProps.item.category }}</template>
          <template #content>{{ slotProps.item.description }}</template>
        </BaseCard>
      </template> -->
      <template #default="{ item }">
        
          <BaseCard size="sm" variant="flat">
            <template #title>{{ item.id }}</template>
            <template #subtitle>{{ item.category }}</template>
            <template #content>{{ item.description }}</template>
          </BaseCard>
        
      </template>
    </ListModal>
    
    
  </div>
</template>

<style scoped></style>