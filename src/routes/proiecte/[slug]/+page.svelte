<script lang="ts">
	import { onMount } from 'svelte';
	import ImageTilt from '$lib/components/ImageTilt.svelte';

	let { data } = $props();
	let { project, prev, next } = $derived(data);

	let heroVisible = $state(false);

	onMount(() => {
		setTimeout(() => (heroVisible = true), 80);

		const observer = new IntersectionObserver(
			(entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
			{ threshold: 0.1 }
		);
		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>{project.title} — frank lloyd wright</title>
</svelte:head>

<!-- ── HERO ──────────────────────────────────────────────────────────── -->
<section class="proj-hero" class:visible={heroVisible}>
	<div class="proj-hero-bg">
		<img src={project.images.hero} alt={project.title} />
		<div class="proj-hero-overlay"></div>
	</div>

	<nav class="proj-breadcrumb" aria-label="Breadcrumb">
		<a href="/proiecte">proiecte</a>
		<span aria-hidden="true">/</span>
		<span>{project.title}</span>
	</nav>

	<div class="proj-hero-content">
		<div class="proj-hero-meta">
			<span class="label label--light">{project.year}</span>
			<span class="label label--light meta-dot" aria-hidden="true">·</span>
			<span class="label label--light">{project.location}</span>
		</div>
		<h1 class="proj-title">
			{#each project.title.split(' ') as word, i}
				<span class="proj-word" style="--d: {i * 90}ms">{word}</span>
				{#if i < project.title.split(' ').length - 1}&nbsp;{/if}
			{/each}
		</h1>
		<p class="proj-hero-style">{project.style}</p>
	</div>

	<div class="proj-hero-geo" aria-hidden="true">
		<svg viewBox="0 0 200 200" fill="none">
			<rect x="10" y="10" width="180" height="180" stroke="rgba(168,120,64,0.3)" stroke-width="1" />
			<line x1="10" y1="100" x2="190" y2="100" stroke="rgba(168,120,64,0.2)" stroke-width="1" />
			<line x1="100" y1="10" x2="100" y2="190" stroke="rgba(168,120,64,0.2)" stroke-width="1" />
		</svg>
	</div>
</section>

<!-- ── OVERVIEW ──────────────────────────────────────────────────────── -->
<section class="proj-overview">
	<div class="proj-overview-inner">
		<div class="proj-meta-table reveal">
			<div class="meta-cell">
				<span class="label">an</span>
				<strong>{project.year}</strong>
			</div>
			<div class="meta-cell">
				<span class="label">locație</span>
				<strong>{project.location}</strong>
			</div>
			<div class="meta-cell">
				<span class="label">stil</span>
				<strong>{project.style}</strong>
			</div>
			<div class="meta-cell">
				<span class="label">client</span>
				<strong>{project.client}</strong>
			</div>
			<div class="meta-cell">
				<span class="label">materiale</span>
				<strong>{project.material}</strong>
			</div>
		</div>

		<div class="proj-text-block">
			<p class="proj-intro reveal">{project.intro}</p>
			<div class="proj-description reveal reveal-delay-1">
				{#each project.description.split('\n') as para}
					{#if para.trim()}
						<p>{para.trim()}</p>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ── EXTERIOR GALLERY ──────────────────────────────────────────────── -->
<section class="proj-gallery">
	<div class="proj-gallery-header reveal">
		<span class="label">exterior</span>
		<div class="gallery-line" aria-hidden="true"></div>
	</div>

	<div class="proj-gallery-exterior">
		<div class="gallery-main reveal">
			<ImageTilt src={project.images.exterior} alt="{project.title} — vedere exterioară" aspectRatio="16/9" intensity={6} />
		</div>
		{#if project.images.exterior2}
			<div class="gallery-secondary reveal reveal-delay-1">
				<ImageTilt src={project.images.exterior2} alt="{project.title} — detaliu exterior" aspectRatio="4/3" intensity={8} />
			</div>
		{/if}
	</div>
</section>

<!-- ── INTERIOR GALLERY ──────────────────────────────────────────────── -->
<section class="proj-interior">
	<div class="proj-gallery-header reveal">
		<span class="label">interior</span>
		<div class="gallery-line" aria-hidden="true"></div>
	</div>

	<div class="proj-gallery-interior">
		<div class="interior-img-large reveal">
			<ImageTilt src={project.images.interior} alt="{project.title} — interior" aspectRatio="3/2" intensity={7} />
		</div>
		{#if project.images.interior2}
			<div class="interior-img-small reveal reveal-delay-1">
				<ImageTilt src={project.images.interior2} alt="{project.title} — detaliu interior" aspectRatio="1/1" intensity={9} />
				<div class="interior-caption">
					<span class="label">detaliu interior</span>
					<p>Tratamentul spațiului interior reflectă principiile arhitecturii organice: materiale naturale, lumină zenitală și continuitate spațială.</p>
				</div>
			</div>
		{/if}
	</div>
</section>

<!-- ── WRIGHT WITH PROJECT ───────────────────────────────────────────── -->
{#if project.images.withWright}
	<section class="proj-with-wright">
		<div class="with-wright-inner">
			<div class="with-wright-image reveal">
				<ImageTilt src={project.images.withWright} alt="Frank Lloyd Wright și {project.title}" aspectRatio="4/3" intensity={6} />
			</div>
			<div class="with-wright-text reveal reveal-delay-1">
				<span class="label">arhitectul și lucrarea sa</span>
				<h3>wright și {project.title}</h3>
				<p>
					Fiecare proiect al lui Wright era o extensie directă a personalității sale —
					o viziune materializată cu o persistență care depășea deseori răbdarea clienților,
					a constructorilor și a criticilor. {project.title.charAt(0).toUpperCase() + project.title.slice(1)} nu face excepție.
				</p>
				<p>
					„Nu am proiectat niciodată o clădire pe care să nu aș fi putut-o trăi sau lucra în ea cu plăcere."
					<cite>— Frank Lloyd Wright</cite>
				</p>
			</div>
		</div>
	</section>
{/if}

<!-- ── PROJECT NAVIGATION ────────────────────────────────────────────── -->
<nav class="proj-nav" aria-label="Navigare proiecte">
	{#if prev}
		<a href="/proiecte/{prev.slug}" class="proj-nav-item proj-nav-prev">
			<span class="label">proiect anterior</span>
			<div class="proj-nav-content">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M13 4l-6 6 6 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<div>
					<span class="proj-nav-year">{prev.year}</span>
					<h4>{prev.title}</h4>
				</div>
			</div>
		</a>
	{:else}
		<div></div>
	{/if}

	{#if next}
		<a href="/proiecte/{next.slug}" class="proj-nav-item proj-nav-next">
			<span class="label">proiect următor</span>
			<div class="proj-nav-content">
				<div>
					<span class="proj-nav-year">{next.year}</span>
					<h4>{next.title}</h4>
				</div>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</a>
	{:else}
		<div></div>
	{/if}
</nav>

<style>
	/* ── HERO ──────────────────────────────────────────────────────── */
	.proj-hero {
		position: relative;
		height: 100vh;
		min-height: 600px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0 var(--pad-x) 80px;
		overflow: hidden;
		color: var(--dark-text);
	}

	.proj-hero-bg {
		position: absolute;
		inset: 0;
	}

	.proj-hero-bg img {
		object-position: center 35%;
	}

	.proj-hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(12,11,9,0.9) 0%,
			rgba(12,11,9,0.3) 55%,
			rgba(12,11,9,0.15) 100%
		);
	}

	.proj-breadcrumb {
		position: absolute;
		top: calc(var(--nav-height) + 32px);
		left: var(--pad-x);
		z-index: 2;
		display: flex;
		align-items: center;
		gap: 12px;
		font-family: var(--font-display);
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 0.1em;
		color: rgba(245,242,237,0.45);
	}

	.proj-breadcrumb a:hover { color: rgba(245,242,237,0.85); opacity: 1; }

	.proj-hero-content {
		position: relative;
		z-index: 2;
	}

	.proj-hero-meta {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 20px;
	}

	.meta-dot { color: rgba(245,242,237,0.25); }

	.proj-title {
		font-size: clamp(48px, 7.5vw, 112px);
		font-weight: 300;
		letter-spacing: -0.03em;
		line-height: 0.95;
		display: flex;
		flex-wrap: wrap;
		gap: 0.2em;
	}

	.proj-word {
		display: inline-block;
		opacity: 0;
		transform: translateY(50px);
		transition:
			opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1) var(--d),
			transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) var(--d);
	}

	.proj-hero.visible .proj-word {
		opacity: 1;
		transform: translateY(0);
	}

	.proj-hero-style {
		margin-top: 16px;
		font-family: var(--font-display);
		font-size: 14px;
		letter-spacing: 0.08em;
		color: var(--gold-light);
		opacity: 0;
		transform: translateY(12px);
		transition: opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s;
	}

	.proj-hero.visible .proj-hero-style {
		opacity: 1;
		transform: translateY(0);
	}

	.proj-hero-geo {
		position: absolute;
		right: var(--pad-x);
		bottom: 80px;
		z-index: 1;
		width: clamp(100px, 18vw, 200px);
		opacity: 0.5;
		pointer-events: none;
	}

	/* ── OVERVIEW ──────────────────────────────────────────────────── */
	.proj-overview {
		padding: var(--pad-section) var(--pad-x);
	}

	.proj-overview-inner {
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: 80px;
		max-width: var(--max-w);
	}

	.proj-meta-table {
		display: flex;
		flex-direction: column;
		gap: 28px;
		padding-top: 4px;
	}

	.meta-cell .label {
		display: block;
		margin-bottom: 6px;
	}

	.meta-cell strong {
		font-family: var(--font-display);
		font-size: 15px;
		font-weight: 300;
		color: var(--ink-secondary);
	}

	.proj-intro {
		font-family: var(--font-display);
		font-size: clamp(20px, 2vw, 26px);
		font-weight: 300;
		line-height: 1.5;
		color: var(--ink-secondary);
		margin-bottom: 36px;
		padding-bottom: 36px;
		border-bottom: 1px solid var(--border);
	}

	.proj-description p {
		font-size: 17px;
		line-height: 1.85;
		color: var(--muted);
		margin-bottom: 20px;
		max-width: 720px;
	}

	/* ── GALLERY ───────────────────────────────────────────────────── */
	.proj-gallery,
	.proj-interior {
		padding: 0 var(--pad-x) var(--pad-section);
	}

	.proj-gallery-header {
		display: flex;
		align-items: center;
		gap: 24px;
		margin-bottom: 40px;
	}

	.gallery-line {
		flex: 1;
		height: 1px;
		background: var(--border);
	}

	.proj-gallery-exterior {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}

	.gallery-main {
		grid-column: 1 / -1;
	}

.proj-gallery-interior {
		display: grid;
		grid-template-columns: 3fr 2fr;
		gap: 24px;
		align-items: start;
	}

	.interior-caption {
		padding: 24px 0;
	}

	.interior-caption .label {
		display: block;
		margin-bottom: 12px;
	}

	.interior-caption p {
		font-size: 14px;
		color: var(--muted);
		line-height: 1.75;
	}

	/* ── WRIGHT WITH PROJECT ────────────────────────────────────────── */
	.proj-with-wright {
		background-color: var(--bg-alt);
		padding: var(--pad-section) var(--pad-x);
	}

	.with-wright-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 80px;
		align-items: center;
		max-width: var(--max-w);
	}

	.with-wright-text .label {
		display: block;
		margin-bottom: 20px;
	}

	.with-wright-text h3 {
		font-size: clamp(28px, 3vw, 40px);
		margin-bottom: 24px;
	}

	.with-wright-text p {
		font-size: 16px;
		color: var(--muted);
		line-height: 1.8;
		margin-bottom: 16px;
	}

	.with-wright-text cite {
		display: block;
		margin-top: 20px;
		font-family: var(--font-display);
		font-size: 12px;
		letter-spacing: 0.1em;
		color: var(--gold);
		font-style: normal;
	}

	/* ── PROJECT NAV ───────────────────────────────────────────────── */
	.proj-nav {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.proj-nav-item {
		position: relative;
		padding: 56px var(--pad-x);
		border-top: 1px solid var(--border);
		display: block;
		overflow: hidden;
	}

	/* Gold line that draws in from the left on hover */
	.proj-nav-item::before {
		content: '';
		position: absolute;
		top: -1px;
		left: 0;
		height: 1px;
		width: 0;
		background-color: var(--gold);
		transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.proj-nav-item:hover::before { width: 100%; }

	.proj-nav-prev { border-right: 1px solid var(--border); }

	.proj-nav-item .label {
		display: block;
		margin-bottom: 16px;
	}

	.proj-nav-content {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.proj-nav-next .proj-nav-content {
		justify-content: flex-end;
	}

	.proj-nav-year {
		display: block;
		font-family: var(--font-display);
		font-size: 11px;
		letter-spacing: 0.12em;
		color: var(--gold);
		margin-bottom: 6px;
	}

	.proj-nav-content h4 {
		font-size: clamp(18px, 2vw, 26px);
		transition: color 0.3s ease;
	}

	.proj-nav-item:hover h4 { color: var(--gold); }

	/* Arrow nudges outward on hover */
	.proj-nav-content svg {
		transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
		flex-shrink: 0;
	}

	.proj-nav-prev:hover .proj-nav-content svg { transform: translateX(-4px); }
	.proj-nav-next:hover .proj-nav-content svg { transform: translateX(4px); }

	.proj-nav-thumb { display: none; }

	@media (max-width: 900px) {
		.proj-overview-inner { grid-template-columns: 1fr; gap: 48px; }
		.proj-gallery-exterior { grid-template-columns: 1fr; }
		.gallery-main { grid-column: 1; }
		.proj-gallery-interior { grid-template-columns: 1fr; }
		.with-wright-inner { grid-template-columns: 1fr; gap: 40px; }
		.proj-nav { grid-template-columns: 1fr; }
		.proj-nav-prev { border-right: none; border-bottom: 1px solid var(--border); }
	}
</style>
