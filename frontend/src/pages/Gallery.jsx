import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Gallery Categories
  const categories = [
    { id: "all", name: "All Photos" },
    { id: "team", name: "Team" },
    { id: "office", name: "Office" },
    { id: "events", name: "Events" },
    { id: "work", name: "Work Culture" }
  ];

  // Gallery Images
  const galleryImages = [
    // Team Photos
    {
      id: 1,
      category: "team",
      title: "Our Core Team",
      description: "The passionate minds behind ADRS Technosoft's success",
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=300&fit=crop&auto=format",
      date: "2024-01-15"
    },
    {
      id: 2,
      category: "team",
      title: "Development Team",
      description: "Our talented developers working on innovative solutions",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&auto=format",
      date: "2024-01-20"
    },
    {
      id: 3,
      category: "team",
      title: "Design Team Collaboration",
      description: "Creative minds brainstorming the next big idea",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&auto=format",
      date: "2024-02-05"
    },
    {
      id: 4,
      category: "team",
      title: "Leadership Team",
      description: "Strategic planning session with our leadership team",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&auto=format",
      date: "2024-02-10"
    },

    // Office Photos
    {
      id: 5,
      category: "office",
      title: "Modern Workspace",
      description: "Our state-of-the-art office designed for creativity and collaboration",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop&auto=format",
      date: "2024-01-08"
    },
    {
      id: 6,
      category: "office",
      title: "Collaboration Zone",
      description: "Comfortable spaces for team discussions and brainstorming",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&auto=format",
      date: "2024-01-12"
    },
    {
      id: 7,
      category: "office",
      title: "Development Area",
      description: "Dedicated spaces for focused coding and development work",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
      date: "2024-01-18"
    },
    {
      id: 8,
      category: "office",
      title: "Recreation Space",
      description: "Relaxation area for team breaks and informal meetings",
      image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=400&h=300&fit=crop&auto=format",
      date: "2024-02-01"
    },

    // Events Photos
    {
      id: 9,
      category: "events",
      title: "Annual Tech Conference",
      description: "Our team participating in the annual technology summit",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&auto=format",
      date: "2024-01-25"
    },
    {
      id: 10,
      category: "events",
      title: "Team Building Workshop",
      description: "Enhancing teamwork through interactive sessions and activities",
      image: "https://images.unsplash.com/photo-1515168833906-d2d03e5a7d85?w=400&h=300&fit=crop&auto=format",
      date: "2024-02-08"
    },
    {
      id: 11,
      category: "events",
      title: "Product Launch Event",
      description: "Celebrating the successful launch of our new product line",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop&auto=format",
      date: "2024-02-15"
    },
    {
      id: 12,
      category: "events",
      title: "Hackathon 2024",
      description: "24-hour coding competition fostering innovation and creativity",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=300&fit=crop&auto=format",
      date: "2024-02-20"
    },

    // Work Culture Photos
    {
      id: 13,
      category: "work",
      title: "Agile Stand-up Meeting",
      description: "Daily stand-up meetings to align team goals and progress",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&auto=format",
      date: "2024-01-10"
    },
    {
      id: 14,
      category: "work",
      title: "Code Review Session",
      description: "Collaborative code review ensuring quality and best practices",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&auto=format",
      date: "2024-01-22"
    },
    {
      id: 15,
      category: "work",
      title: "Design Sprint",
      description: "Rapid prototyping and design thinking workshops",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&auto=format",
      date: "2024-02-03"
    },
    {
      id: 16,
      category: "work",
      title: "Client Presentation",
      description: "Presenting innovative solutions to our valued clients",
      image: "https://images.unsplash.com/photo-1551836026-d5c8f5a3e2b9?w=400&h=300&fit=crop&auto=format",
      date: "2024-02-12"
    },
    {
      id: 17,
      category: "work",
      title: "Training Session",
      description: "Continuous learning and skill development workshops",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&auto=format",
      date: "2024-02-18"
    },
    {
      id: 18,
      category: "work",
      title: "Celebrating Success",
      description: "Recognizing team achievements and project milestones",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
      date: "2024-02-25"
    }
  ];

  // Team Highlights
  const teamHighlights = [
    {
      name: "Development Team",
      count: "12+",
      description: "Expert Developers",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop&auto=format"
    },
    {
      name: "Design Team",
      count: "6+",
      description: "Creative Designers",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&auto=format"
    },
    {
      name: "Projects Completed",
      count: "150+",
      description: "Successful Deliveries",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&auto=format"
    }
  ];

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

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
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              A visual journey through our team, workspace, events, and the vibrant culture that makes ADRS Technosoft special.
            </p>
          </div>
        </div>
      </section>

      {/* ======================== TEAM HIGHLIGHTS ======================== */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {teamHighlights.map((highlight, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={highlight.image} 
                  alt={highlight.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-2xl font-bold">{highlight.count}</div>
                  <div className="text-lg font-semibold">{highlight.name}</div>
                  <div className="text-blue-200 text-sm">{highlight.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== GALLERY FILTERS ======================== */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== GALLERY GRID ======================== */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image */}
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200 mb-2 line-clamp-2">
                      {image.description}
                    </p>
                    <div className="text-xs text-blue-200">
                      {new Date(image.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* No Images Message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No Photos Available
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                There are no photos in this category at the moment.
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                View All Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ======================== WORK CULTURE HIGHLIGHTS ======================== */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Work Culture</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the environment that fosters innovation, collaboration, and continuous growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💻",
                title: "Modern Workspaces",
                description: "State-of-the-art facilities designed for productivity and comfort"
              },
              {
                icon: "🤝",
                title: "Team Collaboration",
                description: "Spaces that encourage teamwork and creative brainstorming"
              },
              {
                icon: "🎯",
                title: "Focus Areas",
                description: "Dedicated zones for deep work and concentration"
              },
              {
                icon: "☕",
                title: "Relaxation Zones",
                description: "Comfortable areas for breaks and informal meetings"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== IMAGE MODAL ======================== */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              ✕
            </button>

            {/* Image */}
            <div className="flex items-center justify-center h-96 lg:h-[500px]">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Image Details */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedImage.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Category: <span className="capitalize text-blue-600 dark:text-blue-400">{selectedImage.category}</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Date: <span className="text-gray-700 dark:text-gray-300">
                      {new Date(selectedImage.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
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
            Want to Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Team</span>?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Like what you see? Come be a part of our dynamic team and help us create amazing technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/career"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white/40 text-white rounded-xl font-bold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}