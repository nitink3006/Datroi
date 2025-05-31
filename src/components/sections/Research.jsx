import React from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaChartBar, FaDatabase, FaCog } from 'react-icons/fa'

const Research = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  const services = [
    {
      id: 1,
      icon: <FaSearch className="text-4xl text-accent-500" />,
      title: "Market research & analysis",
      description: "Comprehensive market studies and competitive analysis to help you understand market dynamics and identify growth opportunities."
    },
    {
      id: 2,
      icon: <FaChartBar className="text-4xl text-accent-500" />,
      title: "Industry trend studies",
      description: "In-depth analysis of industry trends, emerging patterns, and future forecasts to keep you ahead of market developments."
    },
    {
      id: 3,
      icon: <FaDatabase className="text-4xl text-accent-500" />,
      title: "Data collection & insights",
      description: "Systematic data gathering and analysis to provide actionable insights that drive informed business decisions."
    },
    {
      id: 4,
      icon: <FaCog className="text-4xl text-accent-500" />,
      title: "Custom research solutions",
      description: "Tailored research methodologies and solutions designed to address your specific business challenges and requirements."
    }
  ]

  return (
    <section id="research" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="lg:w-1/2">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-accent-100 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Research Services" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-accent-100 text-primary-600 font-medium text-sm mb-4"
              {...fadeIn}
            >
              Research Services
            </motion.span>
            
            <motion.h2 
              className="heading-2 text-primary-600 mb-6"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Data-Driven Research & Analysis Solutions
            </motion.h2>
            
            <motion.p 
              className="subtitle mb-8"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our comprehensive research services provide in-depth analysis and insights across various 
              industries to support strategic business planning. We deliver data-driven solutions that 
              help organizations make informed decisions, understand market dynamics, and identify new 
              opportunities for growth and innovation.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={service.id} 
                  className="flex flex-col p-5 rounded-lg border border-gray-200 hover:border-accent-200 hover:shadow-md transition-all duration-300"
                  {...fadeIn}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-primary-600 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research