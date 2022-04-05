<template>
    <article class="projects" id="projects">
        <h2 v-scrollAnimation>Projects</h2>
        <section>
            <ul class="project__list">
                <li
                    v-for="project in projects"
                    :key="project.title"
                    class="project"
                >
                    <h3 v-scrollAnimation>{{ project.title }}</h3>
                    <p v-scrollAnimation>
                        {{ project.body }}
                    </p>
                    <p v-scrollAnimation>
                        <span class="project__technologies-used">Used: </span
                        >{{ project.technologies }}
                    </p>
                    <div class="buttons">
                        <a :href="project.liveAppLink" target="_blank">
                            <Button v-scrollAnimation class="project-button">
                                Live App
                            </Button>
                        </a>
                        <a :href="project.gitLink" target="_blank">
                            <Button class="project-button" v-scrollAnimation>
                                <span>Git</span>
                            </Button>
                        </a>
                    </div>
                </li>
            </ul>
            <!-- <Button v-scrollAnimation class="projects__show">
                <span>Show More</span>
            </Button> -->
        </section>
    </article>
</template>

<script>
import data from "../../Data/projects.json";
import Button from "./Button.vue";

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
    components: { Button },
    data() {
        return {
            myJson: data.projects,
            projects: [],
        };
    },
    mounted() {
        this.projects = this.myJson;
    },
};
</script>

<style>
.projects {
    min-height: 100vh;
    position: relative;
}
.project__list {
    margin-top: 6rem;
    list-style: none;
}
.project {
    width: 100%;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
    position: relative;
}

.project::before {
    content: "";
    display: inline-block;
    width: 30%;
    height: 30%;
    border-top: 1px solid var(--color-primary);
    border-left: 1px solid var(--color-primary);
    position: absolute;
    top: -10px;
    left: -10px;
    pointer-events: none;
}
.project::after {
    content: "";
    display: inline-block;
    width: 30%;
    height: 30%;
    border-bottom: 1px solid var(--color-primary);
    border-right: 1px solid var(--color-primary);
    position: absolute;
    bottom: -10px;
    right: -10px;
    pointer-events: none;
}
.project > p {
    width: min(80ch, 100%);
}
.project__technologies-used {
    font-weight: 600;
}
.buttons {
    margin: 2rem;
    display: flex;
    justify-content: space-around;
    gap: 5rem;
}

.projects__show {
    display: block;
    margin: 4rem auto;
}
@media (min-width: 600px) {
    .project__list {
        display: flex;
        gap: 6rem;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .project__list {
        margin-top: 3rem;
    }
    .project {
        width: 40%;
    }

    .buttons {
        margin: 2rem 0;
        gap: 2.5rem;
    }

    .project-button {
        width: 5em;
    }
}
@media (min-width: 800px) {
    .projects {
        min-height: 90vh;
        margin-bottom: 8rem;
    }
}

@media (min-width: 1000px) {
    .buttons {
        margin: 2rem;
    }
}

@media (min-width: 1250px) {
    .projects {
        min-height: 100vh;
        margin-bottom: 15rem;
    }
}
</style>