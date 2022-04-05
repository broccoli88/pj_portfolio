<template>
    <article class="side-mail">
        <transition name="side-buttons-fade" appear>
            <SideButtons v-if="showSideButtons" id="optionButtons" />
        </transition>
        <button
            @blur="notFocused"
            @focus="focused"
            class="side-mail-button"
            @click="displayOptions"
            aria-controls="optionButtons"
            aria-expanded="false"
        >
            <p class="mail">pawel.jaromin@protonmail.com</p>
        </button>
    </article>
</template>

<script>
import SideButtons from "../components/SideButtons.vue";

export default {
    components: { SideButtons },
    data() {
        return {
            showSideButtons: false,
        };
    },

    methods: {
        displayOptions() {
            const mail = document.querySelector(".mail");

            this.showSideButtons = !this.showSideButtons;

            if (this.showSideButtons === true) {
                mail.setAttribute("aria-expanded", true);
            } else {
                mail.setAttribute("aria-expanded", false);
            }
        },

        focused(e) {
            e.target.firstElementChild.style.color = "var(--color-secondary)";
        },

        notFocused(e) {
            e.target.firstElementChild.style.color = "var(--color-font)";
        },
    },
};
</script>

<style>
.side-mail {
    width: 2rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;

    position: fixed;
    bottom: 20%;
    right: clamp(12px, 2vw, 4rem);
    z-index: 11;
    cursor: pointer;
}

.side-mail::before {
    content: "";
    display: block;

    width: 120%;
    height: 6%;

    border-top: 2px solid var(--color-secondary);
    border-right: 2px solid var(--color-secondary);
    border-left: 2px solid var(--color-secondary);

    position: absolute;
    top: -5rem;
    right: 0px;
    z-index: 10;
}

.side-mail::after {
    content: "";
    display: block;

    width: 120%;
    height: 6%;

    border-bottom: 2px solid var(--color-secondary);
    border-right: 2px solid var(--color-secondary);
    border-left: 2px solid var(--color-secondary);

    position: absolute;
    bottom: -5rem;
    right: 0px;
    z-index: 10;
}

.side-mail-button {
    width: fit-content;
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.side-mail-button:hover {
    color: var(--color-secondary);
}

.side-mail-button::before {
    display: none;
}

.side-mail-button::after {
    display: none;
}

.side-mail-button:focus {
    outline: none;
}

.mail {
    color: var(--color-font);
    font-size: 1.5rem;
    height: 25rem;
    writing-mode: vertical-lr;
    letter-spacing: 1.5px;
    line-height: 1;
    font-weight: 500;
}

.mail:hover {
    color: var(--color-secondary);
}

@media (min-width: 1300px) {
    .side-mail {
        right: 5%;
    }
}

.side-buttons-fade-enter-from,
.side-buttons-fade-leave-to {
    opacity: 0;
    transform: translateY(-40px);
}

.side-buttons-fade-enter-active,
.side-buttons-fade-leave-active {
    transition: all 0.4s ease;
}
</style>