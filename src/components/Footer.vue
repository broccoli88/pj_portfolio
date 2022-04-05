<template>
    <footer>
        <section v-scrollAnimation class="footer-media">
            <figure @mouseenter="hover" @mouseleave="withoutHover">
                <a
                    @blur="focusOut"
                    @focus="focusIn"
                    href="mailto:pawel.jaromin.protonmail.com"
                >
                    <Icon
                        aria-hidden="true"
                        icon="entypo:email"
                        color="#388186"
                        width="25"
                        height="25"
                        :inline="true"
                    />
                </a>
            </figure>
            <figure @mouseenter="hover" @mouseleave="withoutHover">
                <a
                    @focus="focusIn"
                    @blur="focusOut"
                    href="https://pl.linkedin.com/in/pawe%C5%82-jaromin-a891a013b/en?trk=people-guest_people_search-card"
                    target="_blank"
                >
                    <Icon
                        aria-hidden="true"
                        icon="el:linkedin"
                        color="#388186"
                        width="25"
                        height="25"
                        :inline="true"
                    />
                </a>
            </figure>
            <figure @mouseenter="hover" @mouseleave="withoutHover">
                <a
                    @focus="focusIn"
                    @blur="focusOut"
                    href="https://github.com/broccoli88"
                    target="_blank"
                >
                    <Icon
                        aria-hidden="true"
                        icon="bi:git"
                        color="#388186"
                        width="25"
                        height="25"
                        :inline="true"
                    />
                </a>
            </figure>
        </section>
        <p v-scrollAnimation>Made by Pawel Jaromin</p>
    </footer>
</template>

<script>
import { Icon } from "@iconify/vue";

const scrollAnimation = {
    mounted: (el) => {
        let option = {
            root: null,
            rootMargin: "-150px",
            threshold: 0,
        };

        const animationObserver = new IntersectionObserver(
            (entries, animationObserver) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    el.classList.toggle("on-entry");
                    animationObserver.unobserve(el);
                });
            }
        );
        animationObserver.observe(el);
    },
};

export default {
    directives: { scrollAnimation },
    components: { Icon },

    methods: {
        hover(e) {
            const child = e.target.firstElementChild.firstElementChild;
            child.style.color = "#a5e9e1";
        },
        withoutHover(e) {
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
footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 4rem;
}

footer > p {
    font-size: clamp(1.5rem, 2vw, 2rem);
    color: var(--color-secondary);
    text-decoration: underline;
}

.footer-media {
    display: flex;
    gap: 2.5rem;
    margin-bottom: 0.4rem;
}

.footer-media figure a,
.footer-media figure a svg {
    outline: none;
}

@media (min-width: 800px) {
    .footer-media {
        display: none;
    }
}
</style>