<script lang="ts">
	import { onMount } from 'svelte';
	import ImageTilt from '$lib/components/ImageTilt.svelte';
	import { projects } from '$lib/data/projects';

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

				<div class="project-images">
					<div class="project-img-main">
						<ImageTilt src={project.images.exterior} alt={`${project.title} — exterior`} aspectRatio="3/2" intensity={9} overlay />
					</div>
					<div class="project-img-secondary">
						<ImageTilt src={project.images.interior} alt={`${project.title} — interior`} aspectRatio="3/2" intensity={9} overlay />
						<div class="project-img-label">
							<span class="label">exterior</span>
							<span class="label">interior</span>
						</div>
					</div>
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
		transition: opacity 0.25s ease;
	}

	.project-row-link:hover { opacity: 1; }

	.project-row-num {
		padding-top: 8px;
	}

	/* Images */
	.project-images {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.project-img-main {
		flex: 1;
		overflow: hidden;
	}

	.project-img-secondary {
		position: relative;
	}

	.project-img-label {
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 12px 16px;
		pointer-events: none;
	}

	.project-img-label .label {
		color: rgba(245, 242, 237, 0.55);
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
