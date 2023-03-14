# Micro Front End App 1
This project is setup using **Next.js 13.2** and bootstrapped with **create-next-app@latest**.

> This project does not use the experimental **App directory** or Next.js version 12's **Src directory**. Setup with plain JavaScript.

### Dependencies
- [@module-federation/nextjs-mf](https://www.npmjs.com/package/@module-federation/nextjs-mf)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
```
├── components/
│   ├── Header.jsx
│   └── Header.module.css
├── pages/
│   ├── api/
│   ├── _app.js
│   ├── _document.js
│   ├── blog.jsx
│   └── index.js
├── public/
├── styles/
│   ├── global.css
│   └── Home.module.css
├── .gitignore
├── jconfig.json
├── next.config.js
├── package-lock.json
├── package.json
└── README.md
```
### Shared Components
- components/Header.jsx

### Special Pages
- Blog (this imports a page from a remote micro front end app 2)