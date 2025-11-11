import { Award, ChefHat, Flame, Wine, Droplet } from 'lucide-react';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags: string[];
  image: string;
  slug: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: any;
  description: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'signature',
    name: 'Signatur Grillar',
    icon: Award,
    description: 'Våra mest hyllade rätter, grillade till absolut perfektion',
    items: [
      {
        name: 'Wagyu Tomahawk Biff',
        description: 'Premium 900g entrecôte med ben, grillad till perfektion med örtsmör och säsongens grönsaker',
        price: '890 kr',
        tags: ['Kockens Special', 'Premium'],
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031',
        slug: 'wagyu-tomahawk-steak',
      },
      {
        name: 'Mixad Grill Tallrik',
        description: 'Lammkotletter, oxfilé, kycklingspett, merguez korv och grillade grönsaker',
        price: '680 kr',
        tags: ['Populär', 'För Delning'],
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787',
        slug: 'mixed-grill-platter',
      },
      {
        name: 'Entrecôte Premium',
        description: '450g torrmognad entrecôte med tryffelpotatis och rödvinsreduktion',
        price: '540 kr',
        tags: ['Premium'],
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070',
        slug: 'ribeye-premium-cut',
      },
      {
        name: 'Filet Mignon',
        description: '225g innerfilé med béarnaisesås och sparris',
        price: '620 kr',
        tags: ['Premium', 'Mör'],
        image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=2080',
        slug: 'filet-mignon',
      },
    ],
  },
  {
    id: 'specialties',
    name: 'Husets Specialiteter',
    icon: ChefHat,
    description: 'Unika kreationer skapade av våra mästerkockar',
    items: [
      {
        name: 'Grillad Laxfilé',
        description: 'Färsk atlantlax med citronörtssås, sparris och vilt ris',
        price: '420 kr',
        tags: ['Hälsosamt Val', 'Skaldjur'],
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2787',
        slug: 'grilled-salmon-fillet',
      },
      {
        name: 'BBQ Revbensspjäll',
        description: 'Långkokt revben med signatur BBQ-glasyr, coleslaw och majsbröd',
        price: '380 kr',
        tags: ['Populär', 'Långkokt'],
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069',
        slug: 'bbq-baby-back-ribs',
      },
      {
        name: 'Grillad Lammracks',
        description: 'Nyzeeländskt lamm med rosmarinsky, rostade grönsaker och mintpesto',
        price: '520 kr',
        tags: ['Kockens Special'],
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070',
        slug: 'grilled-lamb-rack',
      },
      {
        name: 'Spatchcock Kyckling',
        description: 'Hel uppklippt kyckling med Provence-örter och vitlöksconfit',
        price: '360 kr',
        tags: ['För Delning', 'Populär'],
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=2787',
        slug: 'spatchcock-chicken',
      },
    ],
  },
  {
    id: 'smokehouse',
    name: 'Rökhuset',
    icon: Flame,
    description: 'Långsamt rökt kött med autentiska smaker',
    items: [
      {
        name: 'Rökt Brisket',
        description: '12-timmars rökt oxbringa med BBQ bönor, pickles och majsbröd',
        price: '360 kr',
        tags: ['Rökt 12h', 'Populär'],
        image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2787',
        slug: 'smoked-brisket',
      },
      {
        name: 'Pulled Pork Tallrik',
        description: 'Långrökt pulled pork med tre hemgjorda såser och coleslaw',
        price: '320 kr',
        tags: ['Populär', 'Mört'],
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031',
        slug: 'pulled-pork-platter',
      },
      {
        name: 'Rökt Kycklingvingar',
        description: 'Hickory-rökt vingar med buffalo eller honey BBQ sås (12 st)',
        price: '240 kr',
        tags: ['Förrätt', 'Stark'],
        image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=2835',
        slug: 'smoked-chicken-wings',
      },
      {
        name: 'Texas Tri-Tip',
        description: '400g rökt tri-tip med jalapeño mac & cheese och bourbonglasyr',
        price: '440 kr',
        tags: ['Stark', 'Populär'],
        image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=2080',
        slug: 'texas-tri-tip',
      },
    ],
  },
  {
    id: 'cocktails',
    name: 'Signatur Cocktails',
    icon: Wine,
    description: 'Handgjorda cocktails av våra mästerbartenders',
    items: [
      {
        name: 'Sahara Solnedgång',
        description: 'Tequila, passionsfrukt, lime, agave, rökt chilikantering',
        price: '160 kr',
        tags: ['Signatur', 'Stark'],
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070',
        slug: 'sahara-sunset',
      },
      {
        name: 'Rökig Old Fashioned',
        description: 'Bourbon, lönnsirap, bitters, rökt med hickory-trä',
        price: '180 kr',
        tags: ['Klassisk', 'Rökig'],
        image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069',
        slug: 'smoky-old-fashioned',
      },
      {
        name: 'Öken Ros Martini',
        description: 'Gin, rosvatten, fläder, citron, garnerad med rosblad',
        price: '170 kr',
        tags: ['Signatur', 'Blommig'],
        image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2086',
        slug: 'desert-rose-martini',
      },
      {
        name: 'Stark Margarita',
        description: 'Tequila, jalapeño, gurka, lime, tajínkant',
        price: '150 kr',
        tags: ['Stark', 'Populär'],
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=2069',
        slug: 'spicy-margarita',
      },
      {
        name: 'Förkolnad Ananas Mojito',
        description: 'Vit rom, grillad ananas, mynta, lime, sodavatten',
        price: '140 kr',
        tags: ['Uppfriskande', 'Tropisk'],
        image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=2074',
        slug: 'charred-pineapple-mojito',
      },
    ],
  },
  {
    id: 'beverages',
    name: 'Färska Juicer & Drycker',
    icon: Droplet,
    description: 'Nypress juicer och uppfriskande alkoholfria drycker',
    items: [
      {
        name: 'Vattenmelon Mynta Cooler',
        description: 'Färsk vattenmelon, mynta, lime, mousserande vatten',
        price: '80 kr',
        tags: ['Uppfriskande', 'Populär'],
        image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f4d?q=80&w=2070',
        slug: 'watermelon-mint-cooler',
      },
      {
        name: 'Gyllene Gurkmeja Elixir',
        description: 'Färsk gurkmeja, ingefära, apelsin, honung, svartpeppar',
        price: '90 kr',
        tags: ['Hälsosamt', 'Antiinflammatoriskt'],
        image: 'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?q=80&w=2087',
        slug: 'golden-turmeric-elixir',
      },
      {
        name: 'Bär Explosion',
        description: 'Blandade bär, acai, banan, kokosvatten',
        price: '100 kr',
        tags: ['Hälsosamt', 'Antioxidant'],
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=2070',
        slug: 'berry-blast',
      },
      {
        name: 'Grön Detox',
        description: 'Grönkål, spenat, gurka, selleri, grönt äpple, citron, ingefära',
        price: '110 kr',
        tags: ['Detox', 'Hälsosamt'],
        image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=2070',
        slug: 'green-detox',
      },
      {
        name: 'Citrus Soluppgång',
        description: 'Apelsin, grapefrukt, blodapelsin, färsk mynta',
        price: '80 kr',
        tags: ['Vitamin C', 'Uppfriskande'],
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=2074',
        slug: 'citrus-sunrise',
      },
      {
        name: 'Mango Lassi',
        description: 'Färsk mango, yoghurt, kardemumma, saffran',
        price: '90 kr',
        tags: ['Krämig', 'Traditionell'],
        image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=2070',
        slug: 'mango-lassi',
      },
    ],
  },
];
