<template>
    <div class="side-buttons">
        <transition name="tooltip-fade" appear>
            <span v-if="showTooltip" class="tooltip"
                >Email Copied</span
            ></transition
        >
        <Button @click="copyMail" class="side-button">Copy</Button>
        <a href="mailto:pawel.jaromin.protonmail.com"
            ><Button class="side-button">Open</Button></a
        >
    </div>
</template>

<script>
import Button from "./Button.vue";
export default {
    components: { Button },
    data() {
        return {
            showTooltip: false,
            mail: "pawel.jaromin@protonmail.com",
        };
    },

    methods: {
        copyMail() {
            navigator.clipboard.writeText(this.mail);
            this.showTooltip = true;
            setTimeout(() => {
                this.showTooltip = false;
            }, 800);
        },
    },
};
</script>

<style>
.side-buttons {
    position: absolute;
    top: -15rem;
    right: 0;
}

.side-button {
    font-size: 1.5rem;
    width: 3em;
    padding: 0.2em 0.3em;
    outline: none;
}

.side-buttons > a {
    outline: none;
}

.tooltip {
    font-size: 1.4rem;
    font-weight: 500;
    width: max-content;

    background: var(--color-accent);
    padding: 0 0.2em;
    border-radius: 4px;

    position: absolute;
    top: -3rem;
    right: -1.1rem;
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
    transition: all 0.4s ease;
}
</style>