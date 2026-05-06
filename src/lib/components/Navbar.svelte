<script lang="ts">
	import { page } from '$app/stores';

	const links = [
		{ href: '/', label: 'acasă' },
		{ href: '/proiecte', label: 'proiecte' },
		{ href: '/despre', label: 'despre' }
	];

	let scrolled = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 40;
	}
</script>

<svelte:window on:scroll={onScroll} />

<nav class:scrolled>
	<a href="/" class="logo">
		<span class="logo-initials">flw</span>
		<span class="logo-full">frank lloyd wright</span>
	</a>

	<ul class="nav-links">
		{#each links as { href, label }}
			<li>
				<a {href} class:active={$page.url.pathname === href || ($page.url.pathname.startsWith(href) && href !== '/')}>
					{label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		height: var(--nav-height);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 var(--pad-x);
		transition: background-color 0.4s ease, border-color 0.4s ease;
		border-bottom: 1px solid transparent;
	}

	nav.scrolled {
		background-color: var(--bg);
		border-color: var(--border);
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		transition: opacity 0.25s ease;
	}

	.logo-initials {
		font-family: var(--font-display);
		font-size: 13px;
		font-weight: 500;
		letter-spacing: 0.14em;
		color: var(--gold);
	}

	.logo-full {
		font-family: var(--font-display);
		font-size: 13px;
		font-weight: 300;
		letter-spacing: 0.06em;
		color: var(--ink);
	}

	.nav-links {
		list-style: none;
		display: flex;
		gap: 40px;
	}

	.nav-links a {
		font-family: var(--font-display);
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 0.12em;
		color: var(--ink-secondary);
		position: relative;
		padding-bottom: 2px;
		transition: color 0.25s ease;
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 1px;
		background-color: var(--gold);
		transition: width 0.3s ease;
	}

	.nav-links a.active {
		color: var(--ink);
	}

	.nav-links a.active::after,
	.nav-links a:hover::after {
		width: 100%;
	}

	@media (max-width: 600px) {
		.logo-full { display: none; }
		.nav-links { gap: 24px; }
	}
</style>
