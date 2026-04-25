export type MenuCategory =
  | "coffee"
  | "milkshake"
  | "fresh"
  | "lemonades"
  | "smoothie"
  | "ice-coffee"
  | "tea"
  | "drinks"
  | "addons"
  | "pizza"
  | "burger"
  | "hot-dog"
  | "snacks"
  | "sauces"
  | "combo"
  | "sets";

export type MenuItem = {
  id: string;
  title: string;
  category: MenuCategory;
  price: number;
  description?: string;
  badge?: string;
  popular?: boolean;
};

export type Category = {
  id: MenuCategory;
  label: string;
  shortLabel: string;
  accent: "coffee" | "fresh" | "food" | "deal" | "basic";
};

export const categories: Category[] = [
  { id: "coffee", label: "Кофе / Coffee", shortLabel: "Кофе", accent: "coffee" },
  { id: "milkshake", label: "Милкшейктер", shortLabel: "Milkshake", accent: "fresh" },
  { id: "fresh", label: "Фреш / Фреши", shortLabel: "Фреш", accent: "fresh" },
  { id: "lemonades", label: "Лимонадтар", shortLabel: "Лимонад", accent: "fresh" },
  { id: "smoothie", label: "Смузи", shortLabel: "Смузи", accent: "fresh" },
  { id: "ice-coffee", label: "Мұз қосылған кофе", shortLabel: "Ice coffee", accent: "coffee" },
  { id: "tea", label: "Шайлар / Tea", shortLabel: "Шай", accent: "coffee" },
  { id: "drinks", label: "Сусындар", shortLabel: "Сусын", accent: "basic" },
  { id: "addons", label: "Қосымшалар", shortLabel: "Қосымша", accent: "basic" },
  { id: "pizza", label: "Pizza", shortLabel: "Pizza", accent: "food" },
  { id: "burger", label: "Burger", shortLabel: "Burger", accent: "food" },
  { id: "hot-dog", label: "Hot dog", shortLabel: "Hot dog", accent: "food" },
  { id: "snacks", label: "Тіскебасар", shortLabel: "Снэк", accent: "food" },
  { id: "sauces", label: "Тұздықтар", shortLabel: "Соус", accent: "basic" },
  { id: "combo", label: "Комбо", shortLabel: "Комбо", accent: "deal" },
  { id: "sets", label: "Сеттер", shortLabel: "Сет", accent: "deal" },
];

export const menu: MenuItem[] = [
  { id: "espresso", title: "Espresso", category: "coffee", price: 750, popular: true },
  { id: "americano-03", title: "Americano 0.3", category: "coffee", price: 900 },
  { id: "americano-04", title: "Americano 0.4", category: "coffee", price: 1000 },
  { id: "latte-03", title: "Latte 0.3", category: "coffee", price: 1050 },
  { id: "latte-04", title: "Latte 0.4", category: "coffee", price: 1100, popular: true },
  { id: "cappuccino-03", title: "Cappuccino 0.3", category: "coffee", price: 1050 },
  { id: "cappuccino-04", title: "Cappuccino 0.4", category: "coffee", price: 1100, popular: true },
  {
    id: "raf",
    title: "Raf",
    category: "coffee",
    price: 1390,
    description: "Жұмсақ, жылы және ерекше дәм.",
    badge: "Күннің хош иісі",
    popular: true,
  },
  { id: "hot-chocolate", title: "Hot chocolate", category: "coffee", price: 1290 },
  { id: "flat-white", title: "Flat white", category: "coffee", price: 1090 },
  { id: "matcha-latte", title: "Matcha latte", category: "coffee", price: 1200, popular: true },
  { id: "cappuccino-chocolate-03", title: "Cappuccino chocolate 0.3", category: "coffee", price: 1100 },
  { id: "cappuccino-chocolate-04", title: "Cappuccino chocolate 0.4", category: "coffee", price: 1200 },
  { id: "latte-chocolate-03", title: "Latte chocolate 0.3", category: "coffee", price: 1150 },
  { id: "latte-chocolate-04", title: "Latte chocolate 0.4", category: "coffee", price: 1250 },
  { id: "alternative-milk", title: "Альтернативное молоко", category: "addons", price: 300 },

  { id: "milkshake-chocolate", title: "Chocolate / Шоколад", category: "milkshake", price: 1590 },
  { id: "milkshake-caramel", title: "Caramel / Карамель", category: "milkshake", price: 1590 },
  { id: "milkshake-strawberry", title: "Strawberry / Клубника", category: "milkshake", price: 1590 },
  { id: "milkshake-oreo", title: "Oreo / Орео", category: "milkshake", price: 1590, popular: true },

  { id: "fresh-orange", title: "Апельсинді / Апельсиновый", category: "fresh", price: 2300 },
  { id: "fresh-apple", title: "Алмалы / Яблочный", category: "fresh", price: 2200 },
  { id: "fresh-carrot", title: "Сәбізді / Морковный", category: "fresh", price: 2100 },
  {
    id: "fresh-orange-grapefruit",
    title: "Апельсинді-грейпфрутты / Апельсиново-грейпфрутовый",
    category: "fresh",
    price: 2300,
  },
  { id: "fresh-assorti", title: "Ассорти", category: "fresh", price: 2300 },

  { id: "lemonade-kiwi-lime", title: "Kiwi - Lime / Киви - лайм", category: "lemonades", price: 1500, popular: true },
  {
    id: "lemonade-mango-passion",
    title: "Манго - маракуйя / Mango - Passion fruit",
    category: "lemonades",
    price: 1500,
    popular: true,
  },
  { id: "lemonade-classic", title: "Классикалық / Classic", category: "lemonades", price: 1500 },
  { id: "lemonade-berry-mojito", title: "Жидек мохито / Berry mojito", category: "lemonades", price: 1500 },
  {
    id: "lemonade-strawberry-pineapple",
    title: "Құлпынай-ананас / Strawberry-pineapple",
    category: "lemonades",
    price: 1500,
  },
  { id: "lemonade-citrus", title: "Цитрус / Citrus", category: "lemonades", price: 1500 },
  { id: "lemonade-pineapple-mango", title: "Ананас-манго / Pineapple-mango", category: "lemonades", price: 1500 },
  { id: "lemonade-pomegranate", title: "Анар / Гранатовый", category: "lemonades", price: 1500 },
  { id: "lemonade-orange-raspberry", title: "Апельсин-таңқурай / Апельсин-малина", category: "lemonades", price: 1500 },
  { id: "lemonade-strawberry-breeze", title: "Құлпынай самалы / Клубничный бриз", category: "lemonades", price: 1500 },
  { id: "lemonade-rich-tonic", title: "Rich Tonic грейпфрутовый", category: "lemonades", price: 1500 },

  { id: "smoothie-berry", title: "Жидек / Berry", category: "smoothie", price: 2100 },
  { id: "smoothie-strawberry-banana", title: "Құлпынай - банан / Клубника - банан", category: "smoothie", price: 2100 },
  { id: "smoothie-apple-banana-kiwi", title: "Алма - банан - киви", category: "smoothie", price: 2100 },
  { id: "smoothie-spinach-apple-banana", title: "Шпинат-алма-банан", category: "smoothie", price: 2100 },
  { id: "smoothie-fruit", title: "Жеміс", category: "smoothie", price: 2100 },

  { id: "ice-americano", title: "Ice americano / Айс американо", category: "ice-coffee", price: 1290 },
  { id: "ice-latte", title: "Ice latte / Айс латте", category: "ice-coffee", price: 1290, popular: true },
  { id: "ice-cappuccino", title: "Ice Cappuccino / Айс капучино", category: "ice-coffee", price: 1290 },
  { id: "glasse", title: "Glasse / Гляссе", category: "ice-coffee", price: 1290 },
  { id: "frappe", title: "Frappe / Фраппе", category: "ice-coffee", price: 1290 },
  { id: "oreo-frappe", title: "Oreo Frappe", category: "ice-coffee", price: 1390, popular: true },
  { id: "ice-matcha-mango", title: "Ice matcha mango", category: "ice-coffee", price: 1800 },
  { id: "ice-matcha-strawberry", title: "Ice матча құлпынай / Ice матча клубника", category: "ice-coffee", price: 1700 },

  { id: "tea-black", title: "Қара шай / Черный чай", category: "tea", price: 850 },
  { id: "tea-green", title: "Көк шай / Зеленый чай", category: "tea", price: 850 },
  { id: "tea-jasmine", title: "Жасмин шайы / Jasmine", category: "tea", price: 850 },
  { id: "tea-milk", title: "Сүт қосылған шай / Чай с молоком", category: "tea", price: 900 },
  { id: "tea-tary", title: "Тары шай", category: "tea", price: 1050, popular: true },
  { id: "tea-tashkent", title: "Ташкент шайы / Ташкентский чай", category: "tea", price: 1050 },
  { id: "tea-moroccan", title: "Мароккандық шай / Марокканский чай", category: "tea", price: 1050 },
  { id: "tea-fruit", title: "Жеміс шайы / Фруктовый чай", category: "tea", price: 1050 },
  { id: "tea-berry", title: "Жидекті шай / Ягодный чай", category: "tea", price: 1050 },
  { id: "tea-orange", title: "Апельсинді шай / Апельсин чай", category: "tea", price: 1050 },
  { id: "tea-raspberry-ginger", title: "Таңқурай - зімбірлі шай / Имбирно - малиновый чай", category: "tea", price: 1050 },
  {
    id: "tea-sea-buckthorn-orange",
    title: "Шырғанақ пен апельсин қосылған шай / Облепиховый чай с апельсином",
    category: "tea",
    price: 1050,
  },

  { id: "coca-cola", title: "Coca Cola", category: "drinks", price: 700 },
  { id: "fanta", title: "Fanta", category: "drinks", price: 700 },
  { id: "sprite", title: "Sprite", category: "drinks", price: 700 },
  { id: "borjomi", title: "Borjomi", category: "drinks", price: 900 },
  { id: "bonaqua", title: "BonAqua", category: "drinks", price: 650 },

  { id: "milk", title: "Молоко", category: "addons", price: 250 },
  { id: "honey", title: "Мёд", category: "addons", price: 350 },
  { id: "lemon", title: "Лимон", category: "addons", price: 250 },
  { id: "syrups", title: "Сиропы", category: "addons", price: 250 },

  { id: "pizza-margarita", title: "Пицца Маргарита", category: "pizza", price: 2690 },
  { id: "pizza-pepperoni", title: "Пицца Пепперони", category: "pizza", price: 2990, popular: true },
  { id: "pizza-gogo", title: "Пицца GoGo", category: "pizza", price: 2890, popular: true },
  { id: "pizza-bbq", title: "Пицца BBQ", category: "pizza", price: 2890 },
  { id: "pizza-chicken-mushroom", title: "Пицца тауық пен саңырауқұлақ", category: "pizza", price: 2890 },
  { id: "pizza-bolognese", title: "Пицца Болоньезе", category: "pizza", price: 2890 },
  { id: "pizza-four-seasons", title: "Пицца 4 маусым", category: "pizza", price: 2990 },
  { id: "pizza-sweet", title: "Тәтті пицца", category: "pizza", price: 2890 },

  { id: "burger-gogo", title: "GoGo Burger", category: "burger", price: 1690, popular: true },
  { id: "burger-sweet", title: "Тәтті Бургер", category: "burger", price: 1890 },
  { id: "hot-dog", title: "Хот-дог", category: "hot-dog", price: 1190 },

  { id: "fries", title: "Фри", category: "snacks", price: 690 },
  { id: "fries-sausage", title: "Фри шұжықтармен", category: "snacks", price: 1190 },
  { id: "fries-chicken", title: "Фри тауықпен", category: "snacks", price: 1990 },
  { id: "potato-balls", title: "Картоп шариктері", category: "snacks", price: 1090 },
  { id: "cheese-sticks", title: "Ірімшік таяқшалары 5шт", category: "snacks", price: 1390 },
  { id: "nuggets", title: "Наггеттер 7шт", category: "snacks", price: 1890 },

  { id: "sauce-cheese", title: "Ірімшікті", category: "sauces", price: 350 },
  { id: "sauce-ketchup", title: "Кетчуп", category: "sauces", price: 350 },
  { id: "sauce-bbq", title: "BBQ", category: "sauces", price: 350 },
  { id: "sauce-garlic", title: "Сарымсақты", category: "sauces", price: 350 },

  {
    id: "combo-1",
    title: "КОМБО 1",
    category: "combo",
    price: 1890,
    description: "Фри шұжықтармен + Лимонад",
    badge: "Выгодно",
    popular: true,
  },
  {
    id: "combo-2",
    title: "КОМБО 2",
    category: "combo",
    price: 2290,
    description: "Фри тауықпен + Лимонад",
    badge: "Выгодно",
    popular: true,
  },
  {
    id: "combo-3",
    title: "КОМБО 3",
    category: "combo",
    price: 2390,
    description: "Тәтті Бургер + Кофе 0.4",
    badge: "Выгодно",
    popular: true,
  },
  {
    id: "combo-4",
    title: "КОМБО 4",
    category: "combo",
    price: 2890,
    description: "GoGo Burger + Фри + Кола 0.5",
    badge: "Выгодно",
    popular: true,
  },
  {
    id: "set-1",
    title: "СЕТ 1",
    category: "sets",
    price: 12990,
    description: "Пицца 2шт + Картоп шариктері + Наггеттер 7шт + Лимонад 4шт",
    badge: "Компанияға",
    popular: true,
  },
  {
    id: "set-2",
    title: "СЕТ 2",
    category: "sets",
    price: 6290,
    description: "Пицца 1шт + Ірімшік таяқшалары 5шт + Лимонад 2шт",
    badge: "Компанияға",
    popular: true,
  },
];
