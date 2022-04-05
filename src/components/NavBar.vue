
<template>
    <header
        @scroll="toggleNavbar"
        :class="{ 'scroll-up': scrolledUp, 'scroll-down': scrolledDown }"
        class="header"
    >
        <transition name="wide-nav-fade" mode="out-in" appear>
            <NavLogo class="nav__logo" />
        </transition>
        <!-- <Logo /> -->
        <nav class="nav">
            <transition name="wide-nav-fade" mode="out-in" appear>
                <ul class="nav__links" v-show="!showNavIcon">
                    <li>
                        <a class="link" href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a class="link" href="#projects">Projects</a>
                    </li>
                    <li>
                        <a class="link" href="#contact">Contact</a>
                    </li>
                    <li>
                        <transition name="router-fade">
                            <router-link
                                :to="{ name: 'resume' }"
                                class="link resume"
                                >Resume</router-link
                            >
                        </transition>
                    </li>
                </ul>
            </transition>
            <div
                class="mobile-menu"
                v-show="showNavIcon"
                aria-expanded="false"
                aria-controls="nav__mobile"
            >
                <span class="sr-only">Menu</span>
                <transition name="switch" mode="out-in" @click="checkAria">
                    <Icon
                        aria-hidden="true"
                        @click="slideNavMobile"
                        v-if="changeIcon"
                        icon="bx:menu-alt-right"
                        color="#909"
                        width="40"
                        height="40"
                        class="burger"
                        :rotate="4"
                    />
                    <Icon
                        class="close-burger"
                        @click="hideNavMobile"
                        v-else
                        icon="emojione-monotone:heavy-multiplication-x"
                        color="purple"
                        width="30"
                        height="30"
                        :inline="true"
                    />
                </transition>
            </div>
            <div>
                <transition name="nav-icons">
                    <NavLogo class="mobile__logo" v-if="showNavMobile" />
                </transition>
                <transition name="nav-slide">
                    <ul
                        appear
                        v-if="showNavMobile"
                        class="nav__mobile"
                        id="nav__mobile"
                    >
                        <li>
                            <a class="link__mobile" href="#about-me"
                                >About Me</a
                            >
                        </li>
                        <li>
                            <a class="link__mobile" href="#projects"
                                >Projects</a
                            >
                        </li>
                        <li>
                            <a class="link__mobile" href="#contact">Contact</a>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'resume' }"
                                class="link__mobile resume"
                                >Resume</router-link
                            >
                        </li>
                    </ul>
                </transition>

                <transition name="nav-icons" appear v-if="showNavMobile">
                    <Media class="nav__icons" />
                </transition>
            </div>
        </nav>
    </header>
</template>

<script>
import Media from "./Media.vue";
import NavLogo from "./NavLogo.vue";
import Logo from "./Logo.vue";
import { Icon } from "@iconify/vue";
export default {
    components: { Icon, Media, NavLogo, Logo },

    data() {
        return {
            scrolledDown: false,
            scrolledUp: false,
            previousScroll: 0,
            changeIcon: null,
            showNavIcon: null,
            showNavMobile: null,
            showNav: null,
            windowWidth: null,
            links: ["About Me", "Projects", "Contact", "Resume"],
        };
    },

    created() {
        window.addEventListener("resize", this.checkWindowWidth);
        this.checkWindowWidth();
    },

    mounted() {
        window.addEventListener("scroll", this.toggleNavbar);
        this.toggleNavbar();
    },

    updated() {
        this.linksEntry();
        this.checkAria();
    },

    methods: {
        toggleNavbar() {
            if (window.innerWidth >= 600) {
                const currentScroll = window.scrollY;
                if (currentScroll <= 0) {
                    this.scrolledDown = false;
                    this.scrolledUp = false;
                } else if (currentScroll > this.previousScroll) {
                    this.scrolledDown = true;
                    this.scrolledUp = false;
                } else if (currentScroll < this.previousScroll) {
                    this.scrolledDown = false;
                    this.scrolledUp = true;
                }

                this.previousScroll = currentScroll;
            }
        },

        linksEntry() {
            const links = document.querySelectorAll(".link__mobile");
            links.forEach((link, index) => {
                if (link.style.animation.includes("linksFadeIn")) {
                    link.style.animation = "linksFadeOut 0.4s ease";
                } else {
                    link.style.animation = `linksFadeIn 0.4s ease forwards ${
                        index / 7 + 0.5
                    }s`;
                }
            });
        },

        checkWindowWidth() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth < 600) {
                this.showNavIcon = true;
                this.changeIcon = true;
                return;
            }
            this.showNavIcon = false;
            this.showNavMobile = false;

            return;
        },

        slideNavMobile() {
            this.showNavMobile = !this.showNavMobile;
            this.changeIcon = !this.changeIcon;
        },

        checkAria() {
            const menuExpanded = document.querySelector(".mobile-menu");

            if (this.showNavMobile === true) {
                menuExpanded.setAttribute("aria-expanded", true);
            } else {
                menuExpanded.setAttribute("aria-expanded", false);
            }
        },

        hideNavMobile() {
            this.showNavMobile = !this.showNavMobile;
            this.changeIcon = !this.changeIcon;
        },
    },
};
</script>

<style>
.router-fade-enter-from,
.router-fade-leave-to {
    opacity: 0;
}

.router-fade-enter-active,
.router-fade-leave-active {
    transition: all 1s easa;
}

.scroll-down {
    transform: translateY(-100%);
}

.scroll-up {
    box-shadow: 0 0 8px hsl(0, 0%, 5%, 0.5);
}

.nav {
    width: 100%;
    padding: 1em 2em;

    display: flex;
    justify-content: space-between;
}

.nav__logo {
    display: none;
}

header {
    display: flex;
    align-items: center;
    padding: 0 clamp(10px, 2vw, 4rem);
    /* justify-content: space-between; */
}

@media (min-width: 600px) {
    .nav__logo {
        width: 40px;
        margin-left: 2em;
        display: flex;
        align-items: center;
    }
}

.nav__links {
    width: 100%;

    list-style: none;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    gap: clamp(4rem, 8%, 6rem);
}

.nav__icons {
    position: fixed;
    bottom: 10vh;
    right: 75px;
    z-index: 9999;
}

.link,
.link__mobile {
    text-decoration: none;
    font-family: "Bebas Neue", cursive;
    color: var(--color-primary);
    outline: none;
}

.resume {
    position: relative;
    color: var(--color-accent);
}

.resume::before {
    content: "";
    display: inline-block;
    width: 30%;
    height: 40%;

    border-top: 1px solid var(--color-accent);
    border-left: 1px solid var(--color-accent);

    position: absolute;
    top: -3px;
    left: -5px;

    transition: all 0.5s ease;
}

.resume::after {
    content: "";
    display: inline-block;
    width: 30%;
    height: 40%;

    border-bottom: 1px solid var(--color-accent);
    border-right: 1px solid var(--color-accent);

    position: absolute;
    bottom: -1px;
    right: -5px;

    transition: all 0.5s ease;
}

.resume:hover::after,
.resume:hover::before,
.resume:focus::after,
.resume:focus::before {
    width: 90%;
    height: 90%;
}

.link:hover,
.link:focus,
.link__mobile:hover,
.link__mobile:focus {
    color: var(--color-secondary);
}

.nav__mobile {
    width: min(100%, 300px);
    height: 100vh;
    list-style: none;

    background: hsl(0, 0%, 18%, 1);
    border: 1px solid black;
    box-shadow: 0 0 15px black;

    font-size: 140%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
}

@media (max-width: 600px) {
    .mobile__logo {
        width: 40px;
        aspect-ratio: 1;

        position: fixed;
        top: 2.4rem;
        right: 220px;

        z-index: 9999;
    }
}

/* .burger,
.close-burger, */
.mobile-menu {
    cursor: pointer;

    position: fixed;
    z-index: 9999;
}

.mobile-menu {
    width: fit-content;
    height: 40px;
    top: 1.5rem;
    right: 1rem;
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* .burger {
    top: 1.5rem;
    right: 1rem;
} */

.close-burger {
    padding-right: 0.6rem;
}

.nav-slide-enter-from {
    transform: translateX(300px);
    opacity: 0;
}

.nav-slide-enter-active {
    transition: all 0.6s ease;
}

.nav-slide-leave-active {
    animation: navWait 0.6s ease;
}

@keyframes navWait {
    from {
        opacity: 1;
        transform: translateX(0px);
    }

    to {
        opacity: 0;
        transform: translateX(300px);
    }
}

.link__mobile {
    opacity: 0;
}

@keyframes linksFadeIn {
    from {
        opacity: 0;
        /* transform: translateX(200px); */
    }

    to {
        opacity: 1;
        /* transform: translateX(0); */
    }
}

@keyframes linksFadeOut {
    from {
        opacity: 1;
        /* transform: translateX(0px); */
    }

    to {
        opacity: 0;
        /* transform: translateX(200px); */
    }
}

.switch-enter-from,
.switch-leave-to {
    opacity: 0;
}

.switch-enter-to,
.switch-leave-from {
    opacity: 1;
}

.switch-enter-active,
.switch-leave-active {
    transition: all 0.4s ease;
}

.nav-icons-leave-from {
    opacity: 1;
}

.nav-icons-leave-to {
    opacity: 0;
    transform: translateX(100px);
}

.nav-icons-leave-active {
    animation: navWait 0.6s ease;
}

.nav-icons-enter-active {
    animation: navIconsFade 0.8s ease;
}

@keyframes navIconsFade {
    0% {
        opacity: 0;
    }
    60% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.wide-nav-fade-enter-from,
.wide-nav-fade-leave-to {
    opacity: 0;
    transform: translateY(-80px);
}

.wide-nav-fade-enter-active,
.wide-nav-fade-leave-active {
    transition: all 0.4s ease;
}

@media (min-width: 600px) {
    header {
        width: 100%;
        height: 3.5em;

        position: fixed;
        z-index: 8888;

        background-color: hsl(0, 0%, 15%, 0.6);

        transition: all 0.3s ease-in-out;
    }
}
</style>
