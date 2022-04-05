<template>
    <div class="submitted">
        <div class="info">
            <h1>Your message has been send</h1>
            <Button class="go-home" @click="ETGoHome">Home</Button>
        </div>
        <Footer />
    </div>
</template>

<script>
import Button from "../components/Button.vue";
import Footer from "../components/Footer.vue";
export default {
    components: { Button, Footer },
    methods: {
        ETGoHome() {
            this.$router.push("/");
        },
    },
};
</script>

<style>
.submitted {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    text-align: center;

    overflow-y: hidden;
}

.info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.go-home {
    margin: 6rem auto;
}
</style>