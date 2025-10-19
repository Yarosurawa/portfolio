<script setup lang="ts">
    import { ref } from "vue";
    import NavBar from "./components/NavBar.vue"

    const navBarOpen = ref<boolean>(false);

</script>

<template>
    <NavBar />
    <main class="page-container flex" v-bind:class="{'shrink' : navBarOpen}">
        <button id="nav-btn" v-on:click="navBarOpen = !navBarOpen"><</button>
        <RouterView/>
    </main>
</template>

<style scoped>
    #nav-btn {
        position: absolute;
        left: 0;
    }

    .shrink {
        width: 80vw;
    }
</style>
