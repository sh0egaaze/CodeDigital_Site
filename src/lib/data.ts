
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
    id: "project-1",
    title: "Интернет-магазин электроники",
    description: "Разработка современного e-commerce сайта с интеграцией платежных систем и управлением складом",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    client: "TechStore",
    tags: ["Веб-разработка", "eCommerce", "React"],
    link: "#"
  },
  {
    id: "project-2",
    title: "Бот для доставки еды",
    description: "Телеграм бот для заказа еды с интеграцией с CRM-системой ресторана",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c2a1c?auto=format&fit=crop&q=80&w=800",
    client: "FoodDelivery",
    tags: ["Telegram Бот", "API", "NodeJS"]
  },
  {
    id: "project-3",
    title: "Редизайн корпоративного сайта",
    description: "Полный ребрендинг и редизайн корпоративного сайта финансовой компании",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    client: "Finance Pro",
    tags: ["Дизайн", "UI/UX", "Брендинг"],
    link: "#"
  },
  {
    id: "project-4",
    title: "Мини-приложение для конференции",
    description: "Mini App для участников конференции с расписанием, картой и уведомлениями",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    client: "ConferenceHub",
    tags: ["Mini App", "React Native", "Firebase"]
  },
  {
    id: "project-5",
    title: "Корпоративный портал",
    description: "Внутренний портал для сотрудников компании с интеграцией корпоративных систем",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
    client: "Corporate Solutions",
    tags: ["Веб-разработка", "React", "NodeJS"]
  },
  {
    id: "project-6",
    title: "Лендинг для нового продукта",
    description: "Дизайн и разработка лендинга для запуска нового продукта на рынок",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
    client: "ProductLaunch",
    tags: ["Лендинг", "UI/UX", "Маркетинг"],
    link: "#"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Алексей Петров",
    company: "TechStore",
    text: "Команда CodeDigital превзошла все наши ожидания. Они не только разработали прекрасный сайт, но и предложили множество ценных идей для улучшения UX. Сроки были соблюдены, а результат превзошел ожидания.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Елена Смирнова",
    company: "FoodDelivery",
    text: "Работа с CodeDigital была очень приятной. Профессиональный подход, быстрые ответы на вопросы и, что самое важное, высококачественный результат. Наш телеграм-бот работает безупречно.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Дмитрий Ковалев",
    company: "Finance Pro",
    text: "Редизайн нашего сайта был выполнен на высшем уровне. Внимание к деталям и понимание нашего бренда сделали результат именно таким, как мы хотели. Рекомендую эту команду всем!",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4
  },
  {
    id: "testimonial-4",
    name: "Марина Иванова",
    company: "ConferenceHub",
    text: "Мини-приложение, разработанное CodeDigital для нашей конференции, стало незаменимым инструментом для всех участников. Интуитивный интерфейс и безупречная работа приложения получили множество положительных отзывов.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5
  },
  {
    id: "testimonial-5",
    name: "Сергей Николаев",
    company: "Corporate Solutions",
    text: "Мы сотрудничаем с CodeDigital уже более двух лет. За это время они стали надежным партнером, который всегда готов помочь и предложить оптимальное решение. Качество их работы всегда на высоте.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 5
  },
  {
    id: "testimonial-6",
    name: "Ольга Кузнецова",
    company: "ProductLaunch",
    text: "Лендинг, созданный для запуска нашего продукта, помог нам привлечь внимание целевой аудитории и увеличить продажи. Спасибо команде CodeDigital за креативность и профессионализм!",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 4
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
