const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Coordonnées communes à toutes les langues
const site = {
  name: 'Association Zeng Art & Culture',
  city: 'La Tour-de-Peilz',
  email: 'info@azac.ch',
};

// Langues du site : l'ordre est celui du sélecteur ; la première est la langue par défaut
const LANGS = ['fr', 'en', 'de', 'zh'];
const DEFAULT_LANG = LANGS[0];
const locales = Object.fromEntries(LANGS.map((l) => [l, require(`./locales/${l}`)]));

// Pages du site (les adresses traduites sont dans locales/*.js → slugs)
const PAGES = ['home', 'association', 'espace', 'edition', 'soutenir', 'contact'];

const urlFor = (lang, page) => {
  const slug = locales[lang].slugs[page];
  return `/${lang}/${slug ? slug + '/' : ''}`;
};

// Le logo est injecté directement dans le HTML pour hériter de la couleur du texte
const svg = (file) =>
  fs.readFileSync(path.join(__dirname, 'public/img', file), 'utf8').replace(/<\?xml[^>]*>\s*/, '');
const logos = { full: svg('logo.svg'), mark: svg('logo-mark.svg') };

// Numéro de version des fichiers CSS/JS : force le rechargement après chaque modification
const assetVersion = (file) => Math.floor(fs.statSync(path.join(__dirname, 'public', file)).mtimeMs).toString(36);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('strict routing', false);
app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1d' }));

const render = (res, lang, page, view, status = 200) => {
  const t = locales[lang];
  res.status(status).render(view, {
    t,
    lang,
    page,
    site,
    logos,
    langs: LANGS.map((l) => ({ code: l, label: locales[l].label, name: locales[l].name })),
    url: (p, l = lang) => urlFor(l, p),
    alternates: page === '404' ? [] : LANGS.map((l) => ({ lang: locales[l].htmlLang, href: urlFor(l, page) })),
    title: page === '404' ? t.ui.notFoundTitle : t.titles[page],
    year: new Date().getFullYear(),
    v: assetVersion,
  });
};

// Accueil sans langue : on choisit d'après le navigateur du visiteur
app.get('/', (req, res) => {
  const lang = req.acceptsLanguages(...LANGS) || DEFAULT_LANG;
  res.redirect(302, `/${lang}/`);
});

LANGS.forEach((lang) => {
  PAGES.forEach((page) => {
    app.get(urlFor(lang, page).replace(/\/$/, '') || '/', (req, res) => render(res, lang, page, page === 'home' ? 'index' : page));
  });
});

// Anciennes adresses sans langue (/association, /contact…) → version française
PAGES.slice(1).forEach((page) => {
  app.get(`/${locales.fr.slugs[page]}`, (req, res) => res.redirect(301, urlFor('fr', page)));
});

app.use((req, res) => {
  const lang = LANGS.find((l) => req.path.startsWith(`/${l}/`) || req.path === `/${l}`) || DEFAULT_LANG;
  render(res, lang, '404', '404', 404);
});

app.listen(PORT, () => console.log(`AZAC en ligne sur http://localhost:${PORT}`));
