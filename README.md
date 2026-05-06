# frank lloyd wright — arhitectură organică

A multi-page editorial website about the life and work of Frank Lloyd Wright, built with SvelteKit. Content is written in Romanian. The design follows the aesthetic of architecture and art magazines — geometric sans-serif typography, generous negative space, and minimal ornamentation.

---

## pages

| Route | Description |
|---|---|
| `/` | Landing page with animated hero, featured projects, and philosophy section |
| `/proiecte` | All 8 projects with swappable exterior/interior images and cursor tilt effect |
| `/proiecte/[slug]` | Individual project page with full gallery and Wright contextual photos |
| `/despre` | Biography, timeline, philosophy, and archival photographs |

## featured projects

1. Fallingwater (1935)
2. Solomon R. Guggenheim Museum (1959)
3. Taliesin West (1937)
4. Frederick C. Robie House (1910)
5. Unity Temple (1908)
6. Hollyhock House (1921)
7. Herbert Jacobs House I (1937)
8. Taliesin (1911)

---

## setup

### 1. install node.js

The project requires **Node.js 18 or later**.

**Windows**

1. Go to [nodejs.org](https://nodejs.org) and download the **LTS** installer (`.msi`)
2. Run the installer — keep all default options
3. Open **Command Prompt** or **PowerShell** and verify:

```powershell
node --version
npm --version
```

Alternatively, use [fnm](https://github.com/Schniz/fnm) (recommended for managing multiple Node versions on Windows):

```powershell
winget install Schniz.fnm
fnm install --lts
fnm use lts-latest
```

**Linux (Ubuntu / Debian)**

```bash
# using NodeSource (installs the latest LTS)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# verify
node --version
npm --version
```

**Linux (Arch / Manjaro)**

```bash
sudo pacman -S nodejs npm
```

**Linux — alternative: using nvm (works on any distro)**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# restart your terminal, then:
nvm install --lts
nvm use --lts
```

---

### 2. clone or download the project

If you have git installed:

```bash
git clone <repository-url>
cd webapp
```

Or download the ZIP from the repository page, extract it, then open a terminal inside the `webapp` folder.

---

### 3. install dependencies

```bash
npm install
```

This installs SvelteKit, Vite, TypeScript, and all other dependencies listed in `package.json`. It may take a minute on first run.

---

### 4. start the development server

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

The server supports **hot module replacement** — changes to `.svelte`, `.ts`, and `.css` files are reflected in the browser instantly without a full reload.

To open the browser automatically:

```bash
npm run dev -- --open
```

To expose the server on your local network (useful for testing on a phone or another device):

```bash
npm run dev -- --host
```

---

### 5. build for production

```bash
npm run build
```

This outputs an optimised static build to `.svelte-kit/output/`. Preview it locally before deploying:

```bash
npm run preview
```

---

## project structure

```
webapp/
├── src/
│   ├── app.css                  # global styles, CSS variables, typography
│   ├── app.html                 # HTML shell
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Navbar.svelte    # top navigation bar
│   │   │   └── ImageTilt.svelte # cursor-reactive 3D tilt image component
│   │   └── data/
│   │       └── projects.ts      # all project data and Romanian descriptions
│   └── routes/
│       ├── +layout.svelte       # shared layout (navbar + footer)
│       ├── +page.svelte         # home page
│       ├── despre/
│       │   └── +page.svelte     # about page
│       └── proiecte/
│           ├── +page.svelte     # all projects listing
│           └── [slug]/
│               ├── +page.ts     # data loader (finds project by slug)
│               └── +page.svelte # individual project page
├── static/                      # static assets (robots.txt, favicon)
├── package.json
├── svelte.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## tech stack

| Tool | Version | Purpose |
|---|---|---|
| [SvelteKit](https://kit.svelte.dev) | 2.x | full-stack framework and routing |
| [Svelte](https://svelte.dev) | 5.x | UI component compiler |
| [Vite](https://vitejs.dev) | 8.x | dev server and bundler |
| [TypeScript](https://typescriptlang.org) | 6.x | type safety |

**Fonts** — Space Grotesk (geometric display) + DM Sans (body), loaded from Google Fonts.  
**Images** — sourced from Wikimedia Commons via `Special:FilePath` redirect URLs.  
No external UI libraries or CSS frameworks are used.

---

## adding or editing a project

All project data lives in [`src/lib/data/projects.ts`](src/lib/data/projects.ts). Each entry follows this shape:

```typescript
{
  slug: 'project-slug',        // used in the URL: /proiecte/project-slug
  title: 'project title',      // lowercase, as displayed
  year: 1935,
  location: 'City, State',
  style: 'arhitectură organică',
  client: 'Client Name',
  material: 'material list',
  intro: 'One sentence intro (shown in cards)',
  description: 'Full description in Romanian (shown on detail page)',
  images: {
    hero: 'url',               // full-bleed hero image
    exterior: 'url',           // main exterior image
    exterior2: 'url',          // optional second exterior
    interior: 'url',           // main interior image
    interior2: 'url',          // optional second interior
    withWright: 'url'          // optional photo of Wright with the project
  }
}
```

The project detail route is generated automatically from the `slug` field — no additional files needed.

---

## type checking

```bash
npm run check
```

Runs `svelte-check` across the whole codebase and reports TypeScript errors and Svelte warnings.
