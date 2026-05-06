<script lang="ts">
	import { onMount } from 'svelte';
	import { projects } from '$lib/data/projects';

	let swapped = $state<Set<string>>(new Set());

	function toggle(slug: string, e: MouseEvent) {
		e.preventDefault();
		e.stopPropagation();
		const next = new Set(swapped);
		if (next.has(slug)) next.delete(slug);
		else next.add(slug);
		swapped = next;
	}

	function tilt(node: HTMLElement, intensity = 9) {
		let raf: number;
		let cx = 0, cy = 0, tx = 0, ty = 0;
		let active = false;

		function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

		function frame() {
			cx = lerp(cx, tx, 0.07);
			cy = lerp(cy, ty, 0.07);
			node.style.transform = `perspective(900px) rotateY(${cx}deg) rotateX(${-cy}deg)`;
			if (Math.abs(tx - cx) > 0.005 || Math.abs(ty - cy) > 0.005 || active) {
				raf = requestAnimationFrame(frame);
			} else {
				node.style.transform = '';
			}
		}

		function onMove(e: MouseEvent) {
			const r = node.getBoundingClientRect();
			tx = ((e.clientX - r.left) / r.width - 0.5) * intensity;
			ty = ((e.clientY - r.top) / r.height - 0.5) * intensity;
			if (!active) { active = true; raf = requestAnimationFrame(frame); }
		}

		function onLeave() { tx = 0; ty = 0; active = false; }

		node.addEventListener('mousemove', onMove);
		node.addEventListener('mouseleave', onLeave);
		return { destroy() {
			node.removeEventListener('mousemove', onMove);
			node.removeEventListener('mouseleave', onLeave);
			cancelAnimationFrame(raf);
		}};
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
			{ threshold: 0.08 }
		);
		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>proiecte — frank lloyd wright</title>
</svelte:head>

<!-- ── PAGE HEADER ───────────────────────────────────────────────────── -->
<header class="page-header">
	<div class="page-header-inner">
		<span class="label">lucrări arhitecturale</span>
		<h1>proiecte</h1>
		<p class="page-header-sub">
			O selecție din cele mai reprezentative lucrări ale lui Frank Lloyd Wright,
			de la prairie houses din Midwest până la iconicul Muzeu Guggenheim.
		</p>
	</div>
	<div class="page-header-meta">
		<div>
			<span class="label">total proiecte</span>
			<strong>{projects.length}</strong>
		</div>
		<div>
			<span class="label">perioadă</span>
			<strong>1908 — 1959</strong>
		</div>
		<div>
			<span class="label">locații</span>
			<strong>SUA</strong>
		</div>
	</div>
</header>

<div class="divider"></div>

<!-- ── PROJECTS LIST ─────────────────────────────────────────────────── -->
<section class="projects-list">
	{#each projects as project, i}
		<article class="project-row reveal" id={project.slug}>
			<a href="/proiecte/{project.slug}" class="project-row-link">
				<div class="project-row-num">
					<span class="label">{String(i + 1).padStart(2, '0')}</span>
				</div>

				<div class="project-images" use:tilt>
					<!-- exterior layer -->
					<div class="img-layer" class:active={!swapped.has(project.slug)}>
						<img src={project.images.exterior} alt="{project.title} — exterior" loading="lazy" />
						<div class="img-overlay"></div>
					</div>
					<!-- interior layer -->
					<div class="img-layer" class:active={swapped.has(project.slug)}>
						<img src={project.images.interior} alt="{project.title} — interior" loading="lazy" />
						<div class="img-overlay"></div>
					</div>
					<!-- thumbnail toggle -->
					<button
						class="img-thumb"
						onclick={(e) => toggle(project.slug, e)}
						aria-label="comută între exterior și interior"
					>
						<img
							src={swapped.has(project.slug) ? project.images.exterior : project.images.interior}
							alt="preview"
						/>
						<span class="img-thumb-label label">
							{swapped.has(project.slug) ? 'exterior' : 'interior'}
						</span>
					</button>
					<!-- active view label -->
					<span class="img-active-label label">
						{swapped.has(project.slug) ? 'interior' : 'exterior'}
					</span>
				</div>

				<div class="project-info">
					<div class="project-meta">
						<span class="label">{project.year}</span>
						<span class="meta-sep" aria-hidden="true">·</span>
						<span class="label">{project.location}</span>
					</div>
					<h2 class="project-title">{project.title}</h2>
					<p class="project-style">{project.style}</p>
					<p class="project-intro">{project.intro}</p>

					<div class="project-details">
						<div class="detail">
							<span class="label">client</span>
							<span>{project.client}</span>
						</div>
						<div class="detail">
							<span class="label">material</span>
							<span>{project.material}</span>
						</div>
					</div>

					<span class="project-cta">
						descoperă proiectul
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</span>
				</div>
			</a>
		</article>
		{#if i < projects.length - 1}
			<div class="divider project-divider"></div>
		{/if}
	{/each}
</section>

<style>
	/* ── PAGE HEADER ─────────────────────────────────────────────── */
	.page-header {
		padding: calc(var(--nav-height) + 80px) var(--pad-x) 80px;
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 64px;
		align-items: end;
		max-width: var(--max-w);
	}

	.page-header-inner .label {
		display: block;
		margin-bottom: 20px;
	}

	.page-header-inner h1 {
		font-size: clamp(56px, 9vw, 128px);
		margin-bottom: 24px;
	}

	.page-header-sub {
		font-size: 17px;
		color: var(--muted);
		max-width: 520px;
		line-height: 1.75;
	}

	.page-header-meta {
		display: flex;
		flex-direction: column;
		gap: 28px;
		align-items: flex-end;
	}

	.page-header-meta > div {
		text-align: right;
	}

	.page-header-meta .label {
		display: block;
		margin-bottom: 4px;
	}

	.page-header-meta strong {
		font-family: var(--font-display);
		font-size: 22px;
		font-weight: 300;
	}

	/* ── PROJECT LIST ────────────────────────────────────────────── */
	.projects-list {
		padding: 0 var(--pad-x) var(--pad-section);
	}

	.project-row {
		padding: 80px 0;
	}

	.project-divider {
		margin: 0;
	}

	.project-row-link {
		display: grid;
		grid-template-columns: 48px 1fr 1fr;
		gap: 56px;
		align-items: start;
	}

	.project-row-num {
		padding-top: 8px;
	}

	/* Images */
	.project-images {
		position: relative;
		aspect-ratio: 3 / 2;
		overflow: hidden;
		will-change: transform;
	}

	.img-layer {
		position: absolute;
		inset: 0;
		opacity: 0;
		transition: opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.img-layer.active {
		opacity: 1;
	}

	.img-layer img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.img-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%);
		pointer-events: none;
	}

	/* Thumbnail */
	.img-thumb {
		position: absolute;
		bottom: 14px;
		right: 14px;
		width: 28%;
		aspect-ratio: 3 / 2;
		overflow: hidden;
		border: 1px solid rgba(245, 242, 237, 0.28);
		cursor: pointer;
		background: none;
		padding: 0;
		z-index: 10;
		transition: transform 0.25s ease, border-color 0.25s ease;
	}

	.img-thumb:hover {
		transform: scale(1.05);
		border-color: rgba(168, 120, 64, 0.7);
	}

	.img-thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.img-thumb-label {
		position: absolute;
		bottom: 6px;
		left: 8px;
		color: rgba(245, 242, 237, 0.7);
		font-size: 9px;
		pointer-events: none;
	}

	.img-active-label {
		position: absolute;
		bottom: 14px;
		left: 16px;
		color: rgba(245, 242, 237, 0.5);
		pointer-events: none;
		z-index: 2;
	}

	/* Info */
	.project-info {
		padding-top: 4px;
	}

	.project-meta {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 20px;
	}

	.meta-sep {
		color: var(--border);
	}

	.project-title {
		font-size: clamp(28px, 3.2vw, 44px);
		margin-bottom: 10px;
		transition: color 0.25s ease;
	}

	.project-row-link:hover .project-title { color: var(--gold); }

	.project-style {
		font-family: var(--font-display);
		font-size: 13px;
		font-weight: 400;
		letter-spacing: 0.06em;
		color: var(--gold);
		margin-bottom: 24px;
	}

	.project-intro {
		font-size: 16px;
		line-height: 1.8;
		color: var(--muted);
		margin-bottom: 32px;
	}

	.project-details {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-bottom: 36px;
		padding: 24px 0;
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}

	.detail {
		display: grid;
		grid-template-columns: 80px 1fr;
		gap: 16px;
		font-size: 14px;
	}

	.detail span:last-child {
		color: var(--ink-secondary);
	}

	.project-cta {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-family: var(--font-display);
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 0.1em;
		color: var(--gold);
		border-bottom: 1px solid var(--gold);
		padding-bottom: 3px;
		transition: gap 0.25s ease;
	}

	.project-row-link:hover .project-cta { gap: 14px; }

	@media (max-width: 1100px) {
		.project-row-link {
			grid-template-columns: 1fr 1fr;
		}
		.project-row-num { display: none; }
	}

	@media (max-width: 768px) {
		.project-row-link {
			grid-template-columns: 1fr;
			gap: 32px;
		}
		.page-header {
			grid-template-columns: 1fr;
		}
		.page-header-meta {
			flex-direction: row;
			align-items: flex-start;
		}
		.page-header-meta > div { text-align: left; }
	}
</style>
