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
- 💅 Styling and theme intellisense autocompletion with [`styled-components`](https://styled-components.com/)
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

### package.json

```json
{
  "jest": {
    "moduleNameMapper": {
      "@utils": "<rootDir>/src/utils.tsx",
      "@store": "<rootDir>/src/store",
      "@features/(.*)": "<rootDir>/src/features/$1",
      "@styles": "<rootDir>/src/styles/index.ts"
    }
  }
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
    "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\" --fix && tsc --noEmit"
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
```

# Automatic dependabot merge if all tests pass

```yml
name: Test on PR

on: pull_request

permissions:
  pull-requests: write
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}

    steps:
      - uses: actions/checkout@v2
      
      - name: Set up node
        uses: actions/setup-node@v1
        with:
          node-version: 16.x

      - name: Install packages
        run: npm install

      - name: Run a security audit        
        run: npm audit --audit-level=critical

      - name: Build application
        run: npm run build

      - name: Test application
        run: npm run test

      - name: Lint application
        run: npm run lint
  
      - name: Enable auto-merge for Dependabot PRs
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```