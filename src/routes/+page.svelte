<script lang="ts">
	import { onMount } from 'svelte';
	import ImageTilt from '$lib/components/ImageTilt.svelte';
	import { projects } from '$lib/data/projects';

	let heroVisible = $state(false);

	const featured = projects.slice(0, 3);

const images ={
	frank: 'https://cdn.shopify.com/s/files/1/1070/4650/files/1.jpeg?13958296702011856707',
	// frank: 'https://www.thoughtco.com/thmb/VixCcKiRQG4tULx-Aj-yvugVs2s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FLWright-pose1942-2785804-crop-590960b13df78c92832dd1fa.jpg',
	fallingwater: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Fallingwater3.jpg',
	guggenheim: 'https://www.guggenheim.org/wp-content/uploads/2016/04/architecture-srgm-exterior-flavin-16-9-ratio-web.jpg',
	taliesin: 'https://franklloydwright.org/wp-content/uploads/2025/07/blog-header.jpg'
}

	onMount(() => {
		setTimeout(() => (heroVisible = true), 120);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{ threshold: 0.12 }
		);

		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	});
</script>

<!-- ══ HERO ══════════════════════════════════════════════════════════════ -->
<section class="hero" class:visible={heroVisible}>
	<div class="hero-bg">
		<img src={images.frank} alt="Fallingwater" />
		<div class="hero-bg-overlay"></div>
	</div>

	<div class="hero-content">
		<div class="hero-top">
			<span class="label label--light hero-label">arhitectură organică · 1867–1959</span>
			<svg class="hero-line" viewBox="0 0 300 1" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<line x1="0" y1="0.5" x2="300" y2="0.5" stroke="rgba(245,242,237,0.3)" stroke-width="1" />
			</svg>
		</div>

		<div class="hero-title-wrap">
			<h1 class="hero-title">
				<span class="hero-word" style="--d: 0ms">frank</span>
				<span class="hero-word" style="--d: 80ms">lloyd</span>
				<span class="hero-word" style="--d: 160ms">wright</span>
			</h1>
		</div>

		<div class="hero-sub">
			<p class="hero-tagline">
				<span style="--d: 320ms">"natura este singurul corp de Dumnezeu pe care îl vom vedea vreodată."</span>
			</p>
		</div>

		<div class="hero-meta">
			<div class="hero-meta-item" style="--d: 480ms">
				<span class="label label--light">proiecte finalizate</span>
				<strong>532</strong>
			</div>
			<div class="hero-meta-item" style="--d: 560ms">
				<span class="label label--light">ani de activitate</span>
				<strong>70+</strong>
			</div>
			<div class="hero-meta-item" style="--d: 640ms">
				<span class="label label--light">stil definitoriu</span>
				<strong>organic</strong>
			</div>
		</div>
	</div>

	<!-- Geometric SVG decoration -->
	<div class="hero-geo" aria-hidden="true">
		<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect class="geo-shape" x="20" y="20" width="360" height="360" stroke="rgba(168,120,64,0.25)" stroke-width="1" />
			<rect class="geo-shape" x="60" y="60" width="280" height="280" stroke="rgba(168,120,64,0.15)" stroke-width="1" style="--geo-delay: 0.3s" />
			<line class="geo-shape" x1="20" y1="200" x2="380" y2="200" stroke="rgba(168,120,64,0.2)" stroke-width="1" style="--geo-delay: 0.6s" />
			<line class="geo-shape" x1="200" y1="20" x2="200" y2="380" stroke="rgba(168,120,64,0.2)" stroke-width="1" style="--geo-delay: 0.9s" />
			<circle class="geo-shape" cx="200" cy="200" r="120" stroke="rgba(168,120,64,0.1)" stroke-width="1" style="--geo-delay: 1.2s" />
		</svg>
	</div>

	<a href="/proiecte" class="hero-scroll">
		<span class="label label--light">explorează proiectele</span>
		<div class="scroll-arrow">
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
				<path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div>
	</a>
</section>

<!-- ══ INTRO ═══════════════════════════════════════════════════════════════ -->
<section class="intro">
	<div class="intro-inner">
		<div class="intro-number reveal">01</div>
		<div class="intro-text">
			<p class="reveal reveal-delay-1 intro-quote">
				„Nu construi casa în acel deal, construiește casa din acel deal — ea va face parte din deal,
				iar dealul va face parte din ea."
			</p>
			<p class="reveal reveal-delay-2 intro-body">
				Frank Lloyd Wright (1867–1959) a fost cel mai influent arhitect american al secolului al XX-lea.
				De-a lungul a peste șapte decenii de activitate, el a proiectat mai mult de o mie de structuri,
				dintre care 532 au fost finalizate — de la reședințe private modeste până la muzee iconice.
				Conceptul său de <em>Arhitectură Organică</em> a revoluționat relația dintre clădire, om și
				natură, influențând generații întregi de arhitecți din întreaga lume.
			</p>
			<a href="/despre" class="intro-link reveal reveal-delay-3">
				<span>citește mai mult despre wright</span>
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
					<path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- ══ FEATURED PROJECTS ════════════════════════════════════════════════ -->
<section class="featured">
	<div class="featured-header reveal">
		<span class="label">proiecte selectate</span>
		<h2>opere definitorii</h2>
	</div>

	<div class="featured-grid">
		{#each featured as project, i}
			<a href="/proiecte/{project.slug}" class="featured-card reveal reveal-delay-{i + 1}">
				<div class="featured-card-image">
					<ImageTilt src={project.images.hero} alt={project.title} aspectRatio="4/3" intensity={8} overlay />
					<div class="featured-card-num">{String(i + 1).padStart(2, '0')}</div>
				</div>
				<div class="featured-card-info">
					<div class="meta-row">
						<span class="label">{project.year}</span>
						<span class="label">{project.location}</span>
					</div>
					<h3>{project.title}</h3>
					<p>{project.intro}</p>
					<span class="card-link">
						descoperă
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</span>
				</div>
			</a>
		{/each}
	</div>

	<div class="featured-cta reveal">
		<a href="/proiecte" class="btn-outline">
			toate proiectele — {projects.length} lucrări
			<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
				<path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</a>
	</div>
</section>

<!-- ══ PHILOSOPHY BAND ═════════════════════════════════════════════════ -->
<section class="philosophy-band">
	<div class="philosophy-inner">
		<blockquote class="reveal">
			<p>„Arhitectura este muzica înghețată."</p>
			<cite>— Frank Lloyd Wright</cite>
		</blockquote>
	</div>
	<div class="philosophy-bg-image">
		<img src={images.taliesin} alt="Taliesin West" />
	</div>
</section>

<!-- ══ STYLES GRID ══════════════════════════════════════════════════════ -->
<section class="styles-section">
	<div class="styles-header reveal">
		<span class="label">vocabularul vizual</span>
		<h2>principii fundamentale</h2>
	</div>
	<div class="styles-grid">
		{#each [
			{ num: '01', title: 'orizontalitate', desc: 'Liniile prelungite orizontale reflectă câmpiile americane și ancorează clădirile în peisaj.' },
			{ num: '02', title: 'spațiu deschis', desc: 'Eliminarea pereților portanți interiori creează un flux liber al spațiului domestic.' },
			{ num: '03', title: 'lumina naturală', desc: 'Skylighturi, ferestre în bandă și curți interioare aduc lumina ca material de construcție.' },
			{ num: '04', title: 'materiale locale', desc: 'Piatra, lemnul și cărămida provin întotdeauna din vecinătatea sitului de construcție.' }
		] as principle, i}
			<div class="principle reveal reveal-delay-{i + 1}">
				<span class="principle-num">{principle.num}</span>
				<h4>{principle.title}</h4>
				<p>{principle.desc}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	/* ── HERO ─────────────────────────────────────────────────────────── */
	.hero {
		position: relative;
		height: 100vh;
		min-height: 640px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0 var(--pad-x) 72px;
		overflow: hidden;
		color: var(--dark-text);
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		z-index: 0;
	}

	.hero-bg img {
		object-position: center 30%;
	}

	.hero-bg-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(12, 11, 9, 0.88) 0%,
			rgba(12, 11, 9, 0.4) 50%,
			rgba(12, 11, 9, 0.2) 100%
		);
	}

	.hero-content {
		position: relative;
		z-index: 2;
		max-width: var(--max-w);
	}

	.hero-top {
		display: flex;
		align-items: center;
		gap: 24px;
		margin-bottom: 32px;
		overflow: hidden;
	}

	.hero-label {
		white-space: nowrap;
		opacity: 0;
		transform: translateY(16px);
		transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
	}

	.hero.visible .hero-label {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-line {
		width: 100%;
		max-width: 240px;
		opacity: 0;
		transition: opacity 0.5s ease 0.3s;
	}

	.hero.visible .hero-line { opacity: 1; }

	.hero-title-wrap {
		overflow: hidden;
	}

	.hero-title {
		font-size: clamp(64px, 10vw, 148px);
		font-weight: 300;
		letter-spacing: -0.035em;
		line-height: 0.95;
		display: flex;
		gap: 0.22em;
		flex-wrap: wrap;
	}

	.hero-word {
		display: inline-block;
		opacity: 0;
		transform: translateY(60px);
		transition:
			opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) var(--d),
			transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) var(--d);
	}

	.hero.visible .hero-word {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-sub {
		margin-top: 32px;
		max-width: 560px;
		overflow: hidden;
	}

	.hero-tagline span {
		display: block;
		font-family: var(--font-body);
		font-size: clamp(14px, 1.5vw, 17px);
		font-weight: 300;
		font-style: italic;
		line-height: 1.6;
		color: rgba(245, 242, 237, 0.75);
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.7s ease var(--d),
			transform 0.7s ease var(--d);
	}

	.hero.visible .hero-tagline span {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-meta {
		display: flex;
		gap: 48px;
		margin-top: 48px;
	}

	.hero-meta-item {
		opacity: 0;
		transform: translateY(16px);
		transition:
			opacity 0.6s ease var(--d),
			transform 0.6s ease var(--d);
	}

	.hero.visible .hero-meta-item {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-meta-item strong {
		display: block;
		font-family: var(--font-display);
		font-size: 28px;
		font-weight: 300;
		color: var(--dark-text);
		margin-top: 4px;
	}

	/* Geometric SVG overlay */
	.hero-geo {
		position: absolute;
		right: var(--pad-x);
		top: 50%;
		transform: translateY(-50%);
		z-index: 1;
		width: clamp(200px, 30vw, 380px);
		opacity: 0.7;
		pointer-events: none;
	}

	.geo-shape {
		animation: geoFadeIn 1.2s ease forwards var(--geo-delay, 0s);
		opacity: 0;
	}

	@keyframes geoFadeIn {
		to { opacity: 1; }
	}

	.hero-scroll {
		position: absolute;
		bottom: 40px;
		right: var(--pad-x);
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		color: rgba(245, 242, 237, 0.5);
		opacity: 0;
		animation: fadeIn 0.7s ease 1.2s forwards;
		transition: color 0.25s ease;
	}

	.hero-scroll:hover { opacity: 1 !important; color: var(--dark-text); }

	.scroll-arrow {
		animation: bounce 2s ease infinite;
	}

	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(6px); }
	}

	@keyframes fadeIn {
		to { opacity: 1; }
	}

	/* ── INTRO ──────────────────────────────────────────────────────── */
	.intro {
		padding: var(--pad-section) var(--pad-x);
	}

	.intro-inner {
		max-width: var(--max-w);
		display: grid;
		grid-template-columns: 120px 1fr;
		gap: 64px;
		align-items: start;
	}

	.intro-number {
		font-family: var(--font-display);
		font-size: clamp(80px, 10vw, 128px);
		font-weight: 300;
		color: var(--border);
		line-height: 1;
		letter-spacing: -0.05em;
	}

	.intro-quote {
		font-family: var(--font-display);
		font-size: clamp(22px, 2.4vw, 30px);
		font-weight: 300;
		font-style: italic;
		color: var(--ink-secondary);
		line-height: 1.45;
		margin-bottom: 32px;
	}

	.intro-body {
		font-size: 17px;
		line-height: 1.8;
		color: var(--ink-secondary);
		max-width: 700px;
		margin-bottom: 36px;
	}

	.intro-link {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-family: var(--font-display);
		font-size: 13px;
		font-weight: 400;
		letter-spacing: 0.08em;
		color: var(--gold);
		border-bottom: 1px solid var(--gold);
		padding-bottom: 4px;
		transition: gap 0.25s ease, opacity 0.25s ease;
	}

	.intro-link:hover {
		gap: 16px;
		opacity: 1;
	}

	/* ── FEATURED PROJECTS ──────────────────────────────────────────── */
	.featured {
		padding: 0 var(--pad-x) var(--pad-section);
	}

	.featured-header {
		display: flex;
		align-items: baseline;
		gap: 24px;
		margin-bottom: 64px;
		padding-top: 64px;
		border-top: 1px solid var(--border);
	}

	.featured-header h2 {
		font-size: clamp(36px, 4.5vw, 56px);
	}

	.featured-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 40px;
	}

	.featured-card {
		display: block;
		cursor: pointer;
	}

	.featured-card-image {
		position: relative;
		overflow: hidden;
		margin-bottom: 28px;
	}

	.featured-card-num {
		position: absolute;
		top: 20px;
		left: 20px;
		font-family: var(--font-display);
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.15em;
		color: rgba(245, 242, 237, 0.6);
		z-index: 2;
		pointer-events: none;
	}

	.featured-card-info .meta-row {
		display: flex;
		gap: 20px;
		margin-bottom: 12px;
	}

	.featured-card-info h3 {
		font-size: clamp(22px, 2vw, 28px);
		margin-bottom: 14px;
		transition: color 0.25s ease;
	}

	.featured-card:hover h3 { color: var(--gold); }

	.featured-card-info p {
		font-size: 15px;
		line-height: 1.7;
		color: var(--muted);
		margin-bottom: 20px;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card-link {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-family: var(--font-display);
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 0.1em;
		color: var(--gold);
		transition: gap 0.25s ease;
	}

	.featured-card:hover .card-link { gap: 14px; }

	.featured-cta {
		margin-top: 72px;
		display: flex;
		justify-content: center;
	}

	.btn-outline {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		font-family: var(--font-display);
		font-size: 13px;
		font-weight: 400;
		letter-spacing: 0.1em;
		color: var(--ink);
		border: 1px solid var(--border);
		padding: 16px 36px;
		transition: border-color 0.25s ease, color 0.25s ease, gap 0.25s ease;
	}

	.btn-outline:hover {
		border-color: var(--gold);
		color: var(--gold);
		gap: 18px;
		opacity: 1;
	}

	/* ── PHILOSOPHY BAND ──────────────────────────────────────────── */
	.philosophy-band {
		position: relative;
		height: 480px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.philosophy-bg-image {
		position: absolute;
		inset: 0;
	}

	.philosophy-bg-image img {
		object-position: center;
		filter: brightness(0.3) saturate(0.5);
	}

	.philosophy-inner {
		position: relative;
		z-index: 2;
		text-align: center;
		padding: 0 var(--pad-x);
	}

	.philosophy-inner blockquote p {
		font-family: var(--font-display);
		font-size: clamp(28px, 4vw, 56px);
		font-weight: 300;
		font-style: italic;
		color: var(--dark-text);
		letter-spacing: -0.02em;
		line-height: 1.2;
		margin-bottom: 20px;
	}

	.philosophy-inner cite {
		font-family: var(--font-display);
		font-size: 13px;
		letter-spacing: 0.15em;
		color: rgba(245, 242, 237, 0.45);
		font-style: normal;
	}

	/* ── STYLES / PRINCIPLES ──────────────────────────────────────── */
	.styles-section {
		padding: var(--pad-section) var(--pad-x);
		background-color: var(--bg-alt);
	}

	.styles-header {
		display: flex;
		align-items: baseline;
		gap: 24px;
		margin-bottom: 72px;
	}

	.styles-header h2 {
		font-size: clamp(32px, 3.5vw, 48px);
	}

	.styles-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0;
	}

	.principle {
		padding: 48px 48px 48px 0;
		border-right: 1px solid var(--border);
	}

	.principle:last-child {
		padding-right: 0;
		border-right: none;
	}

	.principle:not(:first-child) {
		padding-left: 48px;
	}

	.principle-num {
		display: block;
		font-family: var(--font-display);
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.18em;
		color: var(--gold);
		margin-bottom: 20px;
	}

	.principle h4 {
		font-size: 20px;
		margin-bottom: 16px;
	}

	.principle p {
		font-size: 15px;
		color: var(--muted);
		line-height: 1.75;
	}

	@media (max-width: 1024px) {
		.featured-grid { grid-template-columns: 1fr 1fr; }
		.styles-grid { grid-template-columns: 1fr 1fr; gap: 0; }
		.principle {
			border-right: none;
			border-bottom: 1px solid var(--border);
			padding: 36px 0;
		}
		.principle:last-child { border-bottom: none; }
		.principle:not(:first-child) { padding-left: 0; }
	}

	@media (max-width: 768px) {
		.intro-inner { grid-template-columns: 1fr; gap: 32px; }
		.intro-number { font-size: 64px; }
		.featured-grid { grid-template-columns: 1fr; }
		.hero-meta { gap: 28px; flex-wrap: wrap; }
		.hero-geo { display: none; }
	}
</style>
