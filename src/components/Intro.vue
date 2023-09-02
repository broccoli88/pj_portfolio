<template>
	<transition name="first-show" appear>
		<article class="intro" id="intro">
			<p class="intro__greeting">Hi! I'm</p>
			<h1>Pawel Jaromin</h1>
			<p class="intro__description">{{ intro.intro }}</p>
			<h3>Let's create something unique!</h3>
		</article>
	</transition>
</template>

<script>
	import Intro from "../../Data/intro.json";

	export default {
		data() {
			return {
				intro: Intro,
			};
		},
	};
</script>

<style>
	.intro {
		height: 80vh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
		margin-inline: auto;
	}

	.intro__greeting {
		color: var(--color-accent);
		font-size: clamp(3rem, 4.5vw, 7rem);
		font-weight: 600;

		display: flex;
		flex-direction: column;
	}

	.intro h3 {
		margin: 7rem 0 3rem 0;
		color: var(--color-secondary);
	}

	.intro > span {
		font-weight: 500;
		color: var(--color-secondary);
	}

	.intro__description {
		max-width: 80ch;
		font-size: clamp(2rem, 2.4vw, 2.7rem);
		margin-bottom: 2rem;
	}

	@media (min-width: 600px) {
		.intro {
			height: 90vh;
			gap: 2rem;
		}

		.intro__description {
			margin-bottom: 0;
		}
	}

	@media (min-width: 1250px) {
		.intro {
			margin-top: 4rem;
			min-height: 100vh;
			justify-content: flex-start;
		}
	}

	.first-show-enter-from,
	.first-show-leave-to {
		opacity: 0;
		transform: translateY(60px);
	}

	.first-show-enter-active,
	.first-show-leave-active {
		transition: all 0.7s ease;
	}
</style>
