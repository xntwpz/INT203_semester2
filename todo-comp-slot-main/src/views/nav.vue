<script setup>

</script>

<template>
    <div class="flex justify-end gap-2 p-2">
        <!--refer to router-->
        <router-link to="/home">Home</router-link>
        <router-link to="/login"> Login </router-link>
        <!-- refer to router name-->
        <router-link :to="{ name: 'Aboutus' }">Aboutus</router-link>
    </div>

    
</template>

<style scoped></style>