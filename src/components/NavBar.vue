<script setup lang="ts">
    
</script>

<template>
    <div class="container flex">
        <nav class="nav flex-h">
            <div class="top">Cutesy navigation</div>
            <div class="main-links flex-h">
                <router-link class="link" to="/">Home</router-link>
                <router-link class="link" to="/contact">Contact</router-link>
            </div>
        </nav>
    </div>
</template>

<style scoped>
    .container {
        position: absolute;
        left: 0;
        min-width:20vw;
        height: 100vh;
        z-index: 1;
        background: var(--background-clr-secondary)
    }

    .nav {
        width: 60%;
    }

    .main-links {
        gap: 8px;
        width: 100%;
    }

    .link {
        font-size: 1.4rem;
        width: 100%;
        border-radius: 0.8rem;
        padding: 0.8rem 1.4rem; 
        text-align: left;
        font-style: italic;
        color: var(--foregorund-clr);
        background-color: var(--background-clr);
        transition: all 200ms ease;
    }

    .link:hover {
        color: var(--main-clr2);
        letter-spacing: 0.8rem;
    }
</style>
