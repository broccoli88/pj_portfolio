<template>
    <article class="technologies">
        <h3 v-scrollAnimation>Technologies I have been working with</h3>

        <section v-scrollAnimation class="icons">
            <figure @mouseenter="hoverOver" @mouseleave="hoverOut">
                <Icon
                    aria-hidden="true"
                    icon="fontisto:html5"
                    :color="color"
                    width="50"
                    height="50"
                    :inline="true"
                />
                <figcaption>HTML</figcaption>
            </figure>
            <figure @mouseenter="hoverOver" @mouseleave="hoverOut">
                <Icon
                    aria-hidden="true"
                    icon="fontisto:css3"
                    :color="color"
                    width="50"
                    height="50"
                    :inline="true"
                />
                <figcaption>CSS</figcaption>
            </figure>
            <figure @mouseenter="hoverOver" @mouseleave="hoverOut">
                <Icon
                    aria-hidden="true"
                    icon="cib:javascript"
                    :color="color"
                    width="50"
                    height="50"
                    :inline="true"
                />
                <figcaption>JavaScript</figcaption>
            </figure>
            <figure @mouseenter="hoverOver" @mouseleave="hoverOut">
                <Icon
                    aria-hidden="true"
                    icon="akar-icons:node-fill"
                    :color="color"
                    width="50"
                    height="50"
                    :inline="true"
                />
                <figcaption>Node.JS</figcaption>
            </figure>
            <figure @mouseenter="hoverOver" @mouseleave="hoverOut">
                <Icon
                    aria-hidden="true"
                    icon="uim:vuejs"
                    :color="color"
                    width="50"
                    height="50"
                    :inline="true"
                />
                <figcaption>Vue</figcaption>
            </figure>
            <figure @mouseenter="hoverOver" @mouseleave="hoverOut">
                <Icon
                    aria-hidden="true"
                    icon="bi:git"
                    :color="color"
                    width="50"
                    height="50"
                    :inline="true"
                />
                <figcaption>Git</figcaption>
            </figure>
        </section>
    </article>
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
    data() {
        return {
            color: "#388186",
        };
    },

    methods: {
        hoverOver(e) {
            const child = e.target.firstElementChild;
            child.style.color = "#a5e9e1";
        },

        hoverOut(e) {
            const child = e.target.firstElementChild;
            child.style.color = "#388186";
        },
    },
};
</script>

<style>
.technologies {
    width: min(100%, 90rem);
    margin: 2rem 0;
    position: relative;
    margin-bottom: 8rem;
}

.technologies::before {
    content: "";
    display: inline-block;
    width: 30%;
    height: 30%;

    border-top: 1px solid var(--color-primary);
    border-left: 1px solid var(--color-primary);

    pointer-events: none;

    position: absolute;
    top: -10px;
    left: -10px;
}

.technologies::after {
    content: "";
    display: inline-block;
    width: 30%;
    height: 30%;

    border-bottom: 1px solid var(--color-primary);
    border-right: 1px solid var(--color-primary);

    pointer-events: none;

    position: absolute;
    bottom: -10px;
    right: -10px;
}

.icons {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 3rem;
}

.icons figure {
    width: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icons figure:hover figcaption {
    font-weight: 600;
}

@media (min-width: 800px) {
    .technologies {
        margin: 8rem auto 8rem;
    }
}
</style>