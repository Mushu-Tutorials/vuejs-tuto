# VueJS Tuto

## Initialisation du projet

### Page HTML

- Ajout du [CDN](https://vuejs.org/v2/guide/installation.html#CDN "CDN VueJS") à la page HTML dans le body : `<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>`
- Ajout du script app.js dans le body sous le CDN : `<script src="js/app.js"></script>`
- Création d'un div avec un attribut id='app' : `<div id="app"></div>`
- Récupération des variables stockées dans VueJS grâce aux {{ }}
- Si on souhaite récupérer la variable __dans un attribut d'une balise__, il faut utiliser la syntaxe de vue
  - Pour un lien : `<a v-bind:href="link">{{ message2 }}</a>` (N.B.: on peut ne pas mettre `v-bind` et simplement utiliser cette syntaxe : `<a :href="link">{{ message2 }}</a>`)
  - `v-if="success"` et `v-else` : balises avec des conditions. Si la condition est remplie, la balise est affichée, sinon le else ou rien (on peut tester en modifiant la variable `success` du fichier app.js)
  - `v-for` permet de boucler sur plusieurs éléments : `<li v-for="person in persons">{{ person }}</li>`

```html
<body>
    <div id="app">
        {{ message }}
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
    <script src="js/app.js"></script>
</body>
```

### Page app.js

- `new Vue ({})` : initialisation de vue et insertion des différents attributs
  - `el: '#app'` qui fait référence à l'attribut id='app' de l'index.html
  - `data: {}` qui liste les différentes variables qui seront distribuées
  
```js

```

---

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
