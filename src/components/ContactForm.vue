<template>
    <article class="contact" id="contact">
        <h2 v-scrollAnimation>Contact me</h2>
        <form
            @submit="handleSubmit"
            class="contact__form"
            method="POST"
            action="https://formsubmit.co/jaromin.pawel@protonmail.com"
        >
            <!-- REDIRECT -->
            <input
                type="hidden"
                name="_next"
                value="https://v-portfolio-pj.vercel.app/form-submitted"
            />

            <!-- HONEYPOT -->
            <input type="text" name="_honey" style="display: none" />

            <!-- DISABLE CAPTCH -->
            <input type="hidden" name="_captcha" value="false" />

            <section class="input-container area-name">
                <label for="name" class="sr-only">First Name</label>
                <input
                    required
                    placeholder="First Name"
                    v-noError
                    v-model="firstName"
                    v-scrollAnimation
                    @blur="loseOutline"
                    @focus="outline"
                    class="contact__input"
                    type="text"
                    id="name"
                    name="Name"
                    aria-errormessage="err1"
                />
                <span
                    v-invalid
                    class="error"
                    id="err1"
                    v-if="v$.firstName.$error"
                >
                    {{ v$.firstName.$errors[0].$message }}
                </span>
            </section>

            <section class="input-container area-last-name">
                <label for="last-name" class="sr-only">Last Name</label>
                <input
                    v-model="lastName"
                    v-scrollAnimation
                    @blur="loseOutline"
                    @focus="outline"
                    class="contact__input"
                    type="text"
                    id="last-name"
                    name="Last Name"
                    placeholder="Last name"
                />
            </section>
            <section class="input-container area-email">
                <label for="email" class="sr-only">Email</label>
                <input
                    required
                    v-noError
                    v-model="email"
                    v-scrollAnimation
                    @blur="loseOutline"
                    @focus="outline"
                    class="contact__input"
                    type="text"
                    id="email"
                    name="Email"
                    placeholder="Email"
                    aria-invalid="false"
                    aria-errormessage="err2"
                />
                <span v-invalid class="error" id="err2" v-if="v$.email.$error">
                    {{ v$.email.$errors[0].$message }}
                </span>
            </section>
            <section class="input-container area-message">
                <label for="message" class="sr-only">Message</label>
                <textarea
                    required
                    v-noError
                    v-model="message"
                    v-scrollAnimation
                    @blur="loseOutline"
                    @focus="outline"
                    @invalid="checkIfInvalid"
                    class="contact__input"
                    name="Message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    aria-invalid="false"
                    aria-errormessage="err3"
                ></textarea>
                <span
                    v-invalid
                    class="error"
                    id="err3"
                    v-if="v$.message.$error"
                >
                    {{ v$.message.$errors[0].$message }}
                </span>
            </section>
            <transition name="form-confirmation" appear>
                <span v-if="formSubmittedCorrectly" class="confirmation-message"
                    >Message have been sent!</span
                >
            </transition>
            <Button v-scrollAnimation class="send" type="submit">
                <span>Send</span>
            </Button>
        </form>
    </article>
</template>


<script>
import Button from "./Button.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const scrollAnimation = {
    mounted: (el) => {
        let options = {
            root: null,
            rootMargin: "0px",
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

const invalid = {
    mounted: (el) => {
        const error = el.previousElementSibling;
        error.setAttribute("aria-invalid", true);
    },
};

const noError = {
    updated: (el) => {
        const valid = el.nextElementSibling;
        if (!valid) {
            el.setAttribute("aria-invalid", false);
        }
    },
};

export default {
    directives: { scrollAnimation, invalid, noError },
    components: { Button },

    data() {
        return {
            v$: useVuelidate(),
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            errorName: false,
            errorEmail: false,
            errorMessage: false,
            formSubmittedCorrectly: false,
            formContent: {},
        };
    },

    validations() {
        return {
            firstName: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(30),
            },
            email: { required, email },
            message: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(30),
            },
        };
    },
    methods: {
        handleSubmit() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.formSubmittedCorrectly = true;
                setTimeout(() => {
                    this.formSubmittedCorrectly = false;
                }, 2000);
            }
        },

        outline(e) {
            const parent = e.target.parentElement;
            parent.classList.add("outline");
        },

        loseOutline(e) {
            const parent = e.target.parentElement;
            parent.classList.remove("outline");
        },
    },
};
</script>

<style>
.contact {
    height: 72vh;
    margin-bottom: 5rem;
}

.input-container {
    padding: 2px 0;
    display: flex;
    flex-direction: column;

    position: relative;
}

.contact__form {
    position: relative;
}

.confirmation-message {
    color: var(--color-secondary);
    font-weight: 600;

    position: absolute;
    bottom: 7rem;
    left: 0;
}

.error {
    color: var(--color-accent);
    font-size: 1.8rem;
    line-height: 1;
    font-weight: 500;

    position: absolute;
    bottom: -1.8rem;
    left: 0;
}

.outline {
    background-image: linear-gradient(
        to right,
        var(--color-primary),
        var(--color-primary)
    );

    background-position: 0 100%;
    background-size: 100% 2px;
    background-repeat: no-repeat;

    animation: inputBorderToggle 1s ease;
}

@keyframes inputBorderToggle {
    0% {
        background-size: 0 2px;
    }
    100% {
        background-size: 100% 2px;
    }
}

.contact__input {
    width: 100%;
    padding: 0.6em;

    font-family: "Smooch Sans", sans-serif;
    font-size: clamp(1.6rem, 2.2vw, 2.2rem);
    color: var(--font-color);

    border-radius: 0;
    border: none;
    background-color: hsl(0, 0%, 20%);
}

.contact__input:focus {
    outline: none;
    box-shadow: none;
}

.contact__form {
    margin-top: 6rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 1.5rem;
}

.send {
    margin: 2rem auto;
}

@media (min-width: 600px) {
    .contact {
        height: 60vh;
        margin-bottom: 5rem;
    }

    .contact__form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "name lastname"
            "email email"
            "message message"
            "button button";
    }

    .area-name {
        grid-area: name;
    }

    .area-name {
        background: inherit;
    }

    .area-last-name {
        grid-area: lastname;
    }

    .area-email {
        grid-area: email;
    }

    .area-message {
        grid-area: message;
    }

    .send {
        grid-area: button;
    }
}

@media (min-width: 820px) {
    .contact {
        height: 65vh;
        margin-bottom: 10rem;
    }
}

.form-confirmation-enter-from,
.form-confirmation-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.form-confirmation-enter-active,
.form-confirmation-leave-active {
    transition: all 0.3s ease;
}
</style>