<template>
    <div class="no-page">
        <h1 class="page-not-found">Page not Found</h1>
        <Button @click="ETGoHome" class="no-button"> Home </Button>
    </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
    components: { Button },

    methods: {
        ETGoHome() {
            this.$router.push("/");
        },
    },
};
</script>

<style>
.no-page {
    width: 100vw;
    height: 100vh;

    display: grid;
    place-content: center;
}

.no-button {
    margin: 4rem auto;
}
</style>