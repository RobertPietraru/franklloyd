<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		src: string;
		alt: string;
		aspectRatio?: string;
		intensity?: number;
		overlay?: boolean;
	}

	let { src, alt, aspectRatio = '3/2', intensity = 10, overlay = false }: Props = $props();

	let containerEl: HTMLDivElement;
	let imageEl: HTMLDivElement;

	let raf: number;
	let running = false;
	let hovering = false;

	let cx = 0, cy = 0, tx = 0, ty = 0;

	function lerp(a: number, b: number, t: number) {
		return a + (b - a) * t;
	}

	function loop() {
		cx = lerp(cx, tx, 0.09);
		cy = lerp(cy, ty, 0.09);

		if (imageEl) {
			// When mouse has left and values have fully converged to zero, stop and clean up
			if (!hovering && Math.abs(cx) < 0.004 && Math.abs(cy) < 0.004) {
				cx = 0;
				cy = 0;
				imageEl.style.transform = '';
				running = false;
				return;
			}
			imageEl.style.transform = `perspective(900px) rotateY(${cx}deg) rotateX(${-cy}deg) scale(1.04)`;
		}

		raf = requestAnimationFrame(loop);
	}

	function startLoop() {
		if (!running) {
			running = true;
			raf = requestAnimationFrame(loop);
		}
	}

	function onMouseMove(e: MouseEvent) {
		const rect = containerEl.getBoundingClientRect();
		tx = ((e.clientX - rect.left) / rect.width - 0.5) * intensity;
		ty = ((e.clientY - rect.top) / rect.height - 0.5) * intensity;
		hovering = true;
		startLoop();
	}

	function onMouseLeave() {
		tx = 0;
		ty = 0;
		hovering = false;
		// Keep loop running so it can lerp back to zero and clean up
		startLoop();
	}

	onMount(() => {
		return () => {
			cancelAnimationFrame(raf);
			running = false;
		};
	});
</script>

<div
	class="tilt-container"
	style="aspect-ratio: {aspectRatio}"
	data-intensity={intensity}
	bind:this={containerEl}
	onmousemove={onMouseMove}
	onmouseleave={onMouseLeave}
	role="img"
	aria-label={alt}
>
	<div class="tilt-inner" bind:this={imageEl}>
		<img {src} {alt} loading="lazy" />
		{#if overlay}
			<div class="tilt-overlay"></div>
		{/if}
	</div>
</div>

<style>
	.tilt-container {
		position: relative;
		overflow: hidden;
		will-change: transform;
	}

	.tilt-inner {
		position: absolute;
		inset: -4%;
		will-change: transform;
	}

	.tilt-inner img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		pointer-events: none;
		user-select: none;
	}

	.tilt-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.45) 0%, transparent 55%);
		pointer-events: none;
	}
</style>
