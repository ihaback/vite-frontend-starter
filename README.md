<p align="center">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
</p>
<br/>

# Vite Frontend Starter

> Pre-configured with typescript, styling, global state handling, formatting, building & testing.

- ⚡️ Fast dev server powered by [`vite`](https://vitejs.dev/)
- 📖 Typescript ready
- 💅 Styling with [`styled-components`](https://styled-components.com/)
- 📦 Pre-configured global state handling with [`redux-toolkit`](https://redux-toolkit.js.org)
- 🐛 Discover inconsistencies and fix formatting through linting scripts with [`Eslint`](https://eslint.org/)
- 🔑 Testing scripts with [`React Testing Library`](https://testing-library.com/docs/react-testing-library/intro/)
- 💡 Path aliases do avoid pesky `../../` paths in your code

# Scaffold a new project using this template
```
npx degit https://github.com/ihaback/vite-frontend-starter.git your-project-name
```
```
cd your-project-name
```
```
npm install
```

# Folder aliases for development, testing and building
### vite.config.ts

```ts
export default defineConfig({
  resolve: {
    alias: {
      "@styles": path.resolve("./src/styles"),
      "@features": path.resolve("./src/features"),
      "@store": path.resolve("./src/store/index.ts"),
      "@utils": path.resolve("./src/utils.tsx"),
    },
  },
});

```
### tsconfig.json

```ts
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@styles": [
        "./src/styles/index.ts"
      ],
      "@features/*": [
        "./src/features/*"
      ],
      "@store": [
        "./src/store/index.ts"
      ],
      "@utils": [
        "src/utils.tsx"
      ],
    }
  },
}
```

### babel.config.js

```ts
{
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx'],
        alias: {
          '@utils': './src/utils.tsx',
          '@store': './src/store/index.ts',
          '@features': './src/features',
          '@styles': './src/styles',
        },
      },
    ],
  ],
}
```


# Install
```bash
npm install
```

# Develop
```bash
npm run dev
```
# Scripts
```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "serve": "vite preview",
  "test": "jest",
  "test:coverage": "jest --coverage",
  "lint": "eslint \"**/*.{js,jsx,ts,tsx}\" --fix"
},
```

# Support for older browsers

```
npm i @vitejs/plugin-legacy -D
```
```js
// vite.config.ts
import legacy from '@vitejs/plugin-legacy'

export default {
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
}