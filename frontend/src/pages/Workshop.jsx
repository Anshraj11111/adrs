import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Workshop() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Workshop Categories
  const categories = [
    { id: "all", name: "All Workshops" },
    { id: "development", name: "Development" },
    { id: "design", name: "Design" },
    { id: "business", name: "Business" },
    { id: "career", name: "Career Growth" }
  ];

  // Upcoming Workshops
  const workshops = [
    {
      id: 1,
      category: "development",
      title: "Full-Stack Web Development Mastery",
      instructor: "Sarah Johnson",
      instructorRole: "Senior Full-Stack Developer",
      instructorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&auto=format",
      description: "Master modern web development with hands-on projects and industry best practices. Build real-world applications from scratch.",
      fullDescription: "Transform your coding skills through this intensive workshop that covers everything from frontend to backend development. You'll work on live projects, learn industry standards, and build a portfolio that showcases your expertise.",
      duration: "4 Weeks Intensive Program",
      level: "Beginner to Advanced",
      seats: 24,
      enrolled: 18,
      schedule: "Mon, Wed, Fri - 6:00 PM to 9:00 PM",
      startDate: "2024-03-15",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Git"],
      learningOutcomes: [
        "Build complete full-stack applications",
        "Master modern development workflows",
        "Learn industry best practices",
        "Create professional portfolio projects",
        "Prepare for technical interviews"
      ],
      whoShouldAttend: [
        "Aspiring developers",
        "Career switchers",
        "Students looking to enhance skills",
        "Professionals seeking advancement"
      ],
      certification: "Industry-recognized Certificate of Excellence"
    },
    {
      id: 2,
      category: "design",
      title: "UI/UX Design Excellence Workshop",
      instructor: "Michael Chen",
      instructorRole: "Lead Product Designer",
      instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format",
      description: "Create stunning user experiences that solve real problems. Learn design thinking and create portfolio-worthy projects.",
      fullDescription: "This workshop takes you through the complete design process - from user research to final prototypes. You'll learn to create interfaces that are not just beautiful but highly functional and user-friendly.",
      duration: "3 Weeks Design Journey",
      level: "All Levels Welcome",
      seats: 20,
      enrolled: 15,
      schedule: "Tue, Thu - 7:00 PM to 9:30 PM",
      startDate: "2024-03-20",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&auto=format",
      technologies: ["Figma", "User Research", "Prototyping", "Design Systems"],
      learningOutcomes: [
        "Master design thinking process",
        "Create professional UI designs",
        "Conduct effective user research",
        "Build interactive prototypes",
        "Develop design portfolio"
      ],
      whoShouldAttend: [
        "Aspiring UI/UX designers",
        "Developers wanting design skills",
        "Product managers",
        "Marketing professionals"
      ],
      certification: "UI/UX Design Professional Certificate"
    },
    {
      id: 3,
      category: "business",
      title: "Digital Transformation Leadership",
      instructor: "Emily Rodriguez",
      instructorRole: "Digital Strategy Director",
      instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format",
      description: "Lead digital initiatives and drive business growth through technology innovation and strategic planning.",
      fullDescription: "Learn how to spearhead digital transformation in your organization. This workshop provides frameworks and strategies to leverage technology for business growth and competitive advantage.",
      duration: "2 Days Intensive Session",
      level: "Mid to Senior Level",
      seats: 30,
      enrolled: 22,
      schedule: "Saturday & Sunday - 9:00 AM to 5:00 PM",
      startDate: "2024-03-25",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
      technologies: ["Digital Strategy", "Change Management", "Technology Adoption"],
      learningOutcomes: [
        "Develop digital transformation roadmap",
        "Lead technology adoption initiatives",
        "Measure digital initiative success",
        "Build innovation culture",
        "Create business value through tech"
      ],
      whoShouldAttend: [
        "Business leaders",
        "Project managers",
        "IT professionals",
        "Entrepreneurs"
      ],
      certification: "Digital Leadership Certificate"
    },
    {
      id: 4,
      category: "development",
      title: "Mobile App Development with React Native",
      instructor: "Alex Thompson",
      instructorRole: "Mobile Development Lead",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format",
      description: "Build cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android.",
      fullDescription: "Master the art of mobile app development using React Native. Learn to create performant, scalable applications that work seamlessly across different platforms and devices.",
      duration: "3 Weeks Hands-on Training",
      level: "Intermediate Level",
      seats: 18,
      enrolled: 12,
      schedule: "Mon, Wed - 6:30 PM to 9:00 PM",
      startDate: "2024-04-01",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
      technologies: ["React Native", "JavaScript", "Mobile UI", "App Deployment"],
      learningOutcomes: [
        "Build cross-platform mobile apps",
        "Master mobile UI/UX principles",
        "Implement app state management",
        "Handle device APIs and features",
        "Prepare apps for store deployment"
      ],
      whoShouldAttend: [
        "Web developers expanding to mobile",
        "Mobile development enthusiasts",
        "Startup founders",
        "Full-stack developers"
      ],
      certification: "Mobile Development Specialist Certificate"
    },
    {
      id: 5,
      category: "career",
      title: "Tech Career Accelerator Program",
      instructor: "David Kim",
      instructorRole: "Career Coach & Tech Recruiter",
      instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&auto=format",
      description: "Accelerate your tech career with comprehensive skill development, interview preparation, and career strategy.",
      fullDescription: "This program is designed to fast-track your career in technology. From technical skill enhancement to interview mastery and career planning, we cover all aspects of professional growth.",
      duration: "1 Week Intensive Bootcamp",
      level: "All Career Stages",
      seats: 25,
      enrolled: 20,
      schedule: "Daily - 6:00 PM to 8:30 PM",
      startDate: "2024-04-08",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&auto=format",
      technologies: ["Career Strategy", "Interview Skills", "Networking", "Personal Branding"],
      learningOutcomes: [
        "Master technical interviews",
        "Build compelling professional profile",
        "Develop career growth strategy",
        "Enhance networking skills",
        "Create personal development plan"
      ],
      whoShouldAttend: [
        "Job seekers in tech",
        "Career advancement seekers",
        "Recent graduates",
        "Professionals considering career switch"
      ],
      certification: "Career Excellence Certificate"
    },
    {
      id: 6,
      category: "business",
      title: "Startup Innovation & Growth Strategies",
      instructor: "Maria Gonzalez",
      instructorRole: "Venture Innovation Expert",
      instructorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&auto=format",
      description: "Learn innovation frameworks and growth strategies to scale your startup and create sustainable business models.",
      fullDescription: "This workshop provides entrepreneurs and startup teams with proven frameworks for innovation, product development, and business growth in today's competitive landscape.",
      duration: "2 Days Strategy Session",
      level: "Founders & Leaders",
      seats: 15,
      enrolled: 8,
      schedule: "Saturday & Sunday - 10:00 AM to 4:00 PM",
      startDate: "2024-04-13",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&auto=format",
      technologies: ["Innovation Frameworks", "Growth Hacking", "Business Modeling"],
      learningOutcomes: [
        "Develop innovation mindset",
        "Create scalable business models",
        "Implement growth strategies",
        "Build minimum viable products",
        "Measure business metrics effectively"
      ],
      whoShouldAttend: [
        "Startup founders",
        "Product managers",
        "Innovation teams",
        "Business development professionals"
      ],
      certification: "Innovation Leadership Certificate"
    }
  ];

  const filteredWorkshops = activeCategory === "all" 
    ? workshops 
    : workshops.filter(workshop => workshop.category === activeCategory);

  // Stats
  const stats = [
    { number: "500+", label: "Workshop Graduates" },
    { number: "98%", label: "Skill Improvement Rate" },
    { number: "50+", label: "Industry Expert Mentors" },
    { number: "4.9/5", label: "Learning Experience Rating" }
  ];

  // Success Stories
  const successStories = [
    {
      name: "James Wilson",
      role: "Senior Developer",
      company: "Tech Innovations Inc.",
      story: "The Full-Stack workshop transformed my career trajectory. I went from junior developer to team lead within 6 months.",
      workshop: "Full-Stack Web Development Mastery",
      achievement: "Promoted to Team Lead"
    },
    {
      name: "Sophia Martinez",
      role: "Product Designer",
      company: "Design Studio Pro",
      story: "The UI/UX workshop gave me the confidence and skills to lead design projects and mentor junior designers.",
      workshop: "UI/UX Design Excellence Workshop",
      achievement: "Lead Designer Role"
    },
    {
      name: "Robert Brown",
      role: "Digital Transformation Head",
      company: "Global Enterprises Ltd.",
      story: "The leadership workshop provided frameworks that helped me drive digital initiatives across our organization.",
      workshop: "Digital Transformation Leadership",
      achievement: "Headed Digital Initiatives"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* ======================== HERO SECTION ======================== */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Elevate Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your skills, accelerate your growth, and unlock new career opportunities through our expert-led workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#workshops"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Explore Workshops
              </a>
              <Link 
                to="/adrs-spark"
                className="px-8 py-4 border-2 border-white/40 text-white rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                Join Learning Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== MISSION SECTION ======================== */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We believe in empowering individuals with practical skills that drive personal and professional growth. 
              Our workshops are designed to bridge the gap between theoretical knowledge and real-world application, 
              creating confident professionals ready to make an impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Skill Transformation",
                description: "Transform theoretical knowledge into practical expertise through hands-on learning experiences."
              },
              {
                icon: "🌟",
                title: "Career Advancement",
                description: "Equip yourself with in-demand skills that open doors to new opportunities and career growth."
              },
              {
                icon: "🤝",
                title: "Community Building",
                description: "Join a network of passionate learners and industry experts committed to mutual growth."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== STATISTICS ======================== */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
                <div className="w-0 group-hover:w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== WORKSHOPS SHOWCASE ======================== */}
      <section id="workshops" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skill Development <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Workshops</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose your learning path and transform your career with our expert-led workshops.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Workshops Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop, index) => (
              <div
                key={workshop.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200 dark:border-gray-700"
              >
                {/* Workshop Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
                      {workshop.seats - workshop.enrolled} Seats Available
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold">
                      {workshop.level}
                    </span>
                  </div>
                </div>

                {/* Workshop Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                    {workshop.title}
                  </h3>

                  {/* Instructor */}
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={workshop.instructorImage} 
                      alt={workshop.instructor}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {workshop.instructor}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {workshop.instructorRole}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {workshop.description}
                  </p>

                  {/* Workshop Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{workshop.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Schedule:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{workshop.schedule}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Starts:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {new Date(workshop.startDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {workshop.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enrollment Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Enrollment Progress</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {workshop.enrolled}/{workshop.seats}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(workshop.enrolled / workshop.seats) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedWorkshop(workshop)}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More & Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== SUCCESS STORIES ======================== */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Success <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover how our workshops have transformed careers and opened new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {story.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {story.role}, {story.company}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{story.story}"
                </p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                    {story.workshop}
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                    🎯 {story.achievement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== WORKSHOP DETAIL MODAL ======================== */}
      {selectedWorkshop && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Header */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={selectedWorkshop.image} 
                  alt={selectedWorkshop.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-3xl font-bold text-white">{selectedWorkshop.title}</h2>
                  <p className="text-cyan-300">{selectedWorkshop.duration}</p>
                </div>
                <button
                  onClick={() => setSelectedWorkshop(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Workshop Overview</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {selectedWorkshop.fullDescription}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Who Should Attend</h4>
                      <ul className="space-y-2">
                        {selectedWorkshop.whoShouldAttend.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                      <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">🎓 Certification</h4>
                      <p className="text-blue-800 dark:text-blue-200 text-sm">
                        {selectedWorkshop.certification}
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Learning Outcomes</h4>
                    <div className="grid gap-3 mb-6">
                      {selectedWorkshop.learningOutcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {outcome}
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedWorkshop.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Instructor Info */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                      <div className="flex items-center gap-4 mb-3">
                        <img 
                          src={selectedWorkshop.instructorImage} 
                          alt={selectedWorkshop.instructor}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white">
                            {selectedWorkshop.instructor}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {selectedWorkshop.instructorRole}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Learn from industry experts with years of practical experience and passion for teaching.
                      </p>
                    </div>

                    <div className="mt-6">
                      <Link
                        to="/contact"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 block"
                      >
                        Apply for This Workshop
                      </Link>
                      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Limited seats available - Apply now to secure your spot
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================== CTA SECTION ======================== */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Skills?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join our community of learners and take the next step in your professional journey. 
            Let's build your future together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Learning Journey
            </Link>
            <a
              href="#workshops"
              className="px-8 py-4 border-2 border-white/40 text-white rounded-xl font-bold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Explore All Workshops
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}