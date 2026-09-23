// Livres présentés sur la page Édition (images dans public/img/livres/)
// - artist : id de l'artiste dans data/artistes.js (lien vers sa fiche)
// - images : la première est la grande image ; chaque fichier existe en <file>.jpg et <file>-800.jpg
module.exports = [
  {
    id: 'second-matter',
    title: 'Second Matter',
    author: 'Wang Yanling',
    artist: 'wang-yan-ling',
    years: '2010–2026',
    images: [
      { file: 'second-matter-1', width: 1280, height: 1280 },
      { file: 'second-matter-2', width: 1200, height: 1600 },
      { file: 'second-matter-3', width: 1186, height: 1600 },
    ],
    text: {
      fr: [
        'Second Matter réunit les œuvres réalisées par Wang Yanling depuis 2010 autour de la traduction entre image, peinture et matière.',
        'Tout part d’archives familiales : des lames minces de roches et des photographies microscopiques réalisées entre 1983 et 1985 par son père, géologue. Redécouvertes en 2010, elles deviennent le point de départ d’une recherche où la pierre, les minéraux et le béton sont découpés, peints et recomposés.',
        'Née en 1981, Wang Yanling est diplômée du département de peinture chinoise de l’Académie des Beaux-Arts de Shanghai. Elle vit et travaille à Shanghai.',
      ],
      en: [
        'Second Matter brings together the works Wang Yanling has created since 2010 around the translation between image, painting and matter.',
        'It all begins with family archives: thin sections of rock and microscope photographs taken between 1983 and 1985 by her father, a geologist. Rediscovered in 2010, they became the starting point of a practice in which stone, minerals and concrete are cut, painted and recomposed.',
        'Born in 1981, Wang Yanling graduated from the Chinese painting department of the Shanghai Academy of Fine Arts. She lives and works in Shanghai.',
      ],
      de: [
        'Second Matter versammelt die Werke, die Wang Yanling seit 2010 geschaffen hat – rund um die Übersetzung zwischen Bild, Malerei und Materie.',
        'Am Anfang stehen Familienarchive: Gesteinsdünnschliffe und mikroskopische Fotografien, die ihr Vater, ein Geologe, zwischen 1983 und 1985 anfertigte. 2010 wiederentdeckt, werden sie zum Ausgangspunkt einer Arbeit, in der Stein, Mineralien und Beton zerschnitten, bemalt und neu zusammengesetzt werden.',
        'Wang Yanling, geboren 1981, hat an der Abteilung für chinesische Malerei der Kunstakademie Shanghai abgeschlossen. Sie lebt und arbeitet in Shanghai.',
      ],
      zh: [
        '《Second Matter》收录了王雁玲自 2010 年以来围绕图像、绘画与物质之间的转译所创作的作品。',
        '一切源于家庭档案：她身为地质学家的父亲在 1983 至 1985 年间制作的岩石薄片与显微照片。这些资料于 2010 年被重新发现，成为她艺术探索的起点——石头、矿物与混凝土在她手中被切割、绘制与重构。',
        '王雁玲生于 1981 年，毕业于上海美术学院中国画系，现生活和工作于上海。',
      ],
    },
  },
  {
    id: 'routine',
    title: 'Routine',
    author: 'Gu Zeng',
    artist: 'gu-zeng',
    images: [
      { file: 'routine-1', width: 1600, height: 1200 },
      { file: 'routine-2', width: 1600, height: 1200 },
      { file: 'routine-3', width: 1600, height: 1200 },
    ],
    text: {
      fr: [
        'Chaque jour, Gu Zeng accomplit le même rituel : s’asseoir en silence, allumer de l’encens et laisser venir les formes, sans chercher à les contrôler. Une fois l’encens consumé, elle réalise l’œuvre du jour : dessin, couleur ou gravure.',
        'Routine rassemble les œuvres nées de cette pratique et propose une manière simple et apaisée de créer, où la régularité remplace l’attente de l’inspiration.',
        'Un livre pour les artistes, les écrivains et toutes celles et ceux dont le travail repose sur la créativité.',
      ],
      en: [
        'Every day, Gu Zeng follows the same ritual: she sits in silence, lights incense and lets forms come to her, without trying to control them. Once the incense has burned down, she creates the work of the day: a drawing, a colour piece or a print.',
        'Routine gathers the works born of this practice and offers a simple, peaceful way of creating, in which regularity replaces the wait for inspiration.',
        'A book for artists, writers and anyone whose work relies on creativity.',
      ],
      de: [
        'Jeden Tag vollzieht Gu Zeng dasselbe Ritual: Sie setzt sich in Stille, zündet Räucherwerk an und lässt die Formen kommen, ohne sie kontrollieren zu wollen. Ist das Räucherstäbchen abgebrannt, entsteht das Werk des Tages: Zeichnung, Farbe oder Druckgrafik.',
        'Routine versammelt die Werke dieser Praxis und zeigt eine einfache, gelassene Art des Schaffens, in der Regelmässigkeit das Warten auf Inspiration ersetzt.',
        'Ein Buch für Kunstschaffende, Schreibende und alle, deren Arbeit auf Kreativität beruht.',
      ],
      zh: [
        '每天，Gu Zeng 都遵循同样的仪式：静坐、点香、放空思绪，任由形象自然浮现，而不刻意掌控。待香燃尽，她便完成当天的作品：素描、色彩或版画。',
        '《Routine》汇集了这一创作实践的作品，呈现出一种简单而平和的创作方式——以规律取代对灵感的等待。',
        '献给艺术家、作家，以及所有以创造力为生的人。',
      ],
    },
  },
];
