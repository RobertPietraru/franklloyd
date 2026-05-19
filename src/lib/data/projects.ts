const placeholder = '/placeholder.png';
export interface Project {
	slug: string;
	title: string;
	year: number;
	location: string;
	style: string;
	client: string;
	material: string;
	intro: string;
	description: string;
	images: {
		hero: string;
		exterior: string;
		exterior2?: string;
		interior: string;
		interior2?: string;
		withWright?: string;
	};
}


export const projects: Project[] = [
	{
		slug: 'fallingwater',
		title: 'fallingwater',
		year: 1935,
		location: 'Mill Run, Pennsylvania',
		style: 'arhitectură organică',
		client: 'Edgar J. Kaufmann Sr.',
		material: 'beton armat, oțel, piatră locală',
		intro:
			'Poate cea mai celebră casă din lume, Fallingwater întruchipează esența arhitecturii organice — o clădire care nu cucerește natura, ci devine parte din ea.',
		description:
			'Construită direct deasupra unei cascade de nouă metri pe Bear Run, terasele cantileverizate din beton imită straturile naturale de piatră ale sitului, creând iluzia că locuința a crescut organic din peisaj. Wright a proiectat planurile în trei ore, conform legendei, chiar înainte ca patronul Kaufmann să sosească din Pittsburgh pentru a le vizualiza. Structura utilizeaza tehnici de inginerie radicale pentru epoca sa: terase suspendate fără stâlpi de sprijin vizibili, care par să plutească deasupra apei. La interior, podeaua de piatră nelustruită coboară direct spre stânca naturală, iar ferestrele cu ramă de metal subțire elimină granița dintre interior și pădurea înconjurătoare.',
		images: {
			hero: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Fallingwater3.jpg',
			exterior: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/laurel/2022-10-9-Fallingwater-006_355F2BC4-0DBA-A106-B4D721F2F4A86A82-355f0836b845446_35603ee9-aa38-bb40-50a65312f975f444.jpg',
			exterior2: 'https://pabucketlist.com/wp-content/uploads/2021/04/Fallingwater-Springtime-Fayette-County-PA-public-domain-image.jpg',
			interior: 'https://images.adsttc.com/media/images/5037/ddec/28ba/0d59/9b00/0093/newsletter/stringio.jpg?1414033832',
			interior2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlGFF4162955IXn-z8QI5dR8gu62B48Bx2w&s',
			withWright: undefined,
		}
	},
	{
		slug: 'guggenheim',
		title: 'muzeul solomon r. guggenheim',
		year: 1959,
		location: 'New York City, New York',
		style: 'modernism organic',
		client: 'Solomon R. Guggenheim Foundation',
		material: 'beton armat turnat, sticlă',
		intro:
			'Ultima capodoperă a lui Wright a redefinit experiența vizitei la muzeu ca un flux continuu, inundând spațiul interior în lumina naturală a unui dom central monumental.',
		description:
			'Forma de „zigurat inversat" și rampa spiralată interioară permit vizitatorilor să urce cu liftul până la etajul cel mai înalt și să coboare lin, contemplând arta într-o mișcare fluidă și nefragmentată. Wright a lucrat la proiect timp de șaisprezece ani, depunând șase versiuni înainte ca construcția să înceapă în 1956. Curentul central de lumină care coboară prin ochiul domului de sticlă creează o atmosferă aproape sacră, transformând clădirea în ea însăși într-o operă de artă. Forma cilindrică în extravagantă contradicție cu cartierul rezidențial de pe Fifth Avenue a stârnit atât admirație, cât și controversă în rândul criticilor de artă ai vremii.',
		images: {
			hero: '/buildings/guggenheim/hero.jpg',
			exterior: '/buildings/guggenheim/exterior_1.jpg',
			exterior2: '/buildings/guggenheim/exterior_2.jpg',
			interior: '/buildings/guggenheim/interior_1.jpg',
			interior2: '/buildings/guggenheim/interior_2.jpg',

			withWright: undefined,
		}
	},
	{
		slug: 'taliesin-west',
		title: 'taliesin west',
		year: 1937,
		location: 'Scottsdale, Arizona',
		style: 'dezert masonry / organică',
		client: 'Frank Lloyd Wright (uz personal)',
		material: 'rocă vulcanică locală, nisip de deșert, lemn de redwood',
		intro:
			'Reședința de iarnă și laboratorul creativ al lui Wright, construit cu mâinile propriilor studenți din materialele brute găsite la fața locului în Deșertul Sonoran.',
		description:
			'Taliesin West este mai mult decât o clădire — este o filozofie materializată în piatră și soare. Wright a descoperit terenul în 1937 și a început imediat construcția cu studenții Fundației Taliesin, folosind roca vulcanică neagră și nisipul roșiatic ale deșertului. Profilul jos al complexului, unghiurile inclinate și textura aspră a zidărie permit structurii să crească din sol ca o formaţiune geologică naturală. Pânzele de canvas alb ce filtrau lumina soarelui arizonan — ulterior înlocuite cu fibre de sticlă translucide — umplu spațiile de lucru cu o lumină difuză, caldă, aproape misterioasă. Astăzi, Taliesin West rămâne sediul Fundației Frank Lloyd Wright și al Școlii de Arhitectură Taliesin.',
		images: {
			hero: '/buildings/taliesinwest/hero.jpg',
			exterior: '/buildings/taliesinwest/exterior_1.jpg',
			exterior2: '/buildings/taliesinwest/exterior_2.jpg',
			interior: '/buildings/taliesinwest/interior_1.jpg',
			interior2: '/buildings/taliesinwest/interior_2.png',
			withWright: undefined
		}
	},
	{
		slug: 'robie-house',
		title: 'casa frederick c. robie',
		year: 1910,
		location: 'Chicago, Illinois',
		style: 'stil prairie',
		client: 'Frederick C. Robie',
		material: 'cărămidă romană, beton, sticlă artizanală',
		intro:
			'Exemplul definitiv al stilului Prairie, Casa Robie a inaugurat conceptul de plan deschis și a schimbat pentru totdeauna modul în care gândim spațiul domestic.',
		description:
			'Liniile orizontale prelungite, streşinile adânci și cărămida romană îngustă reflectă orizontul plat al câmpiei Midwest-ului american. Wright a descompus casa tradițională victoriană — o sumă de cutii închise — într-un flux continuu de spații care se deschid unele spre altele în jurul unui șemineu central masiv de cărămidă. Ferestrele în bandă cu sticlă artizanală în culori de chihlimbar și verde filtrează lumina naturală fără a oferi priviri directe în interior, asigurând intimitate fără închidere. Gardul de cărămidă integrat în arhitectura casei — o premieră — a generat conceptul de carport și a influențat proiectarea suburbanistică americană pentru decenii.',
		images: {
			hero: '/buildings/robiehouse/hero.jpg',
			exterior: '/buildings/robiehouse/exterior_1.jpg',
			exterior2: '/buildings/robiehouse/exterior_2.jpg',
			interior: '/buildings/robiehouse/interior_1.webp',
			interior2: '/buildings/robiehouse/interior_2.png',
		}
	},
	{
		slug: 'unity-temple',
		title: 'unity temple',
		year: 1908,
		location: 'Oak Park, Illinois',
		style: 'modernism timpuriu',
		client: 'Unity Church',
		material: 'beton armat, sticlă colorată de chihlimbar',
		intro:
			'Un moment de referință în arhitectura mondială: prima clădire publică în care betonul armat devine nu o necesitate structurală, ci o alegere estetică deliberată.',
		description:
			'Construit cu un buget modest de 45.000 de dolari, Unity Temple demonstrează că simplitatea și spiritualitatea pot fi exprimate cu mijloace materiale modeste, atâta timp cât geometria și lumina sunt orchestrate cu geniu. Exteriorul masiv, aproape fortăreț, pregătește intrarea dramatiică într-un interior inundat de o lumină „zenitală" caldă care coboară prin patruzeci și patru de luminatoare din sticlă de chihlimbar. Wright a creat două volume distincte unite printr-un foyer comun: sala de serviciu religios cu capacitate de patru sute de persoane și casa unității pentru activitățile sociale. Tratamentul ornamental al betonului — texturat cu bord de lemn pentru a rupe monotonia — transformă un material industrial în ceva aproape nobil.',
		images: {
			hero: '/buildings/unitytemple/hero.png',
			exterior: '/buildings/unitytemple/exterior_1.png',
			exterior2: '/buildings/unitytemple/exterior_2.png',
			interior: '/buildings/unitytemple/interior_1.png',
			interior2: '/buildings/unitytemple/interior_2.png',
		}
	},
	{
		slug: 'hollyhock-house',
		title: 'hollyhock house',
		year: 1921,
		location: 'Los Angeles, California',
		style: 'revival mayan / romanza californiană',
		client: 'Aline Barnsdall',
		material: 'beton turnat, lemn, tencuială',
		intro:
			'Prima comandă din Los Angeles a lui Wright combină estetica templu-mayan cu viziunea unei trăiri californiene în aer liber, creând un spațiu care estompează granița dintre interior și grădină.',
		description:
			'Proiectată pentru moștenitoarea petrolieră și mecenă teatrală Aline Barnsdall pe dealul Olive Hill, casa utilizează betonul turnat decorat cu motive abstracte ale florii de nalbă — floarea preferată a clientei. Motivul floral apare în frizele exterioare, pervazele ferestrelor, mobila integrată și chiar în structura șemineelor, creând un limbaj decorativ coerent și unic. Planul deschis al casei, cu galeria interioară ce oferă vederi spre curtea centrală cu bazin reflectorizant, prefigurează stilul de viață californian modern. Wright a numit proiectul o „Romanza californiană" — o romanță cu climatul, vegetația și libertatea spațiuluii de vest american.',
		images: {

			hero: '/buildings/hollyhock/hero.png',
			exterior: '/buildings/hollyhock/exterior_1.png',
			exterior2: '/buildings/hollyhock/exterior_2.png',
			interior: '/buildings/hollyhock/interior_1.png',
			interior2: '/buildings/hollyhock/interior_2.png',
		}
	},
	{
		slug: 'jacobs-house',
		title: 'casa herbert jacobs i',
		year: 1937,
		location: 'Madison, Wisconsin',
		style: 'usonian',
		client: 'Herbert și Katherine Jacobs',
		material: 'cărămidă, lemn de chiparos, beton',
		intro:
			'Prima dintre casele Usonian, un concept radical: locuință de calitate înaltă, la preț accesibil, pentru familia americană medie — și matricea modernei case suburbane.',
		description:
			'Herbert Jacobs, un jurnalist cu un buget de 5.500 de dolari, i-a scris lui Wright că doreste să construiască o casă adevărată, nu o cutie de chibrituri. Răspunsul lui Wright a generat unul dintre cele mai influente concepte din istoria arhitecturii rezidențiale. Casa Usonian elimina pivnița, podul și garderoba separată, înlocuindu-le cu un plan în formă de L, spații multifuncționale și mobilier integrat. Încălzirea prin pardoseală radiantă — o premieră americană — distribuia căldura uniform, fără radiatoare sau conducte vizibile. Carportul, înlocuitor economic al garajului tradițional, a apărut pentru prima dată în arhitectura americană în această casă. Principiile Usonian au influențat direct dezvoltarea suburbanistică americană de după al Doilea Război Mondial.',
		images: {
			hero: '/buildings/herbert/hero.png',
			exterior: '/buildings/herbert/exterior_1.png',
			exterior2: '/buildings/herbert/exterior_2.png',
			interior: '/buildings/herbert/interior_1.png',
			interior2: '/buildings/herbert/interior_2.png',
		}
	},
	{
		slug: 'taliesin',
		title: 'taliesin',
		year: 1911,
		location: 'Spring Green, Wisconsin',
		style: 'prairie / organică',
		client: 'Frank Lloyd Wright (uz personal)',
		material: 'piatră locală de calcar, lemn de stejar, tencuială ocru',
		intro:
			'Reședința principală și domeniul de viață al lui Wright, construit pe „sprânceana" unui deal din Wisconsin — nu pe vârf, ci aparținând dealului.',
		description:
			'Taliesin — cuvânt galez pentru „sprânceana strălucitoare" — a fost mai mult decât o casă. A fost un manifest arhitectural tridimensional: un loc unde Wright și-a trăit filozofia de-a lungul a aproape cincizeci de ani. Construit pe dealul de deasupra satelor sale natale, complexul cuprinde rezidența, atelierele, grajdurile și câmpurile agricole într-un ansamblu organic care a crescut și s-a transformat constant. Wright a reconstruit Taliesin de două ori după incendii devastatoare — în 1914 și 1925 — refuzând să abandoneze locul. Piatra de calcar galben-ocru extrasă local, lemnul de stejar și tencuiala colorată în tonurile pețisajului contribuie la sentimentul că edificiul a crescut din pâmântul însuși. Taliesin a fost și prima școală de arhitectură Wright, unde studenți din întreaga lume veneau să trăiască și să înveațe în același ritm cu maestrul.',
		images: {
			hero: '/buildings/taliesin/hero.png',
			exterior: '/buildings/taliesin/exterior_1.png',
			exterior2: '/buildings/taliesin/exterior_2.png',
			interior: '/buildings/taliesin/interior_1.png',
			interior2: '/buildings/taliesin/interior_2.png',
		}
	}
];

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
	const idx = projects.findIndex((p) => p.slug === slug);
	return {
		prev: idx > 0 ? projects[idx - 1] : null,
		next: idx < projects.length - 1 ? projects[idx + 1] : null
	};
}



