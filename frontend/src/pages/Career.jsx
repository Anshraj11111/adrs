import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Career() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Departments
  const departments = [
    { id: "all", name: "All Opportunities" },
    { id: "engineering", name: "Engineering" },
    { id: "design", name: "Design" },
    { id: "marketing", name: "Marketing" },
    { id: "business", name: "Business Development" },
    { id: "internship", name: "Internship Program" }
  ];

  // Current Openings
  const jobOpenings = [
    {
      id: 1,
      department: "engineering",
      title: "Senior Full-Stack Developer",
      type: "Full-time",
      location: "Remote / Bangalore",
      experience: "3-5 years",
      description: "Build scalable web applications using modern technologies and lead technical initiatives.",
      responsibilities: [
        "Design and develop robust full-stack applications",
        "Lead technical architecture decisions",
        "Mentor junior developers and conduct code reviews",
        "Implement best practices for code quality and testing",
        "Collaborate with cross-functional teams"
      ],
      requirements: [
        "Expertise in React.js and Node.js",
        "Experience with cloud platforms (AWS/Azure)",
        "Strong knowledge of database design",
        "Experience with microservices architecture",
        "Excellent problem-solving skills"
      ],
      skills: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
      postedDate: "2024-01-15"
    },
    {
      id: 2,
      department: "design",
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Hybrid / Delhi",
      experience: "2-4 years",
      description: "Create exceptional user experiences and beautiful interfaces that solve real user problems.",
      responsibilities: [
        "Design user-centric web and mobile interfaces",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and design systems",
        "Collaborate with developers for implementation",
        "Maintain and evolve design guidelines"
      ],
      requirements: [
        "Proficiency in Figma and Adobe Creative Suite",
        "Strong portfolio showcasing UX process",
        "Experience with design systems",
        "Understanding of front-end development",
        "Excellent communication and presentation skills"
      ],
      skills: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
      postedDate: "2024-01-18"
    },
    {
      id: 3,
      department: "engineering",
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote",
      experience: "2-4 years",
      description: "Build and maintain robust infrastructure to support our growing platform and services.",
      responsibilities: [
        "Manage cloud infrastructure and deployment pipelines",
        "Implement monitoring and alerting systems",
        "Automate development and deployment processes",
        "Ensure system security and performance",
        "Collaborate with development teams"
      ],
      requirements: [
        "Experience with AWS/Azure/GCP",
        "Proficiency in Docker and Kubernetes",
        "Knowledge of CI/CD tools and practices",
        "Scripting skills (Bash, Python)",
        "Understanding of infrastructure as code"
      ],
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      postedDate: "2024-01-20"
    },
    {
      id: 4,
      department: "marketing",
      title: "Digital Marketing Specialist",
      type: "Full-time",
      location: "Mumbai",
      experience: "1-3 years",
      description: "Drive brand growth through innovative digital marketing strategies and campaigns.",
      responsibilities: [
        "Develop and execute digital marketing campaigns",
        "Manage SEO and content marketing strategies",
        "Analyze campaign performance and optimize ROI",
        "Manage social media presence and engagement",
        "Collaborate with design and content teams"
      ],
      requirements: [
        "Experience with digital marketing tools",
        "Knowledge of SEO and SEM best practices",
        "Analytical mindset with data-driven approach",
        "Excellent written and verbal communication",
        "Creative thinking and problem-solving skills"
      ],
      skills: ["SEO", "Content Marketing", "Google Analytics", "Social Media"],
      postedDate: "2024-01-22"
    },
    {
      id: 5,
      department: "business",
      title: "Business Development Manager",
      type: "Full-time",
      location: "Bangalore",
      experience: "3-6 years",
      description: "Drive business growth by building strategic partnerships and expanding our client base.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build and maintain client relationships",
        "Develop strategic partnership proposals",
        "Negotiate contracts and close deals",
        "Collaborate with technical teams on proposals"
      ],
      requirements: [
        "Proven track record in business development",
        "Excellent negotiation and communication skills",
        "Understanding of technology services market",
        "Ability to build long-term relationships",
        "Strategic thinking and analytical skills"
      ],
      skills: ["Business Strategy", "Sales", "Negotiation", "Client Management"],
      postedDate: "2024-01-25"
    },
    {
      id: 6,
      department: "internship",
      title: "ADRS Spark Intern",
      type: "Internship",
      location: "Remote / Office",
      experience: "Students/Freshers",
      description: "Kickstart your career with our comprehensive internship program and real-world project experience.",
      responsibilities: [
        "Work on live projects under expert mentorship",
        "Participate in training sessions and workshops",
        "Collaborate with cross-functional teams",
        "Develop and present project deliverables",
        "Learn and apply industry best practices"
      ],
      requirements: [
        "Pursuing or completed degree in relevant field",
        "Strong learning attitude and curiosity",
        "Basic knowledge of relevant technologies",
        "Good communication and teamwork skills",
        "Passion for technology and innovation"
      ],
      skills: ["Learning Agility", "Teamwork", "Problem Solving", "Adaptability"],
      postedDate: "2024-01-28"
    }
  ];

  // Why Join Us Features
  const whyJoinUs = [
    {
      icon: "🚀",
      title: "Impactful Work",
      description: "Work on projects that solve real-world problems and make a difference in people's lives through technology."
    },
    {
      icon: "🌱",
      title: "Growth Environment",
      description: "Continuous learning opportunities with mentorship programs, training sessions, and career advancement paths."
    },
    {
      icon: "💡",
      title: "Innovation Culture",
      description: "Be part of a team that values creativity, encourages new ideas, and embraces cutting-edge technologies."
    },
    {
      icon: "🤝",
      title: "Collaborative Team",
      description: "Work with talented professionals who support each other and believe in the power of teamwork."
    },
    {
      icon: "⚖️",
      title: "Work-Life Balance",
      description: "Flexible work arrangements and policies that help you maintain a healthy work-life integration."
    },
    {
      icon: "🏆",
      title: "Recognition & Rewards",
      description: "Your hard work and achievements are recognized and rewarded through our appreciation programs."
    }
  ];

  // Employee Benefits
  const benefits = [
    {
      category: "Learning & Development",
      items: [
        "Comprehensive training programs",
        "Conference and workshop sponsorships",
        "Online learning platform access",
        "Technical certification support",
        "Mentorship programs"
      ]
    },
    {
      category: "Health & Wellness",
      items: [
        "Comprehensive health insurance",
        "Mental wellness programs",
        "Fitness membership support",
        "Regular health check-ups",
        "Ergonomic work setup"
      ]
    },
    {
      category: "Work Environment",
      items: [
        "Flexible work arrangements",
        "Modern office spaces",
        "Collaborative workspaces",
        "Recreation zones",
        "Remote work options"
      ]
    },
    {
      category: "Financial Benefits",
      items: [
        "Competitive compensation packages",
        "Performance bonuses",
        "Retirement planning support",
        "Stock options program",
        "Tax saving investments"
      ]
    }
  ];

  // Company Culture Values
  const cultureValues = [
    {
      title: "Excellence in Execution",
      description: "We believe in delivering exceptional quality in everything we do, setting high standards and exceeding expectations."
    },
    {
      title: "Customer First Mindset",
      description: "Our decisions and innovations are driven by creating maximum value for our customers and understanding their needs."
    },
    {
      title: "Collaborative Innovation",
      description: "We foster an environment where diverse perspectives come together to create breakthrough solutions."
    },
    {
      title: "Continuous Learning",
      description: "We embrace curiosity and encourage continuous skill development to stay ahead in a rapidly evolving industry."
    }
  ];

  // Employee Testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Senior Developer",
      tenure: "2.5 years",
      quote: "The growth opportunities here are incredible. I've evolved from a junior developer to leading a team, thanks to the amazing mentorship and challenging projects.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&auto=format"
    },
    {
      name: "Rahul Verma",
      role: "Product Designer",
      tenure: "1.5 years",
      quote: "The creative freedom and trust I get here is remarkable. I've worked on diverse projects that helped me grow exponentially as a designer.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format"
    },
    {
      name: "Anita Patel",
      role: "Business Development Lead",
      tenure: "3 years",
      quote: "The collaborative culture and leadership support have been instrumental in my career growth. Every achievement is celebrated together.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format"
    }
  ];

  const filteredJobs = activeDepartment === "all" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeDepartment);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* ======================== HERO SECTION ======================== */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Build Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Future</span> With Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join a team of innovators, creators, and problem-solvers dedicated to making a difference through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#opportunities"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </a>
              <Link 
                to="/about"
                className="px-8 py-4 border-2 border-white/40 text-white rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                Our Culture
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== WHY JOIN US ======================== */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Choose Us</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're building more than just products - we're building careers and shaping the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoinUs.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== CURRENT OPENINGS ======================== */}
      <section id="opportunities" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Current <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore exciting career opportunities and find your perfect role in our growing team.
            </p>
          </div>

          {/* Department Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeDepartment === dept.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <div
                key={job.id}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Job Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">📍</span>
                        <span className="text-gray-600 dark:text-gray-400">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">⏱️</span>
                        <span className="text-gray-600 dark:text-gray-400">{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">🎯</span>
                        <span className="text-gray-600 dark:text-gray-400">{job.experience}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col gap-3">
                    <Link
                      to={`/career/apply/${job.id}`}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Apply Now
                    </Link>
                    <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Jobs Message */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No Current Openings
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We don't have any openings in this department at the moment.
              </p>
              <button
                onClick={() => setActiveDepartment("all")}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                View All Opportunities
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ======================== COMPANY CULTURE ======================== */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Culture</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We've built a culture that fosters innovation, collaboration, and personal growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== EMPLOYEE BENEFITS ======================== */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Employee <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We take care of our team with comprehensive benefits that support your professional and personal well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.category}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== EMPLOYEE TESTIMONIALS ======================== */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Life at <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Our Company</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from our team members about their experiences and growth journeys.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">
                      {testimonial.tenure} with us
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== APPLICATION CTA ======================== */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Build Together</span>?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            If you don't see the perfect role but believe you can contribute to our mission, we'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Send General Application
            </Link>
            <a
              href="#opportunities"
              className="px-8 py-4 border-2 border-white/40 text-white rounded-xl font-bold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Explore Open Roles
            </a>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-white/80">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-white/80">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-white/80">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}