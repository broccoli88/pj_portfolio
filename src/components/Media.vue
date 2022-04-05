<template>
    <article class="media">
        <figure @mouseenter="light" @mouseleave="dark">
            <a
                @blur="focusOut"
                @focus="focusIn"
                href="mailto:pawel.jaromin.protonmail.com"
            >
                <Icon
                    icon="entypo:email"
                    color="#388186"
                    width="30"
                    height="30"
                    :inline="true"
                />
            </a>
        </figure>
        <figure @mouseenter="light" @mouseleave="dark">
            <a
                @blur="focusOut"
                @focus="focusIn"
                href="https://pl.linkedin.com/in/pawe%C5%82-jaromin-a891a013b/en?trk=people-guest_people_search-card"
                target="_blank"
            >
                <Icon
                    icon="el:linkedin"
                    color="#388186"
                    width="30"
                    height="30"
                    :inline="true"
                />
            </a>
        </figure>
        <figure @mouseenter="light" @mouseleave="dark">
            <a
                @blur="focusOut"
                @focus="focusIn"
                href="https://github.com/broccoli88"
                target="_blank"
            >
                <Icon
                    icon="bi:git"
                    color="#388186"
                    width="30"
                    height="30"
                    :inline="true"
                />
            </a>
        </figure>
    </article>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    components: { Icon },

    methods: {
        light(e) {
            const child = e.target.firstElementChild.firstElementChild;
            child.style.color = "#a5e9e1";
        },

        dark(e) {
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
.media {
    width: fit-content;

    display: flex;
    gap: 3rem;
}

.media > figure {
    cursor: pointer;
}

.media figure a {
    outline: none;
}
</style>