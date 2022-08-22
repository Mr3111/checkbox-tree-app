# Nested Checkbox app 

> Create nested checkbox from a given flat array of objects with title and parentId pairs.  

## [Live Demo!](https://checkbox-tree-3111.vercel.app/)

This is using the official [Vite](https://vitejs.dev/) [react-ts](https://stackblitz.com/edit/vitejs-vite-is3dmk?file=index.html&terminal=dev) template(`npm init vite@latest myapp -- --template react-ts`) and some extended setup.

- [eslint-typescript](https://github.com/typescript-eslint/typescript-eslint) and [Prettier](https://prettier.io/) integration. Rules are 100% my personal setup 💅
- [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [MSW](https://mswjs.io/)
- [tailwindcss](https://tailwindcss.com/) 
- [antd](https://ant.design/) integration

# Installation

```
npx degit Mr3111/checkbox-tree-app myapp
```

### yarn

```sh
cd myapp
yarn install
yarn validate # The installation was successful if no error occurs after running 'validate'.
yarn dev
```

### npm

```sh
cd myapp
npm install
npm run validate # The installation was successful if no error occurs after running 'validate'.
npm run dev
```

### Commands

```sh
yarn dev       # start development server
yarn validate  # run test,lint,build,typecheck concurrently
yarn lint      # run eslint
yarn lint:fix  # run eslint with --fix option
yarn typecheck # run TypeScript compiler check
yarn build     # build production bundle to 'dist' directly
yarn prettier  # run prettier for json|yml|css|md|mdx files
yarn clean     # remove 'node_modules' 'yarn.lock' 'dist' completely
yarn serve     # launch server for production bundle in local
```


# Background

This is using an alternative to [create-react-app](https://github.com/facebook/create-react-app), based on [Vite](https://github.com/facebook/create-react-app).  
This project contains a very opinionated setup. 😀

# License

MIT

## Contributors ✨

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
