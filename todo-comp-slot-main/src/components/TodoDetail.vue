<script setup>
// useRoute use with parameters , useRouter  use with path
import { useRoute, useRouter } from 'vue-router'
const { params } = useRoute()
console.log(params.todoId);
const router = useRouter()
const goBack = () => {
    router.go(-1)
}

</script>

<template>
    <div>
        {{ $route.params.todoId }}
        <img :src="`../../images/${$route.params.todoId}.jpg`" class="h-52 w-72" />
        <button @click="goBack">&lt;&lt; BACK</button>
    </div>
</template>

<style scoped></style>