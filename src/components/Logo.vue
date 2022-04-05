<template>
    <figure class="logo">
        <img src="../assets/Logo.svg" alt="" />
    </figure>
</template>

<script>
export default {};
</script>

<style>
.logo {
    display: none;
}

@media (min-width: 1365px) {
    .logo {
        display: initial;
        position: absolute;
        top: 12rem;
        left: clamp(10px, 2vw, 4rem);

        width: 80px;
        aspect-ratio: 1;
    }

    .logo > img {
        width: 100%;
        object-fit: cover;
    }
}
</style>