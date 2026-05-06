<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>frank lloyd wright — arhitectură organică</title>
	<meta name="description" content="O explorare a operei arhitecturale a lui Frank Lloyd Wright, în limba română." />
</svelte:head>

<Navbar />
<main>
	{@render children()}
</main>

<footer>
	<div class="footer-inner">
		<div class="footer-left">
			<span class="label">frank lloyd wright</span>
			<p>1867 — 1959</p>
		</div>
		<div class="footer-center">
			<nav>
				<a href="/">acasă</a>
				<a href="/proiecte">proiecte</a>
				<a href="/despre">despre</a>
			</nav>
		</div>
		<div class="footer-right">
			<p class="label">arhitectură organică</p>
			<p>Wisconsin, S.U.A.</p>
		</div>
	</div>
	<div class="footer-bottom">
		<span class="label">© 2024 — toate drepturile rezervate</span>
	</div>
</footer>

<style>
	main {
		min-height: 100vh;
	}

	footer {
		background-color: var(--dark-bg);
		color: var(--dark-text);
		padding: 64px var(--pad-x) 40px;
	}

	.footer-inner {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 40px;
		padding-bottom: 48px;
		border-bottom: 1px solid rgba(245, 242, 237, 0.12);
		margin-bottom: 32px;
	}

	.footer-left p,
	.footer-right p {
		font-family: var(--font-display);
		font-size: 13px;
		font-weight: 300;
		color: rgba(245, 242, 237, 0.5);
		margin-top: 8px;
	}

	.footer-left .label,
	.footer-right .label {
		color: rgba(245, 242, 237, 0.35);
	}

	.footer-right {
		text-align: right;
	}

	.footer-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.footer-center nav {
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: center;
	}

	.footer-center a {
		font-family: var(--font-display);
		font-size: 12px;
		letter-spacing: 0.1em;
		color: rgba(245, 242, 237, 0.5);
		transition: color 0.25s ease;
	}

	.footer-center a:hover {
		color: var(--dark-text);
		opacity: 1;
	}

	.footer-bottom .label {
		color: rgba(245, 242, 237, 0.25);
		font-size: 10px;
	}

	@media (max-width: 720px) {
		.footer-inner {
			grid-template-columns: 1fr;
			text-align: center;
		}
		.footer-right { text-align: center; }
	}
</style>
