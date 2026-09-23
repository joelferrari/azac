# Site de l’Association Zeng Art & Culture (AZAC)

Site Node.js (Express + EJS) de l’association, basée à La Tour-de-Peilz.

## Lancer le site en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Organisation

| Dossier / fichier      | Contenu                                                 |
|------------------------|---------------------------------------------------------|
| `server.js`            | Serveur, langues, coordonnées (e-mail, ville)           |
| `locales/*.js`         | **Tous les textes**, un fichier par langue              |
| `views/*.ejs`          | Mise en page de chaque page                             |
| `views/partials/`      | En-tête et pied de page communs                         |
| `public/css/style.css` | Couleurs, polices et mise en page                       |
| `public/img/`          | Logos                                                   |

## Langues

Le site existe en français (`/fr/`), anglais (`/en/`), allemand (`/de/`) et chinois (`/zh/`).
L’adresse `/` redirige vers la langue du navigateur du visiteur (français par défaut).

Pour modifier un texte, changer la même clé dans chacun des fichiers `locales/fr.js`,
`en.js`, `de.js` et `zh.js`.

## Hébergement Infomaniak (Node.js)

- Commande de démarrage : `npm start`
- Le serveur écoute le port fourni par la variable `PORT`.
- Version de Node : 18 ou plus récente.
