import React, { useState, useEffect } from 'react';

const BusinessAreas = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Simulate animation trigger on component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // SVG Icons as components
  const GraduationCap = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zM5 13.18l7 3.82 7-3.82V11L12 15L5 11v2.18z"/>
    </svg>
  )
  
  const Home = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  )
  
  const Users = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2 1l-3.72 5.6L8.5 11.5A1.5 1.5 0 0 0 7 11H4.5c-.83 0-1.5.67-1.5 1.5S3.67 14 4.5 14H6l2 7h4l2.05-7.38L17 18h3z"/>
    </svg>
  )
  
  const Briefcase = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zm0 2v2h4V4h-4z"/>
    </svg>
  )
  
  const TrendingUp = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/>
    </svg>
  )
  
  const Search = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  )
  
  const Heart = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  )
  
  const businessAreas = [
    {
      id: 'education',
      title: 'Education Services',
      icon: GraduationCap,
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'We provide exceptional educational programs and professional training designed to equip individuals with in-demand skills and practical knowledge for career advancement.',
      features: [
        'Professional certification courses',
        'Skill development workshops', 
        'Online learning platforms',
        'Educational consulting services'
      ],
      color: 'bg-gradient-to-r from-blue-500 to-indigo-600'
    },
    {
      id: 'real-estate',
      title: 'Real Estate Services', 
      icon: Home,
      image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Our real estate division offers comprehensive services for property buyers, sellers, and investors. We provide expert guidance through every step of the real estate transaction process.',
      features: [
        'Residential & commercial properties',
        'Investment consultation',
        'Property management services',
        'Real estate valuation'
      ],
      color: 'bg-gradient-to-r from-emerald-500 to-teal-600'
    },
    {
      id: 'hr',
      title: 'HR Services',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Strategic human resources solutions including talent acquisition, employee development, and organizational consulting to help businesses build strong teams.',
      features: [
        'Talent acquisition & recruitment',
        'Employee development programs',
        'HR policy development',
        'Performance management systems'
      ],
      color: 'bg-gradient-to-r from-purple-500 to-fuchsia-600'
    },
    {
      id: 'internships',
      title: 'Internship Programs',
      icon: Briefcase,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Industry-focused internship opportunities providing hands-on experience and career development for students and young professionals entering the workforce.',
      features: [
        'Industry-specific placements',
        'Mentorship programs',
        'Skill-based training',
        'Career guidance & support'
      ],
      color: 'bg-gradient-to-r from-amber-500 to-orange-600'
    },
    {
      id: 'investment',
      title: 'Investment & Funding',
      icon: TrendingUp,
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Strategic investment advisory and funding solutions for businesses and individuals looking to grow their financial portfolio and secure funding opportunities.',
      features: [
        'Investment portfolio management',
        'Startup funding assistance',
        'Financial planning services',
        'Risk assessment & analysis'
      ],
      color: 'bg-gradient-to-r from-green-500 to-lime-600'
    },
    {
      id: 'research',
      title: 'Research',
      icon: Search,
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Comprehensive research and analysis services across various industries to support data-driven decision making and strategic business planning.',
      features: [
        'Market research & analysis',
        'Industry trend studies',
        'Data collection & insights',
        'Custom research solutions'
      ],
      color: 'bg-gradient-to-r from-cyan-500 to-sky-600'
    },
    {
      id: 'society',
      title: 'Society & Community',
      icon: Heart,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Community development initiatives and social responsibility programs that create positive impact in society and contribute to sustainable development.',
      features: [
        'Community development projects',
        'Social welfare programs',
        'Environmental initiatives',
        'Educational outreach'
      ],
      color: 'bg-gradient-to-r from-rose-500 to-pink-600'
    }
  ]
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <section id="business-areas" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-16 h-1 bg-blue-600 rounded-full mr-4"></div>
            <h2 className="text-xl font-semibold text-blue-600 uppercase tracking-wider">Our Expertise</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Business <span className="text-blue-600">Areas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Datroi specializes in building a better world through diverse services that empower individuals and organizations.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {businessAreas.map((area) => {
            const IconComponent = area.icon;
            const isHovered = hoveredCard === area.id;
            
            return (
              <div 
                key={area.id}
                className={`relative overflow-hidden rounded-xl shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group ${isHovered ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
                onMouseEnter={() => setHoveredCard(area.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 ${area.color} opacity-10 z-0`}></div>
                
                {/* Card content */}
                <div className="relative z-10 flex flex-col h-full bg-white bg-opacity-90 backdrop-blur-sm">
                  {/* Image with gradient overlay */}
                  <div 
                    className="relative h-48 overflow-hidden cursor-pointer" 
                    onClick={() => scrollToSection(area.id)}
                  >
                    <img 
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.background = 'linear-gradient(135deg, #3b82f6, #1e40af)';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <div className="flex items-center">
                        <div className="w-14 h-14 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center p-2 mr-4">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card body */}
                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <div className="w-4 h-0.5 bg-blue-500 mr-2"></div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Key Features</h4>
                      </div>
                      <ul className="space-y-2">
                        {area.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button 
                      onClick={() => scrollToSection(area.id)}
                      className="mt-auto inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer group/button"
                    >
                      <span className="mr-2">Explore Services</span>
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/4 -translate-y-1/2 opacity-10">
          <div className="w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
        </div>
        <div className="absolute right-0 bottom-1/4 translate-y-1/2 opacity-10">
          <div className="w-80 h-80 rounded-full bg-indigo-500 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}

export default BusinessAreas;