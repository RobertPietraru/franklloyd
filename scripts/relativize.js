import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, relative, dirname } from 'path';
import { fileURLToPath } from 'url';

const buildDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'build');

function findHtmlFiles(dir) {
	const files = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		if (entry.isDirectory() && entry.name !== '_app') files.push(...findHtmlFiles(full));
		else if (entry.name.endsWith('.html')) files.push(full);
	}
	return files;
}

function hrefToFile(href) {
	if (href === '/') return 'index.html';
	return href.replace(/^\//, '') + '.html';
}

const files = findHtmlFiles(buildDir);
let hrefCount = 0;
let srcCount = 0;

for (const file of files) {
	const dir = dirname(file);
	const content = readFileSync(file, 'utf8')
		.replace(/href="(\/[^"#?]*)"/g, (_, href) => {
			let rel = relative(dir, join(buildDir, hrefToFile(href)));
			if (!rel.startsWith('.')) rel = './' + rel;
			hrefCount++;
			return `href="${rel}"`;
		})
		.replace(/src="(\/(?!\/)[^"]*)"/g, (_, src) => {
			let rel = relative(dir, join(buildDir, src.replace(/^\//, '')));
			if (!rel.startsWith('.')) rel = './' + rel;
			srcCount++;
			return `src="${rel}"`;
		});
	writeFileSync(file, content);
}

console.log(`relativized ${hrefCount} href + ${srcCount} src attributes in ${files.length} files`);
