# MateFinder — site vitrine

Page unique, statique, sans framework. Tailwind CSS v4 compilé en un fichier
`.css` (aucun JS de CDN), traduction FR/EN côté client.

## Structure

```
index.html            la page
src/input.css         source Tailwind (tokens + composants)
assets/css/style.css  CSS compilé — NE PAS éditer à la main
assets/js/app.js      config et traductions
serve.mjs             serveur de preview local
```

## Commandes

```bash
npm install       # une seule fois
npm run dev       # recompile le CSS à chaque modif (watch)
npm run preview   # http://localhost:3000
npm run build     # CSS minifié, à lancer avant chaque déploiement
```

`index.html` s'ouvre aussi directement dans un navigateur : tout est en chemins
relatifs, aucune requête réseau n'est nécessaire.

## Configuration

Tout est regroupé en haut de [`assets/js/app.js`](assets/js/app.js) :

| Clé | Rôle |
| --- | --- |
| `botInvite` | lien d'invitation du bot (boutons « Ajouter à Discord ») |
| `discordInvite` | serveur communautaire — `https://discord.gg/9gPPrEaAu` |

## Traductions

Anglais par défaut, français si le navigateur est en `fr-*`, et le choix manuel
(bouton EN/FR) est mémorisé en `localStorage`.

Les textes vivent dans l'objet `I18N` de `app.js`. Dans le HTML :

- `data-i18n="clé"` → remplace le texte
- `data-i18n-html="clé"` → remplace le HTML (pour le gras dans les étapes)
- `data-i18n-ph="clé"` → remplace le `placeholder`

Toute clé ajoutée doit exister dans `en` **et** dans `fr`.

## Déploiement

Site 100 % statique : lance `npm run build`, puis publie
`index.html` + `assets/` (Netlify, Vercel, Cloudflare Pages, GitHub Pages…).
`node_modules/`, `src/`, `serve.mjs` et `package.json` ne sont pas nécessaires
en production.
