<template>
	<article class="resume-page">
		<h1>Resume</h1>
		<h2>Pawel Jaromin</h2>
		<div class="buttons">
			<Button @click="ETGoHome">Home</Button>
			<a
				class="download"
				href="https://mega.nz/file/mcFjEZjL#P9p3YrWc-Ezd1EAuU8Z2SCgA7f2XzGpnIhbhy0EZkS8"
				download
				target="_blank"
			>
				<Button>Download</Button>
			</a>
		</div>
		<figure class="resume-scan">
			<img src="../assets/Pawel_Jaromin_Resume_EN.png" alt="" />
		</figure>
	</article>

	<Footer />
</template>

<script>
	import Button from "../components/Button.vue";
	import Footer from "../components/Footer.vue";

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
		components: { Button, Footer },

		methods: {
			ETGoHome() {
				this.$router.push("/");
			},
		},
	};
</script>

<style>
	.resume-page {
		margin: 0 auto;
		max-width: min(100%, 120rem);
		min-height: 100vh;
		padding: clamp(5rem, 7vw, 8.5rem);

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.resume-page > h2 {
		color: var(--color-secondary);
		margin-bottom: 4rem;
	}
	.resume-scan {
		margin-top: 5rem;
		width: 100%;
		height: 100%;
	}

	.resume-scan > img {
		width: 100%;
		object-fit: cover;
	}

	.buttons {
		display: flex;
	}

	.download {
		text-decoration: none;
		color: inherit;
	}
</style>
