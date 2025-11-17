import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Product Categories
  const categories = [
    { id: "all", name: "All Products" },
    { id: "education", name: "Education" },
    { id: "business", name: "Business" },
    { id: "enterprise", name: "Enterprise" }
  ];

  // ADRS Products
  const products = [
    {
      id: 1,
      category: "education",
      name: "ADRS SPARK LMS",
      tagline: "Revolutionary Learning Management System",
      shortDescription: "Our Learning Management System Software is designed to simplify the teaching and learning process through an intuitive, feature-rich platform that supports both traditional and modern e-learning methodologies.",
      fullDescription: "ADRS SPARK LMS is a cutting-edge Learning Management System that transforms educational experiences through innovative technology. Our platform combines powerful features with an intuitive interface to create seamless learning journeys for students and efficient management tools for educators. Whether you're an educational institution, corporate training department, or individual educator, our LMS provides the tools you need to deliver exceptional learning experiences.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop&auto=format",
      logo: "🎓",
      status: "Live",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "AI Integration"],
      keyFeatures: [
        "Interactive Course Builder",
        "AI-Powered Learning Paths",
        "Real-time Progress Tracking",
        "Automated Assessment System",
        "Collaborative Learning Tools",
        "Mobile-First Design",
        "Advanced Analytics Dashboard",
        "SCORM & xAPI Compliance"
      ],
      benefits: [
        "Increase student engagement by 45%",
        "Reduce administrative workload by 60%",
        "Improve learning outcomes by 35%",
        "Scale to support 100,000+ concurrent users",
        "24/7 learning accessibility"
      ],
      useCases: [
        "Universities & Colleges",
        "Corporate Training Programs",
        "Online Academies",
        "Government Training Institutes",
        "Professional Certification Bodies"
      ],
      demoLink: "/demo/lms",
      documentation: "/docs/lms"
    },
    {
      id: 2,
      category: "enterprise",
      name: "ADRS Gem Control",
      tagline: "Comprehensive Jewelry Shop Management System",
      shortDescription: "At ADRS Technosoft, we have developed a comprehensive Jewelry Shop Management System, tailored to meet the operational and inventory needs of jewelry businesses.",
      fullDescription: "ADRS Gem Control is a specialized enterprise solution designed exclusively for the jewelry industry. Our system streamlines every aspect of jewelry business operations, from inventory management and customer relationship management to sales processing and financial tracking. With robust security features and comprehensive reporting capabilities, we help jewelry businesses optimize their operations and drive growth.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop&auto=format",
      logo: "💎",
      status: "Live",
      technologies: ["Java", "Spring Boot", "Oracle DB", "Azure", "Docker"],
      keyFeatures: [
        "Inventory Management with Image Catalog",
        "Customer Relationship Management",
        "Sales & Billing System",
        "Stock Valuation & Tracking",
        "Supplier Management",
        "Security & Access Control",
        "Multi-branch Support",
        "Comprehensive Reporting Suite"
      ],
      benefits: [
        "Reduce inventory management time by 70%",
        "Improve customer service efficiency",
        "Eliminate manual stock counting errors",
        "Increase sales through better customer insights",
        "Secure sensitive business data"
      ],
      useCases: [
        "Jewelry Retail Stores",
        "Gold & Diamond Merchants",
        "Jewelry Manufacturing Units",
        "Multi-branch Jewelry Chains",
        "Jewelry Wholesalers"
      ],
      demoLink: "/demo/gem-control",
      documentation: "/docs/gem-control"
    },
    {
      id: 3,
      category: "business",
      name: "ADRS CRM",
      tagline: "Intelligent Customer Relationship Management",
      shortDescription: "Our Customer Relationship Management (CRM) system helps businesses build stronger relationships with their customers, manage leads, and enhance sales efficiency.",
      fullDescription: "ADRS CRM revolutionizes customer relationship management with its intelligent features and seamless integration capabilities. Our platform provides a 360-degree view of customer interactions, automates sales processes, and delivers actionable insights to drive revenue growth. Designed for businesses of all sizes, our CRM adapts to your unique workflow while providing enterprise-level capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
      logo: "🤝",
      status: "Live",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Google Cloud", "Redis"],
      keyFeatures: [
        "AI-Powered Lead Scoring",
        "Automated Sales Pipeline Management",
        "Customer 360° View",
        "Email & SMS Marketing Automation",
        "Advanced Analytics & Reporting",
        "Mobile Sales Application",
        "Social Media Integration",
        "Custom Workflow Builder"
      ],
      benefits: [
        "Increase sales conversion by 55%",
        "Reduce sales cycle time by 45%",
        "Improve customer retention by 30%",
        "Grow revenue by 65% annually",
        "Enhance team collaboration"
      ],
      useCases: [
        "Sales Teams & Organizations",
        "Marketing Agencies",
        "E-commerce Businesses",
        "Service-based Companies",
        "Startups & SMEs"
      ],
      demoLink: "/demo/crm",
      documentation: "/docs/crm"
    },
    {
      id: 4,
      category: "education",
      name: "ADRS Test Series Platform",
      tagline: "Comprehensive Online Examination System",
      shortDescription: "A fully featured online Test Series system designed for coaching institutes, universities, and individual educators to manage and conduct exams efficiently.",
      fullDescription: "ADRS Test Series Platform is a state-of-the-art assessment solution that redefines online examination experiences. Our platform supports various question types, adaptive testing algorithms, and comprehensive analytics to deliver meaningful insights into candidate performance. With robust security features and scalable architecture, we ensure the integrity and reliability of every assessment conducted.",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?w=600&h=400&fit=crop&auto=format",
      logo: "📝",
      status: "Live",
      technologies: ["Angular", "Django", "MySQL", "AWS", "WebRTC"],
      keyFeatures: [
        "Adaptive Testing Engine",
        "Multiple Question Type Support",
        "Real-time Online Proctoring",
        "Advanced Performance Analytics",
        "Bulk Question Import Tools",
        "Custom Test Creation",
        "Automated Result Processing",
        "Certificate Generation"
      ],
      benefits: [
        "Reduce assessment administration time by 60%",
        "Improve test security and integrity by 90%",
        "Scale to support 50,000+ concurrent test-takers",
        "Generate detailed performance insights",
        "Provide instant results and feedback"
      ],
      useCases: [
        "Educational Boards & Universities",
        "Coaching Institutes",
        "Corporate HR & Training",
        "Government Recruitment",
        "Professional Certification Bodies"
      ],
      demoLink: "/demo/test-series",
      documentation: "/docs/test-series"
    }
  ];

  // Additional Solutions
  const additionalSolutions = [
    {
      name: "Custom Enterprise Solutions",
      description: "Tailored software solutions designed to meet your specific business requirements and operational workflows.",
      icon: "⚙️"
    },
    {
      name: "Mobile Application Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      icon: "📱"
    },
    {
      name: "Web Application Development",
      description: "Scalable web applications built with modern technologies to drive your digital transformation.",
      icon: "💻"
    }
  ];

  // Client Testimonials
  const testimonials = [
    {
      name: "Dr. Ananya Sharma",
      role: "Director",
      company: "Tech University",
      content: "ADRS SPARK LMS transformed our online education program. The intuitive interface and powerful features have significantly improved both teaching and learning experiences.",
      product: "ADRS SPARK LMS"
    },
    {
      name: "Rajesh Mehta",
      role: "Owner",
      company: "Divine Jewelers",
      content: "Gem Control has revolutionized our jewelry business operations. Inventory management that used to take days now happens in hours with complete accuracy.",
      product: "ADRS Gem Control"
    },
    {
      name: "Priya Verma",
      role: "Sales Director",
      company: "GrowthCorp Solutions",
      content: "The ADRS CRM system has been instrumental in our sales growth. The AI-powered insights helped us identify opportunities we were missing.",
      product: "ADRS CRM"
    }
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

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
              ADRS <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Product Suite</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Innovative software solutions designed to transform businesses, enhance learning experiences, and drive operational excellence across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#products"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Explore Products
              </a>
              <Link 
                to="/contact"
                className="px-8 py-4 border-2 border-white/40 text-white rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300 transform hover:scale-105"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== PRODUCTS SHOWCASE ======================== */}
      <section id="products" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive suite of software solutions designed to address diverse business needs and drive digital transformation.
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200 dark:border-gray-700 flex flex-col h-full"
              >
                {/* Product Header - Fixed Height */}
                <div className="h-48 overflow-hidden relative flex-shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex items-center gap-3">
                    <div className="text-3xl bg-white/20 backdrop-blur-sm rounded-xl p-2">
                      {product.logo}
                    </div>
                    <div>
                      <div className="text-white font-bold text-xl">{product.name}</div>
                      <div className="text-cyan-300 text-sm">{product.tagline}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Product Content - Flexible Height */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
                    {product.shortDescription}
                  </p>

                  {/* Key Features Preview */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.keyFeatures.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button - Fixed at bottom */}
                  <div className="mt-auto pt-4">
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Learn More
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== ADDITIONAL SOLUTIONS ======================== */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Custom <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Beyond our product suite, we offer tailored solutions to meet your unique business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="text-5xl mb-6">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex-grow">
                  {solution.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {solution.description}
                </p>
                <Link
                  to="/contact"
                  className="mt-auto bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== TESTIMONIALS ======================== */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Client <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from organizations that have transformed their operations with our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-grow">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold mt-auto">
                  Using: {testimonial.product}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== PRODUCT DETAIL MODAL ======================== */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Header */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl bg-white/20 backdrop-blur-sm rounded-xl p-3">
                      {selectedProduct.logo}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{selectedProduct.name}</h2>
                      <p className="text-cyan-300">{selectedProduct.tagline}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
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
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Overview</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {selectedProduct.fullDescription}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Key Benefits</h4>
                      <ul className="space-y-3">
                        {selectedProduct.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Ideal For</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.useCases.map((usecase, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                          >
                            {usecase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Features</h4>
                    <div className="grid gap-3 mb-6">
                      {selectedProduct.keyFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProduct.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <Link
                        to="/contact"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 block transform hover:scale-105"
                      >
                        Request Live Demo
                      </Link>
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
            Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss how our products can drive efficiency, enhance learning, and accelerate your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Demo
            </Link>
            <a
              href="tel:+1234567890"
              className="px-8 py-4 border-2 border-white/40 text-white rounded-xl font-bold backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300 transform hover:scale-105"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}