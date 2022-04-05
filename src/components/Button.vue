<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {};
</script>

<style>
.button {
    width: 7em;
    padding: 0.8em 1em;

    font-size: clamp(1.6rem, 2.2vw, 2.2rem);
    font-family: "Bebas Neue", cursive;
    color: white;
    cursor: pointer;

    background: transparent;
    border: 0;
    outline: none;

    position: relative;
    transition: all 0.5s ease;
}

.button:active {
    color: var(--color-accent);
}

button::before {
    content: "";
    display: inline-block;
    width: 30%;
    height: 40%;

    border-top: 1px solid var(--color-primary);
    border-left: 1px solid var(--color-primary);

    position: absolute;
    top: 0px;
    left: 0px;

    transition: all 0.5s ease;
}

button::after {
    content: "";
    display: inline-block;
    width: 30%;
    height: 40%;

    border-bottom: 1px solid var(--color-primary);
    border-right: 1px solid var(--color-primary);

    position: absolute;
    bottom: 0px;
    right: 0px;

    transition: all 0.5s ease;
}

button:hover::before,
button:focus::before {
    width: 90%;
    height: 90%;
}

button:hover::after,
button:focus::after {
    width: 90%;
    height: 90%;
}
</style>