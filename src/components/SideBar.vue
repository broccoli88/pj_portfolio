<template>
    <article class="side-media">
        <figure @mouseenter="hoverIn" @mouseleave="hoverOut">
            <a
                @focus="focusIn"
                @blur="focusOut"
                href="mailto:pawel.jaromin.protonmail.com"
            >
                <Icon
                    aria-hidden="true"
                    icon="entypo:email"
                    :color="color"
                    width="20"
                    height="20"
                    :inline="true"
                    class="side-icon"
                />
            </a>
        </figure>
        <figure @mouseenter="hoverIn" @mouseleave="hoverOut">
            <a
                @blur="focusOut"
                @focus="focusIn"
                href="https://pl.linkedin.com/in/pawe%C5%82-jaromin-a891a013b/en?trk=people-guest_people_search-card"
                target="_blank"
            >
                <Icon
                    aria-hidden="true"
                    icon="el:linkedin"
                    :color="color"
                    width="20"
                    height="20"
                    :inline="true"
                    class="side-icon"
                />
            </a>
        </figure>
        <figure @mouseenter="hoverIn" @mouseleave="hoverOut">
            <a
                @blur="focusOut"
                @focus="focusIn"
                href="https://github.com/broccoli88"
                target="_blank"
            >
                <Icon
                    aria-hidden="true"
                    icon="bi:git"
                    :color="color"
                    width="20"
                    height="20"
                    :inline="true"
                    class="side-icon"
                />
            </a>
        </figure>
    </article>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    components: { Icon },
    data() {
        return {
            showSideBar: null,
            color: "#388186",
        };
    },

    methods: {
        hoverIn(e) {
            const child = e.target.firstElementChild.firstElementChild;
            child.style.color = "#a5e9e1";
        },

        hoverOut(e) {
            const child = e.target.firstElementChild.firstElementChild;
            child.style.color = "#388186";
        },

        focusIn(e) {
            e.target.firstElementChild.style.color = "#a5e9e1";
        },

        focusOut(e) {
            e.target.firstElementChild.style.color = "#388186";
        },
    },
};
</script>

<style>
.side-media {
    width: fit-content;

    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;

    position: fixed;
    bottom: 20%;
    left: clamp(10px, 2vw, 4rem);
    z-index: 11;
}

.side-media::before {
    content: "";
    display: block;

    width: 120%;
    height: 10%;

    border-top: 2px solid var(--color-secondary);
    border-right: 2px solid var(--color-secondary);
    border-left: 2px solid var(--color-secondary);

    position: absolute;
    top: -5rem;
    left: -2.5px;
    z-index: 10;
}

.side-media::after {
    content: "";
    display: block;

    width: 120%;
    height: 10%;

    border-bottom: 2px solid var(--color-secondary);
    border-right: 2px solid var(--color-secondary);
    border-left: 2px solid var(--color-secondary);

    position: absolute;
    bottom: -5rem;
    left: -2.5px;
    z-index: 10;
}

.side-media figure > a {
    outline: none;
}

.side-icon {
    cursor: pointer;
}

.side-icon:focus {
    outline: none;
}

.pointer {
    margin: 2rem 0;
}

@media (min-width: 1300px) {
    .side-media {
        left: 5%;
    }
}
</style>