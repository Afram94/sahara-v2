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
    name: 'Signature Grills',
    icon: Award,
    description: 'Our most celebrated dishes, grilled to absolute perfection',
    items: [
      {
        name: 'Wagyu Tomahawk Steak',
        description: 'Premium 32oz bone-in ribeye, grilled to perfection with herb butter and seasonal vegetables',
        price: '$89',
        tags: ["Chef's Special", 'Premium'],
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031',
        slug: 'wagyu-tomahawk-steak',
      },
      {
        name: 'Mixed Grill Platter',
        description: 'Lamb chops, beef tenderloin, chicken skewers, merguez sausage and grilled vegetables',
        price: '$68',
        tags: ['Popular', 'For Sharing'],
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787',
        slug: 'mixed-grill-platter',
      },
      {
        name: 'Ribeye Premium Cut',
        description: '16oz dry-aged ribeye with truffle mashed potatoes and red wine reduction',
        price: '$54',
        tags: ['Premium'],
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070',
        slug: 'ribeye-premium-cut',
      },
      {
        name: 'Filet Mignon',
        description: '8oz center-cut tenderloin with béarnaise sauce and asparagus',
        price: '$62',
        tags: ['Premium', 'Tender'],
        image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=2080',
        slug: 'filet-mignon',
      },
    ],
  },
  {
    id: 'specialties',
    name: 'House Specialties',
    icon: ChefHat,
    description: 'Unique creations crafted by our master chefs',
    items: [
      {
        name: 'Grilled Salmon Fillet',
        description: 'Fresh Atlantic salmon with lemon herb sauce, asparagus and wild rice',
        price: '$42',
        tags: ['Healthy Choice', 'Seafood'],
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2787',
        slug: 'grilled-salmon-fillet',
      },
      {
        name: 'BBQ Baby Back Ribs',
        description: 'Slow-cooked ribs with signature BBQ glaze, coleslaw and cornbread',
        price: '$38',
        tags: ['Popular', 'Slow-Cooked'],
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069',
        slug: 'bbq-baby-back-ribs',
      },
      {
        name: 'Grilled Lamb Rack',
        description: 'New Zealand lamb with rosemary jus, roasted vegetables and mint pesto',
        price: '$52',
        tags: ["Chef's Special"],
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070',
        slug: 'grilled-lamb-rack',
      },
      {
        name: 'Spatchcock Chicken',
        description: 'Whole butterflied chicken with herbs de Provence and garlic confit',
        price: '$36',
        tags: ['For Sharing', 'Popular'],
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=2787',
        slug: 'spatchcock-chicken',
      },
    ],
  },
  {
    id: 'smokehouse',
    name: 'Smokehouse',
    icon: Flame,
    description: 'Low and slow smoked meats with authentic flavors',
    items: [
      {
        name: 'Smoked Brisket',
        description: '12-hour smoked beef brisket with BBQ beans, pickles and cornbread',
        price: '$36',
        tags: ['Smoked 12hrs', 'Popular'],
        image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2787',
        slug: 'smoked-brisket',
      },
      {
        name: 'Pulled Pork Platter',
        description: 'Slow-smoked pulled pork with three house-made sauces and slaw',
        price: '$32',
        tags: ['Popular', 'Tender'],
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031',
        slug: 'pulled-pork-platter',
      },
      {
        name: 'Smoked Chicken Wings',
        description: 'Hickory-smoked wings with buffalo or honey BBQ sauce (12 pcs)',
        price: '$24',
        tags: ['Appetizer', 'Spicy'],
        image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=2835',
        slug: 'smoked-chicken-wings',
      },
      {
        name: 'Texas Tri-Tip',
        description: '14oz smoked tri-tip with jalapeño mac & cheese and bourbon glaze',
        price: '$44',
        tags: ['Spicy', 'Popular'],
        image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=2080',
        slug: 'texas-tri-tip',
      },
    ],
  },
  {
    id: 'cocktails',
    name: 'Signature Cocktails',
    icon: Wine,
    description: 'Handcrafted cocktails by our master mixologists',
    items: [
      {
        name: 'Sahara Sunset',
        description: 'Tequila, passion fruit, lime, agave, smoked chili rim',
        price: '$16',
        tags: ['Signature', 'Spicy'],
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070',
        slug: 'sahara-sunset',
      },
      {
        name: 'Smoky Old Fashioned',
        description: 'Bourbon, maple syrup, bitters, smoked with hickory wood',
        price: '$18',
        tags: ['Classic', 'Smoky'],
        image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069',
        slug: 'smoky-old-fashioned',
      },
      {
        name: 'Desert Rose Martini',
        description: 'Gin, rose water, elderflower, lemon, garnished with rose petals',
        price: '$17',
        tags: ['Signature', 'Floral'],
        image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2086',
        slug: 'desert-rose-martini',
      },
      {
        name: 'Spicy Margarita',
        description: 'Tequila, jalapeño, cucumber, lime, tajín rim',
        price: '$15',
        tags: ['Spicy', 'Popular'],
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=2069',
        slug: 'spicy-margarita',
      },
      {
        name: 'Charred Pineapple Mojito',
        description: 'White rum, grilled pineapple, mint, lime, soda water',
        price: '$14',
        tags: ['Refreshing', 'Tropical'],
        image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=2074',
        slug: 'charred-pineapple-mojito',
      },
    ],
  },
  {
    id: 'beverages',
    name: 'Fresh Juices & Beverages',
    icon: Droplet,
    description: 'Freshly squeezed juices and refreshing non-alcoholic drinks',
    items: [
      {
        name: 'Watermelon Mint Cooler',
        description: 'Fresh watermelon, mint leaves, lime, sparkling water',
        price: '$8',
        tags: ['Refreshing', 'Popular'],
        image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f4d?q=80&w=2070',
        slug: 'watermelon-mint-cooler',
      },
      {
        name: 'Golden Turmeric Elixir',
        description: 'Fresh turmeric, ginger, orange, honey, black pepper',
        price: '$9',
        tags: ['Healthy', 'Anti-inflammatory'],
        image: 'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?q=80&w=2087',
        slug: 'golden-turmeric-elixir',
      },
      {
        name: 'Berry Blast',
        description: 'Mixed berries, acai, banana, coconut water',
        price: '$10',
        tags: ['Healthy', 'Antioxidant'],
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=2070',
        slug: 'berry-blast',
      },
      {
        name: 'Green Detox',
        description: 'Kale, spinach, cucumber, celery, green apple, lemon, ginger',
        price: '$11',
        tags: ['Detox', 'Healthy'],
        image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=2070',
        slug: 'green-detox',
      },
      {
        name: 'Citrus Sunrise',
        description: 'Orange, grapefruit, blood orange, fresh mint',
        price: '$8',
        tags: ['Vitamin C', 'Refreshing'],
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=2074',
        slug: 'citrus-sunrise',
      },
      {
        name: 'Mango Lassi',
        description: 'Fresh mango, yogurt, cardamom, saffron',
        price: '$9',
        tags: ['Creamy', 'Traditional'],
        image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=2070',
        slug: 'mango-lassi',
      },
    ],
  },
];
