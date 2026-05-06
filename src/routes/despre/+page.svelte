<script lang="ts">
	import { onMount } from 'svelte';
	import ImageTilt from '$lib/components/ImageTilt.svelte';

	const timeline = [
		{ year: '1867', event: 'Se naște pe 8 iunie în Richland Center, Wisconsin.' },
		{
			year: '1887',
			event:
				'Se angajează în biroul lui Louis Sullivan din Chicago, de la care va prelua îndrumarea față de ornament organic.'
		},
		{
			year: '1893',
			event: 'Deschide propriul birou la Oak Park, Illinois. Începe să dezvolte stilul Prairie.'
		},
		{
			year: '1910',
			event:
				'Finalizează Casa Robie. Publică monografia Wasmuth Portfolio, care îl face cunoscut în Europa.'
		},
		{
			year: '1911',
			event:
				'Construiește Taliesin în Spring Green, Wisconsin — reședința sa principală de-a lungul vieții.'
		},
		{
			year: '1921',
			event: 'Finalizează Hollyhock House în Los Angeles — prima comandă californiană.'
		},
		{
			year: '1932',
			event: 'Fondează Taliesin Fellowship, școala sa de arhitectură prin experiență directă.'
		},
		{
			year: '1937',
			event: 'Construiește Fallingwater și Taliesin West — două capodopere în același an.'
		},
		{
			year: '1943',
			event: 'Primește comanda pentru Muzeul Guggenheim. Lucrează la proiect 16 ani.'
		},
		{
			year: '1959',
			event: 'Moare pe 9 aprilie la Phoenix, Arizona. Muzeul Guggenheim se deschide în octombrie.'
		}
	];
	const images = {
		portrait: 'https://media.architecturaldigest.com/photos/62ed45aac086844f28d1a02f/16:9/w_2560%2Cc_limit/GettyImages-517725864.jpg',
		broadacre: 'https://franklloydwright.org/wp-content/uploads/2018/09/Figure1_broadacre.jpg',
		guggenheim:
			'https://media.newyorker.com/photos/5b733c3f4545774bcd21b838/master/w_2560%2Cc_limit/591205_ra552.jpg',
		taliesinWest: 'https://franklloydwright.org/wp-content/uploads/2025/01/TW2023HIGH_Andrew-Pielage-45-tours-header1.jpg',
		taliesin:
			'https://franklloydwright.org/wp-content/uploads/2025/07/blog-header.jpg'
	};

	const quotes = [
		'Nu poți folosi niciun stil fără să cunoști stilul pe care îl folosești.',
		'Simplitatea și claritatea sunt principiile conducătoare ale arhitecturii organice.',
		'Spațiul interior este realitatea clădirii.',
		'Forma și funcția sunt una.'
	];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
			{ threshold: 0.1 }
		);
		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>despre frank lloyd wright</title>
</svelte:head>

<!-- ── HERO ──────────────────────────────────────────────────────────── -->
<section class="about-hero">
	<div class="about-hero-image">
		<img src={images.portrait} alt="Frank Lloyd Wright" />
		<div class="about-hero-overlay"></div>
	</div>
	<div class="about-hero-content">
		<span class="label label--light">1867 · richland center, wisconsin</span>
		<h1>frank lloyd<br />wright</h1>
		<p class="about-hero-desc">
			Arhitect, educator, scriitor. Unul dintre cei mai influenți artiști ai secolului al XX-lea.
		</p>
	</div>
	<div class="about-hero-dates">
		<span>8 iunie 1867</span>
		<div class="dates-line" aria-hidden="true"></div>
		<span>9 aprilie 1959</span>
	</div>
</section>

<!-- ── BIOGRAPHY ─────────────────────────────────────────────────────── -->
<section class="bio-section">
	<div class="bio-inner">
		<div class="bio-label reveal">
			<span class="label">biografie</span>
			<div class="bio-label-line"></div>
		</div>
		<div class="bio-text">
			<p class="bio-lead reveal">
				Frank Lloyd Wright s-a născut în 1867 în familia unui predicator metodist și a unei doamne
				de școală cu ambiții intelectuale ieșite din comun. Mama sa i-a plasat în camera de joacă
				imagini geometrice Fröbel — cuburi, triunghiuri, hexagoane — care i-au modelat percepția
				vizuală pentru tot restul vieții.
			</p>
			<p class="reveal reveal-delay-1">
				La douăzeci de ani, s-a alăturat biroului lui Louis Sullivan din Chicago, maestrul care l-a
				convins că arhitectura trebuie să exprime în formă ceea ce exprimă în conținut — că
				ornamentul și structura nu pot fi despărțite. Wright îl va numi întotdeauna „Lieber Meister"
				— scumpul maestru — chiar și după ce au încetat să colaboreze.
			</p>
			<p class="reveal reveal-delay-2">
				Din biroul său din Oak Park, Illinois, Wright a lansat revoluția stilului Prairie: case cu
				linii orizontale prelungite, streșini adânci, plan deschis și un șemineu central ca inimă a
				locuinței. Aceste case reflectau orizontul câmpiei americane și o nouă filozofie a vieții
				domestice, în care spațiile curg unele în altele fără pereți rigizi de separare.
			</p>
			<p class="reveal reveal-delay-3">
				Dar Wright nu a rămas niciodată prizonierul unui stil. De-a lungul deceniilor, el a explorat
				betonul turnat al Unității Temple, estetica mayanică a Hollyhock House, brutalismul organic
				al Taliesin West, simplitatea radicală a caselor Usonian și grandoarea spiralei Guggenheim.
				Fiecare proiect a fost un răspuns unic la un sit, un client și o epocă.
			</p>
			<p class="reveal reveal-delay-4">
				Wright a scris douăzeci de cărți și a ținut conferințe pe tot globul. A fondat Taliesin
				Fellowship în 1932, o comunitate de studenți care trăiau și lucrau alături de el, învățând
				arhitectura prin experiență directă. La nouăzeci și unu de ani, continua să proiecteze.
				Muzew Guggenheim s-a deschis șase luni după moartea sa.
			</p>
		</div>
	</div>
</section>

<!-- ── PORTRAIT WITH PROJECTS ───────────────────────────────────────── -->
<section class="portraits-section">
	<div class="portraits-header reveal">
		<span class="label">arhitectul și creațiile sale</span>
		<h2>wright în context</h2>
	</div>

	<div class="portraits-grid">
		<div class="portrait-item reveal">
			<ImageTilt
				src={images.broadacre}
				alt="Frank Lloyd Wright cu macheta Broadacre City"
				aspectRatio="4/3"
				intensity={7}
			/>
			<div class="portrait-caption">
				<span class="label">c. 1935</span>
				<p>
					Wright cu macheta Broadacre City — viziunea sa utopică asupra orașului american
					descentralizat
				</p>
			</div>
		</div>

		<div class="portrait-item reveal reveal-delay-1">
			<ImageTilt
				src={images.guggenheim}
				alt="Frank Lloyd Wright la Muzeul Guggenheim"
				aspectRatio="4/3"
				intensity={7}
			/>
			<div class="portrait-caption">
				<span class="label">c. 1956</span>
				<p>
					Wright la șantierul Muzeului Guggenheim din New York, cu câțiva ani înainte de finalizare
				</p>
			</div>
		</div>

		<div class="portrait-item reveal reveal-delay-2">
			<ImageTilt
				src={images.taliesinWest}
				alt="Frank Lloyd Wright la Taliesin West"
				aspectRatio="4/3"
				intensity={7}
			/>
			<div class="portrait-caption">
				<span class="label">Taliesin West, Arizona</span>
				<p>
					Wright în laboratorul său din deșert, unde petrecea lunile de iarnă cu studenții Fundației
				</p>
			</div>
		</div>

		<div class="portrait-item reveal reveal-delay-3">
			<ImageTilt
				src={images.taliesin}
				alt="Frank Lloyd Wright la Taliesin, Wisconsin"
				aspectRatio="4/3"
				intensity={7}
			/>
			<div class="portrait-caption">
				<span class="label">Taliesin, Wisconsin</span>
				<p>
					La reședința sa principală din Spring Green — construită și reconstruită de-a lungul a
					cinci decenii
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ── PHILOSOPHY ────────────────────────────────────────────────────── -->
<section class="philosophy-section">
	<div class="philosophy-header reveal">
		<span class="label">filozofie</span>
		<h2>arhitectura organică</h2>
	</div>
	<div class="philosophy-body">
		<p class="philosophy-lead reveal">
			La baza întregii opere a lui Wright se află un principiu simplu: <em
				>o clădire trebuie să crească din locul în care este construită, din nevoile celor care o
				folosesc și din materialele care o compun</em
			>. El a numit această viziune <strong>Arhitectură Organică</strong>.
		</p>
		<div class="philosophy-columns">
			<div class="phil-col reveal">
				<h4>natura ca model</h4>
				<p>
					Wright studia plante, copaci și formele geologice cu aceeași atenție cu care alți
					arhitecți studiau ordinele clasice. Colonada copacilor, geometria cristalelor, meandrele
					râurilor — toate au lăsat urme vizibile în vocabularul său formal.
				</p>
			</div>
			<div class="phil-col reveal reveal-delay-1">
				<h4>situl ca punct de plecare</h4>
				<p>
					Înainte de a pune creionul pe hârtie, Wright petrecea ore întregi pe terenul de
					construcție, observând lumina, vântul, topografia și vegetația. „Construiești nu pe sit,
					ci din sit" — nu o metaforă, ci o instrucție tehnică.
				</p>
			</div>
			<div class="phil-col reveal reveal-delay-2">
				<h4>materialele în adevărul lor</h4>
				<p>
					Betonul trebuie să arate ca beton, lemnul ca lemn, piatra ca piatră. Nicio placaj, nicio
					vopsea care să ascundă textura. Fiecare material are propria sa „natură" care trebuie
					respectată și exprimată, nu mascată.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ── QUOTES ─────────────────────────────────────────────────────────── -->
<section class="quotes-section">
	<div class="quotes-grid">
		{#each quotes as quote, i}
			<blockquote class="quote-item reveal reveal-delay-{i}" style="--i: {i}">
				<p>„{quote}"</p>
				<cite>— Frank Lloyd Wright</cite>
			</blockquote>
		{/each}
	</div>
</section>

<!-- ── TIMELINE ──────────────────────────────────────────────────────── -->
<section class="timeline-section">
	<div class="timeline-header reveal">
		<span class="label">cronologie</span>
		<h2>o viață în proiecte</h2>
	</div>
	<div class="timeline">
		{#each timeline as { year, event }, i}
			<div class="timeline-item reveal reveal-delay-{i % 4}">
				<div class="timeline-year">{year}</div>
				<div class="timeline-connector" aria-hidden="true">
					<div class="timeline-dot"></div>
					{#if i < timeline.length - 1}
						<div class="timeline-line"></div>
					{/if}
				</div>
				<p class="timeline-event">{event}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	/* ── ABOUT HERO ────────────────────────────────────────────────── */
	.about-hero {
		position: relative;
		height: 100vh;
		min-height: 600px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		overflow: hidden;
		color: var(--dark-text);
		padding: 0 var(--pad-x) 80px;
	}

	.about-hero-image {
		position: absolute;
		inset: 0;
	}

	.about-hero-image img {
		object-position: center 20%;
		filter: grayscale(20%);
	}

	.about-hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(12, 11, 9, 0.92) 0%,
			rgba(12, 11, 9, 0.35) 60%,
			transparent 100%
		);
	}

	.about-hero-content {
		position: relative;
		z-index: 2;
	}

	.about-hero-content .label--light {
		display: block;
		margin-bottom: 20px;
	}

	.about-hero-content h1 {
		font-size: clamp(56px, 9vw, 130px);
		line-height: 0.95;
		margin-bottom: 24px;
	}

	.about-hero-desc {
		font-size: 18px;
		color: rgba(245, 242, 237, 0.65);
		max-width: 440px;
		line-height: 1.7;
	}

	.about-hero-dates {
		position: absolute;
		right: var(--pad-x);
		bottom: 80px;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
	}

	.about-hero-dates span {
		font-family: var(--font-display);
		font-size: 12px;
		letter-spacing: 0.12em;
		color: rgba(245, 242, 237, 0.45);
		writing-mode: vertical-lr;
	}

	.dates-line {
		width: 1px;
		height: 80px;
		background: rgba(245, 242, 237, 0.2);
	}

	/* ── BIOGRAPHY ─────────────────────────────────────────────────── */
	.bio-section {
		padding: var(--pad-section) var(--pad-x);
	}

	.bio-inner {
		display: grid;
		grid-template-columns: 200px 1fr;
		gap: 80px;
		max-width: var(--max-w);
	}

	.bio-label {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 16px;
		padding-top: 6px;
	}

	.bio-label-line {
		width: 1px;
		height: 80px;
		background: var(--gold);
	}

	.bio-lead {
		font-family: var(--font-display);
		font-size: clamp(20px, 2vw, 26px);
		font-weight: 300;
		line-height: 1.5;
		color: var(--ink-secondary);
		margin-bottom: 32px;
	}

	.bio-text p:not(.bio-lead) {
		font-size: 17px;
		color: var(--muted);
		line-height: 1.85;
		margin-bottom: 24px;
		max-width: 720px;
	}

	/* ── PORTRAITS ─────────────────────────────────────────────────── */
	.portraits-section {
		padding: 0 var(--pad-x) var(--pad-section);
		background-color: var(--bg-alt);
	}

	.portraits-header {
		display: flex;
		align-items: baseline;
		gap: 24px;
		padding: var(--pad-section) 0 64px;
		border-bottom: none;
	}

	.portraits-header h2 {
		font-size: clamp(32px, 3.5vw, 48px);
	}

	.portraits-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 40px;
	}

	.portrait-caption {
		margin-top: 16px;
	}

	.portrait-caption .label {
		display: block;
		margin-bottom: 8px;
	}

	.portrait-caption p {
		font-size: 14px;
		color: var(--muted);
		line-height: 1.65;
	}

	/* ── PHILOSOPHY ────────────────────────────────────────────────── */
	.philosophy-section {
		padding: var(--pad-section) var(--pad-x);
	}

	.philosophy-header {
		display: flex;
		align-items: baseline;
		gap: 24px;
		margin-bottom: 64px;
	}

	.philosophy-header h2 {
		font-size: clamp(32px, 3.5vw, 48px);
	}

	.philosophy-lead {
		font-size: clamp(18px, 1.8vw, 22px);
		font-family: var(--font-display);
		line-height: 1.55;
		color: var(--ink-secondary);
		max-width: 780px;
		margin-bottom: 64px;
	}

	.philosophy-lead em {
		font-style: italic;
	}
	.philosophy-lead strong {
		font-weight: 400;
		color: var(--gold);
	}

	.philosophy-columns {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0;
	}

	.phil-col {
		padding: 0 48px 0 0;
		border-right: 1px solid var(--border);
	}

	.phil-col:last-child {
		padding-right: 0;
		border-right: none;
	}

	.phil-col:not(:first-child) {
		padding-left: 48px;
	}

	.phil-col h4 {
		font-size: 18px;
		margin-bottom: 16px;
	}

	.phil-col p {
		font-size: 15px;
		color: var(--muted);
		line-height: 1.8;
	}

	/* ── QUOTES ─────────────────────────────────────────────────────── */
	.quotes-section {
		background-color: var(--dark-bg);
		padding: var(--pad-section) var(--pad-x);
	}

	.quotes-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1px;
		background-color: rgba(245, 242, 237, 0.08);
	}

	.quote-item {
		padding: 56px 48px;
		background-color: var(--dark-bg);
	}

	.quote-item p {
		font-family: var(--font-display);
		font-size: clamp(18px, 1.8vw, 22px);
		font-weight: 300;
		font-style: italic;
		color: rgba(245, 242, 237, 0.85);
		line-height: 1.45;
		margin-bottom: 20px;
	}

	.quote-item cite {
		font-size: 12px;
		letter-spacing: 0.12em;
		color: rgba(245, 242, 237, 0.3);
		font-style: normal;
	}

	/* ── TIMELINE ──────────────────────────────────────────────────── */
	.timeline-section {
		padding: var(--pad-section) var(--pad-x);
	}

	.timeline-header {
		display: flex;
		align-items: baseline;
		gap: 24px;
		margin-bottom: 72px;
	}

	.timeline-header h2 {
		font-size: clamp(32px, 3.5vw, 48px);
	}

	.timeline {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0 80px;
	}

	.timeline-item {
		display: grid;
		grid-template-columns: 60px 28px 1fr;
		gap: 16px;
		padding-bottom: 40px;
	}

	.timeline-year {
		font-family: var(--font-display);
		font-size: 13px;
		font-weight: 500;
		color: var(--gold);
		letter-spacing: 0.06em;
		padding-top: 3px;
	}

	.timeline-connector {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
	}

	.timeline-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: var(--gold);
		flex-shrink: 0;
		margin-top: 4px;
	}

	.timeline-line {
		width: 1px;
		flex: 1;
		min-height: 32px;
		background-color: var(--border);
		margin-top: 6px;
	}

	.timeline-event {
		font-size: 15px;
		color: var(--muted);
		line-height: 1.7;
	}

	@media (max-width: 900px) {
		.bio-inner {
			grid-template-columns: 1fr;
			gap: 40px;
		}
		.portraits-grid {
			grid-template-columns: 1fr;
		}
		.philosophy-columns {
			grid-template-columns: 1fr;
			gap: 40px;
		}
		.phil-col {
			padding: 0 0 40px;
			border-right: none;
			border-bottom: 1px solid var(--border);
		}
		.phil-col:last-child {
			border-bottom: none;
			padding-bottom: 0;
		}
		.phil-col:not(:first-child) {
			padding-left: 0;
		}
		.quotes-grid {
			grid-template-columns: 1fr;
		}
		.timeline {
			grid-template-columns: 1fr;
			gap: 0;
		}
	}
</style>
