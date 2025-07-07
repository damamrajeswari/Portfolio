export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern UI and secure payment integration.",
    longDescription: "Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, order management, and secure payment processing. Implemented with React, Node.js, and MongoDB.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    githubUrl: "https://github.com/damamrajeswari",
    liveUrl: "https://example-ecommerce.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    longDescription: "Developed a real-time task management application with drag-and-drop functionality, team collaboration features, and progress tracking. Built using React, Socket.io, and PostgreSQL.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/damamrajeswari",
    liveUrl: "https://example-taskapp.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts and interactive maps.",
    longDescription: "Created a comprehensive weather dashboard featuring current conditions, 7-day forecasts, interactive maps, and location-based weather alerts. Integrated with multiple weather APIs for accurate data.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "JavaScript", "Weather API", "Chart.js", "CSS3"],
    githubUrl: "https://github.com/damamrajeswari",
    liveUrl: "https://example-weather.com",
    featured: false
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization.",
    longDescription: "Built a comprehensive social media analytics dashboard with real-time data visualization, engagement metrics, and automated reporting features. Integrated with multiple social media APIs.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Python", "Django", "D3.js", "Redis"],
    githubUrl: "https://github.com/damamrajeswari",
    featured: false
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "Educational platform with course management, progress tracking, and interactive content.",
    longDescription: "Developed a complete learning management system with course creation tools, student progress tracking, interactive quizzes, and video streaming capabilities. Built for scalability and user engagement.",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS S3", "WebRTC"],
    githubUrl: "https://github.com/damamrajeswari",
    liveUrl: "https://example-lms.com",
    featured: true
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Personal portfolio website with modern design and smooth animations.",
    longDescription: "Designed and developed a responsive portfolio website featuring smooth animations, dark mode toggle, and optimized performance. Built with modern web technologies and best practices.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/damamrajeswari",
    liveUrl: "https://rajeswari-portfolio.com",
    featured: false
  }
];