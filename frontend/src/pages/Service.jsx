import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Service Categories
  const categories = [
    { id: "all", name: "All Services" },
    { id: "development", name: "Development" },
    { id: "design", name: "Design" },
    { id: "marketing", name: "Marketing" },
    { id: "business", name: "Business" }
  ];

  // All Services Data
  const allServices = [
    {
      id: 1,
      category: "development",
      icon: "💻",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance, scalability, and user experience.",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "CMS Development",
        "API Integration",
        "Performance Optimization",
        "SEO-Friendly Structure"
      ],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop&auto=format",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL"],
      process: ["Discovery", "Design", "Development", "Testing", "Deployment"],
      price: "Starting at $2,500"
    },
    {
      id: 2,
      category: "development",
      icon: "📱",
      title: "Mobile App Development",
      description:"Native and cross-platform mobile applications that deliver seamless, high-performance experiences across iOS and Android platforms.",
      features: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "App Store Deployment",
        "Push Notifications",
        "Offline Functionality",
        "Performance Optimization"
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      process: ["Planning", "UI/UX Design", "Development", "QA Testing", "Launch"],
      price: "Starting at $4,000"
    },
    {
      id: 3,
      category: "development",
      icon: "⚙️",
      title: "Custom Software Development",
      description: "Enterprise-grade software solutions tailored to streamline your business operations, enhance efficiency, and drive growth",

      features: [
        "Custom ERP/CRM Systems",
        "Business Process Automation",
        "API Development",
        "Cloud Solutions",
        "System Integration",
        "Maintenance & Support"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format",
      technologies: ["Python", "Java", ".NET", "AWS", "Docker"],
      process: ["Analysis", "Architecture", "Development", "Integration", "Support"],
      price: "Custom Pricing"
    },
    {
      id: 4,
      category: "design",
      icon: "🎨",
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive, engaging, and conversion-focused digital experiences.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Interaction Design",
        "Usability Testing",
        "Design Systems"
      ],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&auto=format",
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
      process: ["Research", "Wireframe", "Design", "Prototype", "Test"],
      price: "Starting at $1,500"
    },
    {
      id: 5,
      category: "design",
      icon: "🖌️",
      title: "Brand Identity Design",
      description: "Comprehensive brand identity packages that establish strong visual presence and brand recognition.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Color Palette",
        "Typography System",
        "Marketing Materials",
        "Brand Strategy"
      ],
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop&auto=format",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Procreate"],
      process: ["Discovery", "Concept", "Design", "Refine", "Deliver"],
      price: "Starting at $1,200"
    },
    {
      id: 6,
      category: "marketing",
      icon: "🎯",
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies that increase brand visibility and drive qualified traffic to your business.",
      features: [
        "SEO Optimization",
        "PPC Advertising",
        "Social Media Marketing",
        "Content Strategy",
        "Email Marketing",
        "Analytics & Reporting"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
      technologies: ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp"],
      process: ["Audit", "Strategy", "Implementation", "Monitor", "Optimize"],
      price: "Starting at $800/month"
    },
    {
      id: 7,
      category: "marketing",
      icon: "📊",
      title: "Social Media Management",
      description: "Strategic social media management that builds brand awareness and engages your target audience effectively.",
      features: [
        "Content Creation",
        "Community Management",
        "Social Advertising",
        "Influencer Partnerships",
        "Performance Analytics",
        "Crisis Management"
      ],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&auto=format",
      technologies: ["Hootsuite", "Buffer", "Canva", "Sprout Social"],
      process: ["Strategy", "Content Plan", "Execution", "Engagement", "Analysis"],
      price: "Starting at $600/month"
    },
    {
      id: 8,
      category: "business",
      icon: "👥",
      title: "BPO Services",
      description: "Comprehensive business process outsourcing solutions to optimize efficiency and reduce operational costs.",
      features: [
        "Customer Support",
        "Technical Support",
        "Data Entry & Processing",
        "Back Office Operations",
        "Quality Assurance",
        "24/7 Support"
      ],
      image: "https://odaksolutions.com/wp-content/uploads/2024/05/Importance-of-BPO-Services-in-the-Logistics-Industry.jpg",
      technologies: ["Zendesk", "Freshdesk", "Salesforce", "Zoho"],
      process: ["Assessment", "Setup", "Training", "Operation", "Quality Check"],
      price: "Custom Pricing"
    },
    {
      id: 9,
      category: "business",
      icon: "🔧",
      title: "IT Consulting",
      description: "Expert IT consulting services to help you make informed technology decisions and optimize your IT infrastructure.",
      features: [
        "Technology Assessment",
        "System Architecture",
        "Cloud Migration",
        "Security Audits",
        "Digital Transformation",
        "IT Strategy Planning"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
      technologies: ["AWS", "Azure", "Google Cloud", "Security Tools"],
      process: ["Assessment", "Planning", "Implementation", "Training", "Support"],
      price: "$150/hour"
    }
  ];

  const filteredServices = activeCategory === "all" 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  // Process Steps
  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We begin by understanding your business goals, target audience, and project requirements through detailed consultations.",
      icon: "🔍"
    },
    {
      step: 2,
      title: "Design & Strategy",
      description: "Our team creates comprehensive strategies and designs that align with your objectives and user needs.",
      icon: "🎯"
    },
    {
      step: 3,
      title: "Development & Implementation",
      description: "We bring your vision to life using cutting-edge technologies and industry best practices.",
      icon: "⚙️"
    },
    {
      step: 4,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution meets the highest standards of quality and performance.",
      icon: "🧪"
    },
    {
      step: 5,
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support to ensure long-term success.",
      icon: "🚀"
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
              backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Comprehensive digital solutions designed to transform your business, enhance your brand, and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/adrs-spark" 
                className="px-8 py-4 border-2 border-white/40 text-white rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                Join Our Internship
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== SERVICES CATEGORIES ======================== */}
      <section className="py-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </section>

      {/* ======================== SERVICES GRID ======================== */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-sm font-semibold">
                    {service.price}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Our Process:</h4>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="text-center">
                          <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-1">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">{idx + 1}</span>
                          </div>
                          <span className="hidden sm:block">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Get Quote
                    </Link>
                    <button className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                      ℹ️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== OUR PROCESS ======================== */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a structured, transparent process to ensure your project's success from concept to launch and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== WHY CHOOSE US ======================== */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Our Services</span>?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We deliver exceptional value through our commitment to quality, innovation, and client success. Here's what sets us apart:
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "🏆",
                    title: "Proven Expertise",
                    description: "Years of experience delivering successful projects across various industries and technologies."
                  },
                  {
                    icon: "⚡",
                    title: "Fast Delivery",
                    description: "Agile development processes that ensure timely delivery without compromising quality."
                  },
                  {
                    icon: "🛡️",
                    title: "Quality Assurance",
                    description: "Rigorous testing and quality control processes to ensure bug-free, high-performance solutions."
                  },
                  {
                    icon: "💰",
                    title: "Competitive Pricing",
                    description: "Transparent, competitive pricing with no hidden costs and flexible engagement models."
                  },
                  {
                    icon: "🔒",
                    title: "Data Security",
                    description: "Stringent security measures to protect your data and intellectual property."
                  },
                  {
                    icon: "📞",
                    title: "Dedicated Support",
                    description: "24/7 support and maintenance services to keep your solutions running smoothly."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Let's discuss your project requirements and create a customized solution that drives your business forward.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Free initial consultation",
                    "Detailed project proposal",
                    "Flexible engagement models",
                    "Dedicated project manager",
                    "Regular progress updates",
                    "Post-launch support"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 bg-white text-blue-600 text-center py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Project
                  </Link>
                  <a
                    href="tel:+1234567890"
                    className="flex-1 bg-white/10 text-white text-center py-3 rounded-xl font-bold border border-white/30 hover:bg-white/20 transition-all duration-300"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== CTA SECTION ======================== */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Business</span>?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's work together to create innovative solutions that drive growth and deliver exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 border-2 border-white/40 text-white rounded-xl font-bold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}