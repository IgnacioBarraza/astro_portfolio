export const languages = {
  en: 'English',
  es: 'Spanish',
}

export const defaultLang = 'en'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      hire: 'Hire Me',
    },
    hero: {
      greetings: 'Hello',
      description:
        'Crafting digital experiences with precision and elegance. Building modern web applications with a focus on performance and design.',
      work: 'View my work',
      cv: 'Download CV',
      downloadCv: 'Choose CV Language',
      cvLang: {
        en: 'English version',
        es: 'Spanish version',
      },
    },
    about: {
      title: 'About',
      title2: 'Me',
      journey: 'My Journey',
      description1:
        'Full Stack Software Engineer with 3+ years of experience building scalable web applications and APIs, with a strong foundation in the TypeScript ecosystem. I work across frontend and backend using Angular, Node.js, Express, and relational databases, with a particular focus on clean API design, efficient data modeling, and maintainable system architecture.',
      description2:
        'I prioritize well-structured solutions that balance technical rigor with real-world constraints. My work is guided by clean and hexagonal architecture principles, aiming for modularity, clarity, and long-term flexibility. I care deeply about code quality, accessibility standards (WCAG), and building systems that remain understandable and evolvable over time.',
      description3:
        'I strongly believe in continuous improvement (Kaizen) and enjoy deepening my backend expertise by exploring system design, databases, and modern backend frameworks such as NestJS. I value learning not as a trend-driven exercise, but as a way to sharpen engineering judgment.',
      description4:
        'My development philosophy is inspired by Wabi-sabi (侘寂): embracing simplicity, imperfection, and gradual refinement. In practice, this means building software that is practical, resilient, and thoughtfully designed—focused on long-term value rather than short-lived perfection.',
      philosophy: 'Personal Philosophy',
      philosophy_desc1:
        'The best code is like a Japanese garden – carefully crafted, balanced, and appears simple despite the complex thought behind it.',
      philosophy_desc2: 'I believe in the Japanese concept of ',
      philosophy_concept: "'Kaizen' (改善)",
      philosophy_desc3:
        ' - continuous improvement. Each project is an opportunity to refine my craft and expand my knowledge.',
      values: 'Core Values',
      value1: 'Quality over Quantity',
      value2: 'Continuous Learning',
      value3: 'User-Centric Design',
      education: 'Education',
      education_grade: 'Bachelor of Computer Science Engineering',
      education_university: 'Universidad de Tarapacá • 2021 - 2025',
      education_focus: 'Focus: Software Engineering',
      interests: 'Interests & Hobbies',
      interest1: 'Game Development',
      interest2: 'Japanese Language (Learning)',
      interest3: 'Robotics',
      interest4: 'Anime & Manga',
    },
    workExperience: {
      title: 'Work ',
      title2: 'Experience',
      achievements: 'Key Achievements',
      jobs: [
        {
          title: 'Full Stack Developer',
          company: 'MapVX',
          company_website: 'https://www.mapvx.com',
          location: 'Santiago, CL - Remote',
          period: 'Feb 2023 – Present',
          description:
            'Full Stack Developer at MapVX with end-to-end ownership of bug resolution and feature delivery. I act as the technical entry point for issues and feature requests reported by the Customer Success team, evaluating, prioritizing, and estimating work before implementation. I develop solutions across frontend and backend, ensuring code quality, maintainability, and alignment with real business needs.',
          achievements: [
            'Took full ownership of the bug and feature lifecycle, from initial report and technical analysis to production release.',
            'Built and maintained user-centric, accessible interfaces using Angular, following WCAG standards.',
            'Designed and implemented backend services using Node.js, TypeScript, PostgreSQL, and Firebase to support real-time and data-intensive features.',
            'Collaborated with technical leadership and product stakeholders on prioritization, technical estimations, and architectural improvements.',
            'Optimized database queries and data flows, improving platform performance and reliability.',
            'Worked closely with Customer Success, Product, and Design teams to deliver high-impact solutions.',
          ],
          technologies: [
            'Angular',
            'TypeScript',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Firebase',
            'TypeORM',
            'Docker',
            'Git',
            'Jira',
            'Figma',
          ],
        },

        {
          title: 'University Teaching Assistant',
          company: 'Universidad de Tarapacá',
          company_website: 'https://www.uta.cl/index.php/sede-iquique/',
          location: 'Iquique, CL - Presential',
          period: 'Mar 2024 - Dec 2024',
          description:
            'Teaching Assistant supporting undergraduate courses including Databases, ICTs, and Introduction to Project Formulation. Assisted professors by grading assignments, answering student questions, and supporting hands-on workshops focused on software fundamentals, database design, robotics, and process modeling.',
          achievements: [
            'Supported students in programming, OOP, and web development fundamentals.',
            'Guided practical exercises in SQL and relational database design.',
            'Assisted robotics workshops involving hardware integration and low-level programming.',
            'Participated in and facilitated collaborative academic projects with students.',
          ],
          technologies: [
            'Java',
            'MySQL',
            'PostgreSQL',
            'Arduino',
            'C/C++',
            'BPMN',
            'Bizagi',
            'SQL',
          ],
        },

        {
          title: 'Intern, Backend Developer',
          company: 'MapVX',
          company_website: 'https://www.mapvx.com',
          location: 'Santiago, CL - Remote',
          period: 'Jan 2025 - Feb 2025',
          description:
            'Backend Developer Intern focused on designing and implementing RESTful APIs within a scalable architecture. Worked on request validation, metadata handling, and relational database integration using Node.js, TypeScript, and PostgreSQL.',
          achievements: [
            'Designed and implemented RESTful endpoints following best practices.',
            'Developed backend services using Node.js, Express, and TypeScript.',
            'Improved performance through database query optimization.',
            'Applied clean and layered architecture principles to ensure scalability and maintainability.',
          ],
          technologies: [
            'Node.js',
            'TypeScript',
            'PostgreSQL',
            'Docker',
            'TypeORM',
            'Express',
          ],
        },

        {
          title: 'Intern, Frontend Developer',
          company: 'MapVX',
          company_website: 'https://www.mapvx.com',
          location: 'Santiago, CL - Remote',
          period: 'Jan 2024',
          description:
            'Frontend Developer Intern responsible for building a metrics dashboard and integrating Firebase for real-time data visualization. Focused on tracking user and application metrics to support data-driven decision-making.',
          achievements: [
            'Developed a metrics dashboard using Angular and TypeScript.',
            'Integrated Firebase to enable real-time data synchronization.',
            'Collaborated with UX designers to improve clarity and user engagement.',
            'Applied responsive design principles to ensure cross-device compatibility.',
          ],
          technologies: [
            'Angular',
            'TypeScript',
            'Bootstrap',
            'Firebase',
            'Chart.js',
          ],
        },
      ],
    },
    skill: {
      title: 'Skills',
      title2: ' & Technologies',
      subtitle:
        'A comprehensive toolkit built through years of hands-on experience and continuous learning in the ever-evolving tech landscape.',
      skills: [
        {
          title: 'Frontend',
          skills: [
            'Angular',
            'React',
            'TypeScript',
            'Next.js',
            'Tailwind CSS',
            'Bootstrap',
            'Astro',
          ],
        },
        {
          title: 'Backend',
          skills: [
            'Node.js',
            'TypeORM',
            'Express',
            'Firebase',
            'PostgreSQL',
            'MongoDB',
          ],
        },
        {
          title: 'Tools & DevOps',
          skills: ['Git', 'Jest', 'Linux', 'Docker', 'CI/CD', 'Nginx'],
        },
        {
          title: 'Programming Languages',
          skills: ['Javascript', 'TypeScript', 'Java', 'Python'],
        },
      ],
      highlights: [
        {
          title: 'Problem Solving',
          description:
            'Analytical thinking and creative solutions to complex technical challenges',
          icon: '🧩',
        },
        {
          title: 'Quick Adaptability',
          description:
            'Ability to quickly integrate into new teams and adapt to different workflows and environments',
          icon: '⚡',
        },
        {
          title: 'Continuous Learning',
          description:
            'Always staying updated with the latest technologies and best practices',
          icon: '📚',
        },
      ],
    },
    project: {
      title: 'Featured ',
      title2: 'Projects',
      subtitle:
        'A selection of projects that showcase my technical skills, problem-solving abilities, and passion for creating impactful solutions.',
      github: 'View All Projects on GitHub',
      code: 'Code',
      liveDemo: 'Live Demo',
      comingSoon: 'Coming Soon...',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      hire: 'Contrátame',
    },
    hero: {
      greetings: 'Hola',
      description:
        'Creando experiencias digitales con precisión y elegancia. Desarrollando aplicaciones web modernas con un enfoque en el rendimiento y el diseño.',
      work: 'Ver mi trabajo',
      cv: 'Descargar CV',
      downloadCv: 'Elije el idioma del CV',
      cvLang: {
        en: 'Version ingles',
        es: 'Version español',
      },
    },
    about: {
      title: 'Sobre',
      title2: 'Mí',
      journey: 'Mi Trayectoria',
      description1:
        'Ingeniero de Software Full Stack con más de 3 años de experiencia construyendo aplicaciones web y APIs escalables, con una sólida base en el ecosistema TypeScript. Trabajo tanto en frontend como en backend utilizando Angular, Node.js, Express y bases de datos relacionales, con un enfoque especial en el diseño limpio de APIs, modelado eficiente de datos y arquitecturas de sistemas mantenibles.',
      description2:
        'Priorizo soluciones bien estructuradas que equilibran el rigor técnico con las restricciones del mundo real. Mi trabajo se guía por principios de arquitectura limpia y hexagonal, buscando modularidad, claridad y flexibilidad a largo plazo. Me importa profundamente la calidad del código, los estándares de accesibilidad (WCAG) y construir sistemas que sigan siendo comprensibles y evolutivos con el tiempo.',
      description3:
        'Creo firmemente en la mejora continua (Kaizen) y disfruto profundizar mi experiencia en backend explorando diseño de sistemas, bases de datos y frameworks modernos como NestJS. Valoro el aprendizaje no como una moda, sino como una forma de afinar el criterio ingenieril.',
      description4:
        'Mi filosofía de desarrollo está inspirada en el concepto japonés Wabi-sabi (侘寂): abrazar la simplicidad, la imperfección y la mejora gradual. En la práctica, esto se traduce en crear software práctico, resiliente y cuidadosamente diseñado, enfocado en el valor a largo plazo más que en una perfección efímera.',
      philosophy: 'Filosofía Personal',
      philosophy_desc1:
        'El mejor código es como un jardín japonés: cuidadosamente diseñado, equilibrado y aparentemente simple, a pesar de la complejidad del pensamiento que hay detrás.',
      philosophy_desc2: 'Creo en el concepto japonés de ',
      philosophy_concept: "'Kaizen' (改善)",
      philosophy_desc3:
        ' — mejora continua. Cada proyecto es una oportunidad para refinar mi oficio y expandir mi conocimiento.',
      values: 'Valores Fundamentales',
      value1: 'Calidad por sobre Cantidad',
      value2: 'Aprendizaje Continuo',
      value3: 'Diseño Centrado en el Usuario',
      education: 'Educación',
      education_grade: 'Ingeniería Civil en Informática',
      education_university: 'Universidad de Tarapacá • 2021 - 2025',
      education_focus: 'Enfoque: Ingeniería de Software',
      interests: 'Intereses y Hobbies',
      interest1: 'Desarrollo de Videojuegos',
      interest2: 'Idioma Japonés (Aprendizaje)',
      interest3: 'Robótica',
      interest4: 'Anime y Manga',
    },
    workExperience: {
      title: 'Experiencia ',
      title2: 'Laboral',
      achievements: 'Principales Logros',
      jobs: [
        {
          title: 'Full Stack Developer',
          company: 'MapVX',
          company_website: 'https://www.mapvx.com',
          location: 'Santiago, CL - Remoto',
          period: 'Feb 2023 - Actualidad',
          description:
            'Full Stack Developer en MapVX con responsabilidad end-to-end sobre el ciclo de vida de bugs y nuevas funcionalidades. Actúo como punto de entrada técnico para reportes provenientes del área de Customer Success, evaluando, priorizando y estimando incidencias y features antes de su implementación. Además, desarrollo soluciones tanto en frontend como backend, asegurando calidad, mantenibilidad y alineación con las necesidades reales del negocio.',
          achievements: [
            'Asumí ownership completo del flujo de bugs y nuevas funcionalidades, desde el reporte inicial hasta la entrega en producción.',
            'Diseñé y desarrollé interfaces accesibles y centradas en el usuario utilizando Angular, siguiendo estándares WCAG.',
            'Implementé y mantuve servicios backend con Node.js, TypeScript, PostgreSQL y Firebase, soportando procesamiento de datos en tiempo real.',
            'Participé en la definición de prioridades, estimaciones técnicas y mejoras de arquitectura en conjunto con liderazgo técnico y producto.',
            'Optimicé consultas y flujos de datos, mejorando el rendimiento y la estabilidad de la plataforma.',
            'Colaboré estrechamente con equipos de Customer Success, Producto y Diseño para entregar soluciones de alto impacto.',
          ],
          technologies: [
            'Angular',
            'TypeScript',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Firebase',
            'TypeORM',
            'Docker',
            'Git',
            'Jira',
            'Figma',
          ],
        },
        {
          title: 'Ayudante de Cátedra Universitario',
          company: 'Universidad de Tarapacá',
          company_website: 'https://www.uta.cl/index.php/sede-iquique/',
          location: 'Iquique, CL - Presencial',
          period: 'Mar 2024 - Dic 2024',
          description:
            'Ayudante de cátedra apoyando cursos de pregrado como Bases de Datos, TICs e Introducción a la Formulación de Proyectos. Apoyé a los docentes en la corrección de evaluaciones, resolución de dudas y en talleres prácticos enfocados en fundamentos de software, diseño de bases de datos, robótica y modelado de procesos.',
          achievements: [
            'Apoyé a estudiantes en fundamentos de programación, POO y desarrollo web.',
            'Guié ejercicios prácticos de SQL y diseño de bases de datos relacionales.',
            'Asistí en talleres de robótica con integración de hardware y programación.',
            'Participé y facilité proyectos académicos colaborativos con estudiantes.',
          ],
          technologies: [
            'Java',
            'MySQL',
            'PostgreSQL',
            'Arduino',
            'C/C++',
            'BPMN',
            'Bizagi',
            'SQL',
          ],
        },
        {
          title: 'Practicante, Backend Developer',
          company: 'MapVX',
          company_website: 'https://www.mapvx.com',
          location: 'Santiago, CL - Remoto',
          period: 'Ene 2025 - Feb 2025',
          description:
            'Practicante de Backend enfocado en el diseño e implementación de APIs RESTful dentro de una arquitectura escalable. Trabajé en validación de solicitudes, manejo de metadatos e integración con bases de datos relacionales utilizando Node.js, TypeScript y PostgreSQL.',
          achievements: [
            'Diseñé e implementé endpoints RESTful siguiendo buenas prácticas.',
            'Desarrollé servicios backend utilizando Node.js, Express y TypeScript.',
            'Mejoré el rendimiento mediante la optimización de consultas a base de datos.',
            'Apliqué principios de arquitectura limpia y en capas para asegurar mantenibilidad y escalabilidad.',
          ],
          technologies: [
            'Node.js',
            'TypeScript',
            'PostgreSQL',
            'Docker',
            'TypeORM',
            'Express',
          ],
        },
        {
          title: 'Practicante, Frontend Developer',
          company: 'MapVX',
          company_website: 'https://www.mapvx.com',
          location: 'Santiago, CL - Remoto',
          period: 'Ene 2024',
          description:
            'Practicante de Frontend responsable del desarrollo de un dashboard de métricas e integración con Firebase para visualización de datos en tiempo real. Enfocado en el seguimiento de métricas de usuarios y de la aplicación para apoyar la toma de decisiones basada en datos.',
          achievements: [
            'Desarrollé un dashboard de métricas utilizando Angular y TypeScript.',
            'Integré Firebase para habilitar sincronización de datos en tiempo real.',
            'Colaboré con el equipo de UX para mejorar la claridad y el engagement del usuario.',
            'Apliqué principios de diseño responsivo para asegurar compatibilidad entre dispositivos.',
          ],
          technologies: [
            'Angular',
            'TypeScript',
            'Bootstrap',
            'Firebase',
            'Chart.js',
          ],
        },
      ],
    },
    skill: {
      title: 'Habilidades',
      title2: ' & Tecnologías',
      subtitle:
        'Un conjunto de herramientas integral construido a través de años de experiencia práctica y aprendizaje continuo en un ecosistema tecnológico en constante evolución.',
      skills: [
        {
          title: 'Frontend',
          skills: [
            'Angular',
            'React',
            'TypeScript',
            'Next.js',
            'Tailwind CSS',
            'Bootstrap',
            'Astro',
          ],
        },
        {
          title: 'Backend',
          skills: [
            'Node.js',
            'TypeORM',
            'Express',
            'Firebase',
            'PostgreSQL',
            'MongoDB',
          ],
        },
        {
          title: 'Herramientas & DevOps',
          skills: ['Git', 'Jest', 'Linux', 'Docker', 'CI/CD', 'Nginx'],
        },
        {
          title: 'Lenguajes de Programación',
          skills: ['JavaScript', 'TypeScript', 'Java', 'Python'],
        },
      ],
      highlights: [
        {
          title: 'Resolución de Problemas',
          description:
            'Pensamiento analítico y soluciones creativas para desafíos técnicos complejos',
          icon: '🧩',
        },
        {
          title: 'Adaptabilidad Rápida',
          description:
            'Capacidad para integrarme rápidamente en nuevos equipos y adaptarme a distintos flujos de trabajo y entornos',
          icon: '⚡',
        },
        {
          title: 'Aprendizaje Continuo',
          description:
            'Mantenerme siempre actualizado con las últimas tecnologías y buenas prácticas',
          icon: '📚',
        },
      ],
    },
    project: {
      title: 'Proyectos ',
      title2: 'Destacados',
      subtitle:
        'Una selección de proyectos que demuestran mis habilidades técnicas, capacidad de resolución de problemas y pasión por crear soluciones con impacto.',
      github: 'Ver todos los proyectos en GitHub',
      code: 'Código',
      liveDemo: 'Demo en vivo',
      comingSoon: 'Próximamente...',
    },
  },
}
