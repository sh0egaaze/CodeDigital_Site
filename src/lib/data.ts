
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
  avatar: string;
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
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
    price: 50000,
    originalPrice: 65000,
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
    id: "telegram-bot",
    title: "Телеграм боты",
    description: "Разработка функциональных и интерактивных ботов для Telegram",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c2a1c?auto=format&fit=crop&q=80&w=800",
    price: 30000,
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
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    price: 25000,
    features: [
      "UI/UX дизайн",
      "Брендинг",
      "Графический дизайн",
      "Маркетинговые материалы",
      "Прототипирование"
    ],
    timeframe: "1-3 недели"
  },
  {
    id: "mini-app",
    title: "Mini Apps",
    description: "Разработка мини-приложений для платформ и мессенджеров",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800",
    price: 40000,
    features: [
      "Интеграция с платформами",
      "Легкий вес",
      "Быстрая загрузка",
      "Функциональный интерфейс",
      "Аналитика использования"
    ],
    timeframe: "2-3 недели",
    badge: "Новое"
  }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "project-food-delivery",
    title: "Сервис доставки еды",
    description: "Разработка веб-сайта для премиального сервиса доставки ресторанной еды. Интеграция с платежными системами и CRM рестораторов.",
    image: "/lovable-uploads/57f9f69e-aa8e-45ab-b818-e10e309381ad.png",
    client: "GourmetExpress",
    tags: ["Веб-разработка", "eCommerce", "UI/UX"],
    link: "#"
  },
  {
    id: "project-museum",
    title: "Сайт музея искусств",
    description: "Редизайн и разработка современного веб-сайта для музея древнего искусства с виртуальными турами и каталогом экспонатов.",
    image: "/lovable-uploads/212fd1ff-15e3-42eb-99b8-2ed9cf5fa14d.png",
    client: "LOUVRE",
    tags: ["Дизайн", "Веб-разработка", "Культура"],
    link: "#"
  },
  {
    id: "project-fintech-bot",
    title: "Telegram бот для финтех сервиса",
    description: "Разработка функционального Telegram бота для подбора банковских карт и кредитных предложений с персонализированными рекомендациями.",
    image: "/lovable-uploads/713437c2-183b-43da-8a54-655cc0f7e78b.png",
    client: "FinanceHelper",
    tags: ["Telegram Бот", "Финтех", "API"]
  },
  {
    id: "project-task-bot",
    title: "Корпоративный бот для команд",
    description: "Создание бота для управления командными задачами и организации корпоративных мероприятий с геймификацией.",
    image: "/lovable-uploads/d9578d25-667c-426e-9bb2-95c2ee015647.png",
    client: "ШАББ",
    tags: ["Telegram Бот", "Команды", "Геймификация"]
  },
  {
    id: "project-portfolio",
    title: "Персональный сайт-портфолио",
    description: "Разработка элегантного персонального сайта-портфолио для модели и танцора с возможностью ведения блога и формой обратной связи.",
    image: "/lovable-uploads/3b817792-1e30-47aa-a9cd-f99d030c4e22.png",
    client: "Мария Манукян",
    tags: ["Веб-разработка", "Портфолио", "Персональный бренд"],
    link: "#"
  },
  {
    id: "project-1",
    title: "Интернет-магазин электроники",
    description: "Разработка современного e-commerce сайта с интеграцией платежных систем и управлением складом",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    client: "TechStore",
    tags: ["Веб-разработка", "eCommerce", "React"],
    link: "#"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Александр Петров",
    company: "GourmetExpress",
    text: "CodeDigital превзошли все ожидания! Наш сервис доставки еды получил не только красивый и функциональный сайт, но и значительное увеличение конверсии. Клиенты отмечают удобство интерфейса и скорость работы.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Елена Добрынина",
    company: "LOUVRE",
    text: "Мы искали команду, которая поможет реализовать современный, но в то же время классический дизайн для нашего музея. CodeDigital справились на отлично! Особенно впечатлила их способность сочетать инновации с традициями.",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Роман Викторов",
    company: "FinanceHelper",
    text: "Наш Telegram-бот для подбора финансовых продуктов работает безупречно и уже помог увеличить количество одобренных заявок на 40%. Техническая реализация на высшем уровне, а сопровождение выше всяких похвал!",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    rating: 5
  },
  {
    id: "testimonial-4",
    name: "Ольга Шаблинская",
    company: "ШАББ",
    text: "Бот для нашей команды стал незаменимым инструментом. Организация задач и командных активностей теперь происходит в 3 раза быстрее, а геймификация добавила мотивации сотрудникам. Рекомендую CodeDigital!",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    rating: 5
  },
  {
    id: "testimonial-5",
    name: "Мария Манукян",
    company: "Танцор и модель",
    text: "Моё портфолио выглядит именно так, как я мечтала. Элегантно, современно и полностью отражает мою индивидуальность. Каждая деталь проработана, а мобильная версия работает идеально. Спасибо команде CodeDigital!",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 5
  },
  {
    id: "testimonial-6",
    name: "Сергей Тимофеев",
    company: "TechStore",
    text: "Интернет-магазин, разработанный CodeDigital, значительно увеличил наши продажи. Удобный интерфейс, быстрая работа и отличная оптимизация для поисковых систем. Продолжаем сотрудничество по развитию проекта!",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Александр Иванов",
    role: "CEO / Основатель",
    bio: "Александр основал CodeDigital с целью помогать бизнесам успешно реализовывать цифровую трансформацию. Имеет более 10 лет опыта в IT-индустрии.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "team-2",
    name: "Екатерина Смирнова",
    role: "Ведущий дизайнер",
    bio: "Екатерина отвечает за визуальную составляющую всех проектов. Её работы отличаются креативностью и вниманием к деталям.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    social: {
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: "team-3",
    name: "Михаил Петров",
    role: "Главный разработчик",
    bio: "Михаил специализируется на создании высокопроизводительных и масштабируемых веб-приложений. Эксперт в современных фреймворках и технологиях.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    social: {
      github: "#",
      linkedin: "#"
    }
  },
  {
    id: "team-4",
    name: "Анна Козлова",
    role: "Менеджер проектов",
    bio: "Анна обеспечивает своевременную и качественную реализацию всех проектов. Имеет сертификаты по управлению проектами и agile-методологиям.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    social: {
      linkedin: "#"
    }
  }
];
