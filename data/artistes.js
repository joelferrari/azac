// Artistes présentés sur le site (images dans public/img/artistes/)
// - country : 'ch' = Suisse, 'cn' = Chine (libellé traduit dans locales/*.js → artists.countries)
// - role : discipline, dans chaque langue
// - works : chaque œuvre existe en 2 tailles : <file>.jpg (grande) et <file>-800.jpg (vignette)
//   title (facultatif) : titre traduit, avec année et format si connus
// - sets (à la place de works) : plusieurs séries, chacune avec un titre traduit et ses œuvres
// - La première œuvre de chaque artiste est celle montrée sur la page d'accueil
module.exports = [
  {
    id: 'gu-zeng',
    name: 'Gu Zeng',
    country: 'cn',
    role: { fr: 'Artiste', en: 'Artist', de: 'Künstlerin', zh: '艺术家' },
    works: [
      { file: 'gu-zeng-1', width: 1102, height: 1104 },
      { file: 'gu-zeng-2', width: 1052, height: 1060 },
      { file: 'gu-zeng-3', width: 1136, height: 1146 },
      { file: 'gu-zeng-4', width: 1107, height: 1113 },
    ],
  },
  {
    id: 'audrey-piguet',
    name: 'Audrey Piguet',
    country: 'ch',
    role: { fr: 'Photographe', en: 'Photographer', de: 'Fotografin', zh: '摄影师' },
    works: [
      { file: 'audrey-piguet-1', width: 1600, height: 1142 },
      { file: 'audrey-piguet-2', width: 1600, height: 1137 },
      { file: 'audrey-piguet-3', width: 918, height: 1256 },
      { file: 'audrey-piguet-4', width: 898, height: 1254 },
    ],
  },
  {
    id: 'ma-jin',
    name: 'Ma Jin',
    country: 'cn',
    role: { fr: 'Artiste', en: 'Artist', de: 'Künstler', zh: '艺术家' },
    works: [
      { file: 'ma-jin-1', width: 1200, height: 1600 },
      { file: 'ma-jin-2', width: 1066, height: 1600 },
      { file: 'ma-jin-3', width: 1600, height: 1200 },
      { file: 'ma-jin-4', width: 1200, height: 1600 },
    ],
  },
  {
    id: 'joel-ferrari',
    name: 'Joël Ferrari',
    country: 'ch',
    role: { fr: 'Directeur artistique', en: 'Art director', de: 'Art Director', zh: '艺术总监' },
    works: [
      { file: 'joel-ferrari-1', width: 509, height: 720 },
      { file: 'joel-ferrari-2', width: 509, height: 720 },
      { file: 'joel-ferrari-3', width: 679, height: 960 },
      { file: 'joel-ferrari-4', width: 509, height: 720 },
    ],
  },
  {
    id: 'wang-yan-ling',
    name: 'Wang Yanling',
    country: 'cn',
    role: { fr: 'Artiste', en: 'Artist', de: 'Künstlerin', zh: '艺术家' },
    // Plusieurs séries : chacune a son titre et ses œuvres
    sets: [
      {
        title: { fr: 'Second Matter, 2010–2026', en: 'Second Matter, 2010–2026', de: 'Second Matter, 2010–2026', zh: '第二物质，2010–2026' },
        works: [
        { file: 'wang-yan-ling-sm-1', width: 1600, height: 1600, title: { fr: 'Classoïde – Volcan', en: 'Classoid – Volcano', de: 'Klassoid – Vulkan', zh: '类质体-火山' } },
        { file: 'wang-yan-ling-sm-2', width: 1600, height: 1600, title: { fr: 'Classoïde – Volcan', en: 'Classoid – Volcano', de: 'Klassoid – Vulkan', zh: '类质体-火山' } },
        { file: 'wang-yan-ling-sm-3', width: 1600, height: 1600, title: { fr: 'Spécimens [R-r]', en: 'Specimens [R-r]', de: 'Präparate [R-r]', zh: '标本【R-r】' }, year: 2013, size: '30 × 30 × 30 cm' },
        { file: 'wang-yan-ling-sm-4', width: 1600, height: 1600, title: { fr: 'Spécimens [R]', en: 'Specimens [R]', de: 'Präparate [R]', zh: '标本【R】' }, year: 2010, size: '90 × 120 cm' },
        { file: 'wang-yan-ling-sm-5', width: 1600, height: 1066, title: { fr: 'Boîte à minerais', en: 'Ore Box', de: 'Erzkasten', zh: '矿箱' }, year: 2014, size: '45 × 45 × 45 cm' },
        { file: 'wang-yan-ling-sm-6', width: 1600, height: 1600, title: { fr: 'Classoïde', en: 'Classoid', de: 'Klassoid', zh: '类质体' }, year: 2014, size: '45 × 45 × 8 cm' },
        { file: 'wang-yan-ling-sm-7', width: 1600, height: 1600, title: { fr: 'Monument', en: 'Monument', de: 'Monument', zh: '碑' }, year: 2017, size: '< 30 × 30 cm' },
        { file: 'wang-yan-ling-sm-8', width: 1600, height: 1154, title: { fr: 'Imagination matérielle – Manuscrit', en: 'Material Imagination – Manuscript', de: 'Materielle Imagination – Manuskript', zh: '物质幻想-手稿' }, year: 2020, size: '53 × 38 cm' },
        ],
      },
      {
        title: { fr: 'Série « À Jenny », 2020–2022', en: '“To Jenny” series, 2020–2022', de: 'Serie «An Jenny», 2020–2022', zh: '《致珍妮》系列，2020–2022' },
        works: [
        { file: 'wang-yan-ling-1', width: 1549, height: 1600, title: { fr: 'Genévrier', en: 'Juniper', de: 'Wacholder', zh: '圆柏' }, year: 2021, size: '102 × 98 cm' },
        { file: 'wang-yan-ling-2', width: 1274, height: 1600, title: { fr: 'Obsidienne', en: 'Obsidian', de: 'Obsidian', zh: '曜岩' }, year: 2021, size: '120 × 97 cm' },
        { file: 'wang-yan-ling-3', width: 1600, height: 1158, title: { fr: 'Écaille de tortue', en: 'Tortoiseshell', de: 'Schildpatt', zh: '玳瑁' }, year: 2021, size: '68 × 95 cm' },
        { file: 'wang-yan-ling-4', width: 1483, height: 1600, title: { fr: 'Étoile', en: 'Star', de: 'Stern', zh: '星' }, year: 2022, size: '104 × 97 cm' },
        ],
      },
    ],
  },
  {
    id: 'xia-wei',
    name: 'Xia Wei',
    country: 'cn',
    role: { fr: 'Écrivain, musicien, peintre', en: 'Writer, musician, painter', de: 'Schriftsteller, Musiker, Maler', zh: '作家、音乐人、画家' },
    works: [
      { file: 'xia-wei-1', width: 1082, height: 1080 },
      { file: 'xia-wei-2', width: 880, height: 1048 },
      { file: 'xia-wei-3', width: 1600, height: 1514 },
      { file: 'xia-wei-4', width: 900, height: 1600 },
    ],
  },
];
