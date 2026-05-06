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
	let animating = false;
	let raf: number;

	let currentX = 0;
	let currentY = 0;
	let targetX = 0;
	let targetY = 0;

	function lerp(a: number, b: number, t: number) {
		return a + (b - a) * t;
	}

	function animate() {
		currentX = lerp(currentX, targetX, 0.08);
		currentY = lerp(currentY, targetY, 0.08);

		if (imageEl) {
			imageEl.style.transform = `perspective(900px) rotateY(${currentX}deg) rotateX(${-currentY}deg) scale(1.04)`;
		}

		const moving = Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01;
		if (moving || animating) {
			raf = requestAnimationFrame(animate);
		}
	}

	function onMouseMove(e: MouseEvent) {
		const rect = containerEl.getBoundingClientRect();
		const nx = (e.clientX - rect.left) / rect.width - 0.5;
		const ny = (e.clientY - rect.top) / rect.height - 0.5;
		targetX = nx * intensity;
		targetY = ny * intensity;

		if (!animating) {
			animating = true;
			raf = requestAnimationFrame(animate);
		}
	}

	function onMouseLeave() {
		targetX = 0;
		targetY = 0;
		animating = false;
	}

	onMount(() => {
		return () => {
			if (raf) cancelAnimationFrame(raf);
		};
	});
</script>

<div
	class="tilt-container"
	style="aspect-ratio: {aspectRatio}"
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
		cursor: none;
		will-change: transform;
	}

	.tilt-inner {
		position: absolute;
		inset: -4%;
		transition: transform 0.05s linear;
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
