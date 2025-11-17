import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("mission");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Company Stats
  const companyStats = [
    { number: "5+", label: "Years of Excellence" },
    { number: "150+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "20+", label: "Team Members" }
  ];

  // Mission & Vision
  const missionContent = {
    mission: {
      title: "Our Mission",
      description: "To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create lasting value. We are committed to delivering exceptional software products and services that transform ideas into digital reality.",
      points: [
        "Deliver cutting-edge technology solutions that solve real business challenges",
        "Build long-term partnerships based on trust and mutual success",
        "Foster innovation and creativity in everything we do",
        "Drive digital transformation across industries",
        "Provide exceptional value and outstanding customer service"
      ]
    },
    vision: {
      title: "Our Vision",
      description: "To be the most trusted technology partner for businesses worldwide, recognized for our technical excellence, innovative solutions, and unwavering commitment to client success in the digital age.",
      points: [
        "Global technology leadership in software development",
        "Setting industry standards for innovation and quality",
        "Sustainable business growth through client success",
        "Making a positive impact on communities we serve",
        "Continuous evolution with emerging technologies"
      ]
    }
  };

  // Core Values
  const coreValues = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations and set new standards in quality."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative thinking to solve complex problems and drive digital transformation."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We believe in the power of teamwork and build strong partnerships with our clients to achieve shared success."
    },
    {
      icon: "🚀",
      title: "Growth",
      description: "We are committed to continuous learning and development, both for our team and the businesses we serve."
    }
  ];

  // Team Members
  const teamMembers = [
    {
      name: "Mr.Abhishek Dubey",
      role: "Founder & CEO",
      description: "Visionary leader with 10+ years of experience in software development and business strategy. Passionate about leveraging technology to solve real-world problems.",
      image: "https://www.adrstechno.com/images/team/Abhi.jpg",
      expertise: ["Strategic Planning", "Technology Leadership", "Business Development"]
    },
    {
      name: "Piyush Khare",
      role: "Full Stack Developer",
      description: "Technology expert with 8+ years in software architecture and development. Leads our technical team in creating scalable and robust solutions.",
      image: "https://www.adrstechno.com/images/team/Piyush.jpg",
      expertise: ["System Architecture", "Cloud Computing", "AI/ML", "DevOps"]
    },
    {
      name: "Siddhant Dubey",
      role: "Chief Technical Officer",
      description: "Product strategist with 7+ years of experience in product management and UX design. Ensures our products meet market needs and user expectations.",
      image: "https://www.adrstechno.com/images/team/Sid.jpg",
      expertise: ["Product Strategy", "UX Design", "Agile Methodology", "Market Research"]
    },
    {
      name: "Aman Vishwakarma",
      role: "Full Stack Developer",
      description: "PMP certified project manager with 6+ years of experience delivering complex software projects on time and within budget.",
      image: "https://www.adrstechno.com/images/team/AmanV.jpg",
      expertise: ["Project Management", "Client Relations", "Risk Management", "Team Leadership"]
    },
    {
      name: "Ishant Patel",
      role: "Team Lead & Full-Stack Developer",
      description: "Full-stack developer with 5+ years of experience in modern web technologies. Passionate about creating seamless user experiences.",
      image: "https://www.adrstechno.com/images/team/Ishant.jpg",
      expertise: ["React.js", "Node.js", "MongoDB", "AWS"]
    },
    {
      name: "Sapeksh Vishwakarma",
      role: "Full Stack Developer",
      description: "Creative designer with 5+ years of experience in user interface and experience design. Believes in designing with purpose and empathy.",
      image: "https://www.adrstechno.com/images/team/sapekshpic.JPG",
      expertise: ["UI/UX Design", "Design Systems", "User Research", "Prototyping"]
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
              backgroundImage: `url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">ADRS Technosoft</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              We are a passionate team of innovators, developers, and designers committed to building technology solutions that drive business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* ======================== NAVIGATION TABS ======================== */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-2 flex">
              <button
                onClick={() => setActiveSection("mission")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeSection === "mission"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Our Mission & Vision
              </button>
              <button
                onClick={() => setActiveSection("team")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeSection === "team"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== MISSION & VISION SECTION ======================== */}
      {activeSection === "mission" && (
        <div className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            {/* Company Overview */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Who We <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Are</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Founded in 2019, ADRS Technosoft has evolved from a small startup to a trusted technology partner 
                for businesses across various industries. Our journey is marked by innovation, dedication, and a 
                relentless pursuit of excellence in software development.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {missionContent.mission.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {missionContent.mission.description}
                </p>
                <ul className="space-y-3">
                  {missionContent.mission.points.map((point, index) => (
                    <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="text-4xl mb-4">🔭</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {missionContent.vision.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {missionContent.vision.description}
                </p>
                <ul className="space-y-3">
                  {missionContent.vision.points.map((point, index) => (
                    <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core Values */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The principles that guide our decisions, actions, and relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ======================== TEAM SECTION ======================== */}
      {activeSection === "team" && (
        <div className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            {/* Team Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Meet Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Passionate professionals dedicated to delivering exceptional results and driving innovation forward.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                >
                  {/* Team Member Image */}
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200 dark:border-gray-700 group-hover:border-blue-500 transition-colors duration-300"
                    />
                  </div>

                  {/* Team Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Expertise */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Culture */}
            <div className="mt-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Our Team Culture</h3>
                <p className="text-blue-100 mb-6 leading-relaxed max-w-3xl mx-auto">
                  We believe in fostering an environment where innovation thrives, collaboration is celebrated, 
                  and every team member has the opportunity to grow and make a meaningful impact.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Continuous Learning & Development</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Collaborative Problem Solving</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Work-Life Balance</span>
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
            Ready to Work <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Together</span>?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's join forces to create something extraordinary. Our team is ready to bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              to="/career"
              className="px-8 py-4 border-2 border-white/40 text-white rounded-xl font-bold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}