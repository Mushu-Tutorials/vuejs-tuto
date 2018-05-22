# VueJSTuto

## Prérequis

- [Yarn](https://yarnpkg.com/en/docs/install "Installer Yarn")
- VueJS : `yarn global add vue-cli`

## Initialisation du Projet

Dans le répertoire souhaité : `vue init webpack .`

- ? Generate project in current directory? __Yes__
- ? Project name testyarn __NomDuProjet__
- ? Project description __A Vue.js project__
- ? Author __MonNomDAuteur <email@email.com>__
- ? Vue build __standalone__
- ? Install vue-router? __Yes__
- ? Use ESLint to lint your code? __Yes__
- ? Pick an ESLint preset __Standard__
- ? Set up unit tests __Yes__
- ? Pick a test runner __jest__
- ? Setup e2e tests with Nightwatch? __No__
- ? Should we run `npm install` for you after the project has been created? (recommended) __yarn__

## Lancement du serveur

`yarn run dev`

## Readme du projet
### testyarn

> A Vue.js project

#### Build Setup

``` bash
# install dependencies
npm install // yarn

# serve with hot reload at localhost:8080
npm run dev // yarn dev

# build for production with minification
npm run build // yarn build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---

### Créer une nouvelle page :

#### 1. Folder components

Dans "components" :
-  Créer `MaPage.vue`
-  Taper "scaffold" + TAB

```
<template>
  <div>
      <p>
          Blablabla Voila mon texte
      </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
```

- Ajouter dans `export default` le nom de la page : `name: 'my-matches'`

#### 2. File index.js
Dans "index.js"
- Ajouter la route de la nouvelle page :
```
# En haut de la page
import MyMatches from '@/components/MyMatches'

# Dans export default > routes
{
	path: '/mapage',
	name: 'MaPage',
	component: Products
}
```
