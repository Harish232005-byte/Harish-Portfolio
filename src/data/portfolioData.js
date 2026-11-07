export const portfolioData = {
  personal: {
    name: "HARISH S",
    title: "AI & Data Science Professional",
    email: "kanishharish0@gmail.com",
    phone: "+91 9342771507",
    linkedin: "https://www.linkedin.com/in/harish2005",
    github: "https://github.com/Harish232005-byte", 
    location: "Tamil Nadu, India",
    summary: "Aspiring Data Science professional pursuing an M.Sc. in Artificial Intelligence & Data Science with knowledge of Python, SQL, Data Analysis, Machine Learning, and Data Visualization. Gained practical experience through Python development and web-based projects, including API integration and data scraping. Seeking an opportunity to apply technical skills, develop industry experience, and contribute to data-driven solutions.",
    photo: "/profile.jpg",
    resume: "/resume.pdf"
  },
  skills: [
    {
      category: "Machine Learning & AI",
      items: ["Machine Learning", "Artificial Intelligence", "Data Preprocessing", "Predictive Analytics", "Natural Language Processing (NLP)", "Computer Vision (OpenCV)", "XGBoost", "Random Forest"]
    },
    {
      category: "Programming Languages",
      items: ["Python", "SQL", "JavaScript"]
    },
    {
      category: "Data Science & Analytics",
      items: ["Data Analysis", "Exploratory Data Analysis", "Statistical Analysis", "Time Series Forecasting (ARIMA)", "Inventory Optimization"]
    },
    {
      category: "Data Visualization",
      items: ["Power BI", "Tableau", "Matplotlib", "Plotly"]
    },
    {
      category: "Databases",
      items: ["SQL", "Database Management", "MySQL"]
    },
    {
      category: "Tools & Frameworks",
      items: ["Streamlit", "Flask", "Django REST Framework", "React.js", "Jupyter Notebook", "Git & GitHub", "Microsoft Excel"]
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Analytical Thinking", "Time Management", "Willingness to Learn", "Team Collaboration"]
    }
  ],
  education: [
    {
      degree: "M.Sc. Artificial Intelligence & Data Science",
      institution: "Karunya Institute of Technology and Sciences",
      location: "Coimbatore",
      duration: "2025–2027",
      cgpa: "8.65 / 10"
    },
    {
      degree: "B.Com. Business Analytics",
      institution: "Bishop Heber College",
      location: "Tiruchirappalli",
      duration: "2023–2025",
      cgpa: "7.0 / 10"
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "Rasi Matric Higher Secondary School",
      location: "Salem",
      duration: "",
      cgpa: "89%"
    }
  ],
  experience: [
    {
      role: "Python Development Intern",
      company: "TecnolynxGlobal Private Limited",
      duration: "Jun 2026",
      isInternship: true,
      points: [
        "Developed a keyword-based web data scraper and insight generator using React.js and Django REST Framework.",
        "Gained practical experience in Python development, API integration, debugging, and data processing.",
        "Strengthened problem-solving and collaborative software development skills."
      ]
    }
  ],
  projects: [
    {
      title: "Verity: News Credibility & Misinformation Analyzer",
      category: "NLP & Explainable AI",
      description: "An end-to-end NLP web platform engineered to critically assess the veracity and journalistic integrity of news stories, public claims, and web articles.",
      techStack: ["Python", "Flask REST API", "Scikit-learn", "TF-IDF", "NLTK", "VADER", "BeautifulSoup"],
      githubUrl: "https://github.com/Harish232005-byte/VERITY-NEWS-CREDIBILTY-AND-MISINFORMATION",
      featured: true,
      points: [
        "Engineered an NLP model achieving 98.1% accuracy and F1-score across 10,160 ISOT news articles.",
        "Built automated article scraping with stylometric profiling and Flesch reading ease scoring.",
        "Integrated Explainable AI (XAI) token-level attribution to visualize manipulative cues, credibility scores, and sentiment distribution."
      ]
    },
    {
      title: "Supply Chain Demand Forecasting — MLOps Platform",
      category: "MLOps & Inventory Optimization",
      description: "Enterprise-grade MLOps platform and Streamlit analytics suite for predictive multi-echelon demand dynamics and inventory optimization.",
      techStack: ["Python", "Streamlit", "XGBoost", "Random Forest", "ARIMA", "Plotly", "Pandas"],
      githubUrl: "https://github.com/Harish232005-byte/SUPPLY-CHAIN-DEMAND-FORECASTING",
      featured: true,
      points: [
        "Developed a tri-algorithm predictive architecture combining XGBoost Regressor, Random Forest, and ARIMA time series.",
        "Implemented supply chain intelligence computing dynamic Safety Stock (SS), Reorder Point (ROP), and Economic Order Quantity (EOQ).",
        "Created 12 dynamic visual analytics graphs and a benchmark leaderboard tracking MAE, RMSE, MAPE, WAPE, and R² scores."
      ]
    },
    {
      title: "Edge-Based Object Boundary Detection",
      category: "Computer Vision & Image Processing",
      description: "An advanced, interactive web application for automated edge detection, shape representation, and object boundary extraction using OpenCV.",
      techStack: ["Python", "OpenCV", "Flask", "JavaScript", "HTML5 Canvas", "CSS3"],
      githubUrl: "https://github.com/Harish232005-byte/OBJECT-EDGE-DETECTION",
      featured: true,
      points: [
        "Built a 4-step computer vision pipeline for grayscale smoothing, Sobel/Canny edge detection, and morphological contour extraction.",
        "Extracted geometric shape metrics: Douglas-Peucker polygonal approximation, compactness/circularity, centroids, and bounding boxes.",
        "Engineered an interactive web UI supporting image uploads, live webcam feed, visual comparison overlays, and CSV report export."
      ]
    },
    {
      title: "Keyword-Based Web Data Scraper and Insight Generator",
      category: "Full-Stack & Web Scraping",
      description: "A web-based application to scrape and collect relevant data based on user-provided keywords with backend API integration.",
      techStack: ["Python", "Django REST Framework", "React.js", "API Integration"],
      githubUrl: "",
      featured: false,
      points: [
        "Developed a web-based application to scrape and collect relevant data based on user-provided keywords.",
        "Built backend APIs using Django REST Framework and integrated them with the React.js frontend."
      ]
    },
    {
      title: "Fish Tank Monitoring System",
      category: "IoT & Analytics",
      description: "An IoT-based monitoring system collecting real-time sensor data to track aquatic conditions and improve fish tank management.",
      techStack: ["IoT", "Sensors", "Python", "Data Analysis"],
      githubUrl: "",
      featured: false,
      points: [
        "Developed an IoT-based system for monitoring fish tank conditions.",
        "Collected sensor data and used monitoring techniques to track tank conditions.",
        "Designed the system to support real-time observation and improve fish tank management."
      ]
    },
    {
      title: "Search Engine Using Data Warehousing",
      category: "Data Warehousing & ETL",
      description: "A search-oriented system applying ETL processes for structured extraction, transformation, and efficient query analysis.",
      techStack: ["Python", "Data Warehousing", "ETL", "Data Analysis"],
      githubUrl: "",
      featured: false,
      points: [
        "Developed a search-oriented system using data warehousing concepts.",
        "Applied ETL processes for data extraction, transformation, and loading.",
        "Organized and processed data to support efficient search and analysis."
      ]
    }
  ],
  certifications: [
    {
      name: "Python Development / Python Training",
      issuer: "WITSPIRE SOLUTION",
      points: [
        "Completed hands-on training in Python, covering data structures, functions, and object-oriented programming.",
        "Developed problem-solving skills through practical programming tasks and basic application development."
      ]
    },
    {
      name: "Zoho Training Course",
      issuer: "ZOHO",
      points: [
        "Gained practical experience in building low-code applications using Zoho Creator.",
        "Learned form creation, workflow automation, Deluge scripting, and cloud-based business solutions."
      ]
    },
    {
      name: "AI International Conference – Certificate",
      issuer: "AI Conference",
      points: [
        "Participated in an international conference focused on Artificial Intelligence.",
        "Gained exposure to current AI concepts, applications, and emerging technologies."
      ]
    }
  ]
};
