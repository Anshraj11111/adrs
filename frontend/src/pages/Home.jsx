import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const statsRef = useRef(null);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);


  const heroImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  ];

  const [currentBG, setCurrentBG] = useState(0);
   
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBG((prev) => (prev + 1) % heroImages.length);
    }, 2000); // 5 sec

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    setIsVisible(true);
    
    // Stats animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const targetStats = [150, 89, 300, 8];
    const duration = 2000;
    const steps = 60;
    const stepValues = targetStats.map(target => target / steps);

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setAnimatedStats(prev => prev.map((val, idx) => 
        Math.min(val + stepValues[idx], targetStats[idx])
      ));

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(targetStats);
      }
    }, duration / steps);
  };

  // Services data with better image URLs
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: ["React.js/Next.js", "Node.js/Express", "MongoDB/PostgreSQL", "Responsive Design", "SEO Optimization"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop&auto=format"
    },
    {
      icon: "📱",
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android platforms.",
      features: ["React Native", "Flutter", "Swift/Kotlin", "App Store Deployment", "Performance Optimization"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format"
    },
    {
      icon: "⚙️",
      title: "Software Development",
      description: "Enterprise-grade software solutions tailored to streamline your business operations and drive growth.",
      features: ["Custom ERP/CRM", "API Integration", "Cloud Solutions", "System Architecture", "Quality Assurance"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format"
    },
    {
      icon: "🎯",
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies that increase brand visibility and drive qualified traffic to your business.",
      features: ["SEO/SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting", "Conversion Optimization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format"
    },
    {
      icon: "🎨",
      title: "Graphic Designing",
      description: "Creative visual designs that communicate your brand identity and captivate your target audience.",
      features: ["Logo & Branding", "UI/UX Design", "Print Design", "Motion Graphics", "Brand Guidelines"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&auto=format"
    },
    {
      icon: "👥",
      title: "BPO Services",
      description: "Comprehensive business process outsourcing solutions to optimize efficiency and reduce operational costs.",
      features: ["Customer Support", "Technical Support", "Data Processing", "Back Office Operations", "Quality Monitoring"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format"
    }
  ];

  // Software Development Excellence
  const softwareFeatures = [
    {
      icon: "🎯",
      title: "Client-Centric Approach",
      description: "Your vision drives our process. We prioritize understanding your business goals to deliver solutions that create real impact."
    },
    {
      icon: "🔧",
      title: "Full-Stack Excellence",
      description: "End-to-end development expertise across frontend, backend, databases, and cloud infrastructure."
    },
    {
      icon: "🚀",
      title: "Rapid Prototyping & MVP",
      description: "Quickly validate your ideas with functional prototypes and minimum viable products to test market fit."
    },
    {
      icon: "🔄",
      title: "Agile Development Process",
      description: "Iterative development with regular feedback cycles, ensuring alignment with your evolving requirements."
    },
    {
      icon: "🛡️",
      title: "Secure & Scalable Architecture",
      description: "Built-in security measures and scalable infrastructure designed to grow with your business needs."
    },
    {
      icon: "⚡",
      title: "DevOps & CI/CD Pipelines",
      description: "Automated deployment pipelines and infrastructure as code for reliable, efficient delivery."
    }
  ];

  // ADRS Spark Internship Program
  const internshipFeatures = [
    {
      icon: "🌍",
      title: "Real-World Project Experience",
      description: "Work on actual client projects and build a professional portfolio that stands out to employers."
    },
    {
      icon: "🏛️",
      title: "Structured Learning Environment",
      description: "Comprehensive curriculum with guided learning paths and progressive skill development."
    },
    {
      icon: "👨‍🏫",
      title: "Mentorship by Industry Experts",
      description: "Learn from seasoned professionals with years of experience in software development and design."
    },
    {
      icon: "💻",
      title: "Live Coding Sessions & Workshops",
      description: "Regular hands-on sessions covering the latest technologies and best practices."
    },
    {
      icon: "🏆",
      title: "Hackathons & Challenges",
      description: "Participate in competitive events to test your skills and collaborate with peers."
    },
    {
      icon: "📜",
      title: "Certification & Recognition",
      description: "Earn industry-recognized certifications and build credentials that boost your career."
    }
  ];

  // Company Statistics
  const stats = [
    { number: animatedStats[0], suffix: "+", label: "Projects Completed" },
    { number: animatedStats[1], suffix: "%", label: "Client Satisfaction" },
    { number: animatedStats[2], suffix: "+", label: "Developers Trained" },
    { number: animatedStats[3], suffix: "+", label: "Years of Excellence" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* ======================== HERO SECTION ======================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Enhanced Background with Better Contrast */}
        <div className="absolute inset-0">
          {/* <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`
            }}
          ></div> */}

          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30  transition-all duration-[2000ms]"
            style={{
              backgroundImage: `url(${heroImages[currentBG]})`
            }}
          ></div>

        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-white/90 text-sm font-semibold">Trusted by 150+ Companies Worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                Digital Vision
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              We deliver exceptional digital solutions and empower future tech leaders through our comprehensive 
              <span className="text-cyan-300 font-semibold"> ADRS Spark Internship Program</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                to="/services" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden"
              >
                <span className="relative z-10">Explore Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                to="/adrs-spark" 
                className="group px-8 py-4 border-2 border-white/40 text-white rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  Join ADRS Spark
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ======================== STATS SECTION ======================== */}
      <section ref={statsRef} className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2 transition-all duration-500">
                  {Math.floor(stat.number)}{stat.suffix}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">
                  {stat.label}
                </div>
                <div className="w-0 group-hover:w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== SERVICES SECTION ======================== */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to transform your business and accelerate growth
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 overflow-hidden"
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Service Image - Better Visibility */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-100 dark:border-blue-800"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 group-hover:translate-x-2 transition-all duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== SOFTWARE DEVELOPMENT EXCELLENCE ======================== */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-6">
                <span className="text-sm font-semibold">Software Development Excellence</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Building the Future of <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Digital Innovation</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                We combine cutting-edge technology with industry expertise to deliver software solutions that drive business transformation and create sustainable competitive advantages.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {softwareFeatures.map((feature, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800/50 transition-all duration-300">
                    <div className="text-3xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Link
                  to="/services"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Process
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="text-3xl font-bold mb-4">Ready to Innovate?</h3>
                  <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                    Let's collaborate to build solutions that transform your business and delight your customers.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/90">Free Technical Consultation</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/90">Project Roadmap & Timeline</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/90">Transparent Pricing</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      ======================== ADRS SPARK INTERNSHIP ========================
      {/* <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-cyan-800 text-white relative overflow-hidden"> */}
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div> */}

        {/* <div className="container mx-auto px-6 relative z-10"> */}
          {/* Section Header */}
          {/* <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-sm font-semibold">Career Development Program</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ADRS Spark <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Internship</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Launch your tech career with our immersive internship program designed to transform aspiring developers into industry-ready professionals.
            </p>
          </div> */}

          {/* Features Grid */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {internshipFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div> */}

          {/* Program Highlights */}
          {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">6 Months</div>
                <div className="text-white/80">Comprehensive Program</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-white/80">Practical Hands-on Training</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">PPO</div>
                <div className="text-white/80">Pre-Placement Opportunities</div>
              </div>
            </div>
          </div> */}

          {/* CTA */}
          {/* <div className="text-center">
            <Link
              to="/adrs-spark"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Apply for ADRS Spark
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div> */}
        {/* </div> */}
      {/* // </section> */}

      {/* ======================== FINAL CTA ======================== */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Digital Presence</span>?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
            Let's collaborate to create innovative solutions that drive your business forward and deliver exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project Today
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border-2 border-white/40 text-white rounded-xl font-bold backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Learn About Our Company
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}