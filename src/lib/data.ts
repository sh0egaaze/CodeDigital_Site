
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  features: string[];
  timeframe?: string;
  badge?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  image: string;
  client: string;
  tags: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const services: Service[] = [
  {
    id: "website-development",
    title: "Разработка сайтов",
    description: "Создание современных и отзывчивых веб-сайтов для вашего бизнеса",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    price: 20000,
    originalPrice: 30000,
    features: [
      "Адаптивный дизайн",
      "SEO оптимизация",
      "Высокая производительность",
      "Современный стек технологий",
      "Административная панель"
    ],
    timeframe: "2-4 недели",
    badge: "Популярное"
  }, 

  {
    id: "mini-app",
    title: "Mini Apps",
    description: "Разработка мини-приложений для платформ и мессенджеров",
    image: "https://i.imgur.com/57tAZoo.jpeg",
    price: 30000,
    features: [
      "Интеграция с платформами",
      "Легкий вес",
      "Быстрая загрузка",
      "Функциональный интерфейс",
      "Аналитика использования"
    ],
    timeframe: "2-3 недели",
    badge: "Популярное"
  },

  {
    id: "telegram-bot",
    title: "Телеграм боты",
    description: "Разработка функциональных и интерактивных ботов для Telegram",
    image: "https://i.pinimg.com/736x/81/5a/79/815a7960cf85d673b12af945a8ca88ce.jpg",
    price: 10000,
    features: [
      "Интеграция с API",
      "Обработка сообщений",
      "Интерактивные команды",
      "Уведомления и рассылки",
      "Аналитика использования"
    ],
    timeframe: "1-2 недели"
  },
  {
    id: "design-services",
    title: "Дизайн",
    description: "Создание уникального и современного дизайна для вашего проекта",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    price: 10000,
    features: [
      "UI/UX дизайн",
      "Брендинг",
      "Графический дизайн",
      "Маркетинговые материалы",
      "Прототипирование"
    ],
    timeframe: "1-3 недели"
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "project-1",
    title: "Персональный сайт артиста",
    description: "Разработка стильного персонального сайта для танцора и вокалистки Марии Манукян с адаптивным дизайном и удобной навигацией",
    image: "public/lovable-uploads/3b817792-1e30-47aa-a9cd-f99d030c4e22.png",
    client: "Мария Манукян",
    tags: ["Веб-разработка", "Дизайн", "Лендинг"],
    link: "https://maria-manukyan-site.vercel.app"
  },
  {
    id: "project-2",
    title: "Сервис доставки еды",
    description: "Создание современного сайта для доставки ресторанной еды с возможностью онлайн-заказа и интеграцией Telegram авторизации",
    image: "public/lovable-uploads/57f9f69e-aa8e-45ab-b818-e10e309381ad.png",
    client: "Exquisite Cuisine",
    tags: ["Веб-разработка", "eCommerce", "UI/UX"]
  },
  {
    id: "project-3",
    title: "Telegram бот для команды",
    description: "Разработка функционального Telegram бота для управления командными задачами и организации мероприятий с уведомлениями",
    image: "public/lovable-uploads/d9578d25-667c-426e-9bb2-95c2ee015647.png",
    client: "ШАББ",
    tags: ["Телеграм Бот", "API", "NodeJS"],
    link: "https://t.me/SHABBhub_bot"
  },
  {
    id: "project-4",
    title: "Сайт художественного музея",
    description: "Дизайн и разработка элегантного веб-сайта для музея с каталогом экспонатов и виртуальными турами по коллекциям",
    image: "public/lovable-uploads/212fd1ff-15e3-42eb-99b8-2ed9cf5fa14d.png",
    client: "Museum of Ancient Art",
    tags: ["Веб-разработка", "Дизайн", "UI/UX"]
  },
  {
    id: "project-5",
    title: "Telegram Mini App для финансов",
    description: "Разработка Telegram Mini App для выбора и оформления кредитных карт с интеграцией API банков и системой уведомлений",
    image: "public/lovable-uploads/713437c2-183b-43da-8a54-655cc0f7e78b.png",
    client: "FinTech Solutions",
    tags: ["Mini App", "Telegram", "API"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Мария Манукян",
    company: "Артист",
    text: "Я в полном восторге от своего сайта! Ребята из CodeDigital сделали всё просто идеально — сайт получился стильным, удобным и именно таким, как я хотела. Теперь я могу легко делиться своим творчеством, и всё работает просто отлично. Спасибо им огромное!",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Александр Васильев",
    company: "Exquisite Cuisine",
    text: "Наш сервис доставки еды теперь просто огонь! Сделали новый сайт. Людям понравилось, клиентов стало больше. А команда CodeDigital — молодцы, всё сделали чётко и без заморочек",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Игорь Соколов",
    company: "ШАББ",
    text: "Наш Telegram-бот — просто находка! Он сильно упростил работу: уведомления приходят вовремя, разобраться в нём может любой. Ребята из CodeDigital сделали всё круто, советую их всем, кто хочет что-то подобное! ",
    rating: 4
  },
  {
    id: "testimonial-4",
    name: "Екатерина Орлова",
    company: "Museum of Ancient Art",
    text: "Сайт для нашего музея получился просто шикарно! Дизайн красивый, всё подчеркивает наши экспонаты, а виртуальные туры — это вообще восторг. Спасибо CodeDigital за то, что помогли нам шагнуть в цифровую эпоху!",
    rating: 5
  },
  {
    id: "testimonial-5",
    name: "Дмитрий Морозов",
    company: "FinTech Solutions",
    text: "Сделать Telegram Mini App для финансов было непросто, но CodeDigital справились на отлично! Приложение работает быстро, всё хорошо связано с банками, и пользователям всё нравится. Ребята — молодцы!",
    rating: 5
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Загарий Денис",
    role: "CEO / Разработчик",
    bio: "Денис один из основателей CodeDigital с целью помогать бизнесам успешно реализовывать цифровую трансформацию. Имеет более 3-х лет опыта в IT-индустрии.",
    image: "/lovable-uploads/2025-03-10 23.13.57.jpg",
    social: {
      twitter: "https://www.instagram.com/cvv_kkll?igsh=MXcxeHUzY2ttdmx0aw%3D%3D&utm_source=qr",
      github: "https://github.com/getshhh"
    }
  },
  {
    id: "team-2",
    name: "Комиссаров Кирилл",
    role: "CEO / Ведущий дизайнер / Разработчик",
    bio: "Кирилл отвечает за визуальную составляющую всех проектов. Его работы отличаются креативностью и вниманием к деталям.",
    image: "/lovable-uploads/2025-03-10 23.14.35.jpg",
    social: {
    }
  },
  {
    id: "team-3",
    name: "Соколов Арсений",
    role: "CEO / Главный разработчик",
    bio: "Арсений специализируется на создании высокопроизводительных и масштабируемых веб-приложений. Эксперт в современных фреймворках и технологиях.",
    image: "/lovable-uploads/2025-03-10 23.14.20.jpg",
    social: {
    }
  },
  {
    id: "team-4",
    name: "Анна Козлова",
    role: "Менеджер проектов",
    bio: "Анна обеспечивает своевременную и качественную реализацию всех проектов. Имеет сертификаты по управлению проектами и agile-методологиям.",
    image: "https://cdn-icons-png.freepik.com/512/15675/15675951.png?ga=GA1.1.1624693863.1740912206",
    social: {

    }
  }
];