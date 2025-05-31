import React from 'react'
import { motion } from 'framer-motion'
import { FaChartLine, FaRocket, FaCalculator, FaShieldAlt } from 'react-icons/fa'

const Investment = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  const services = [
    {
      id: 1,
      icon: <FaChartLine className="text-4xl text-accent-500" />,
      title: "Investment portfolio management",
      description: "Professional portfolio management services to optimize your investment returns while balancing risk and growth opportunities."
    },
    {
      id: 2,
      icon: <FaRocket className="text-4xl text-accent-500" />,
      title: "Startup funding assistance",
      description: "Comprehensive support for startups seeking funding, including pitch preparation, investor connections, and funding strategy development."
    },
    {
      id: 3,
      icon: <FaCalculator className="text-4xl text-accent-500" />,
      title: "Financial planning services",
      description: "Personalized financial planning solutions to help you achieve your long-term financial goals and secure your financial future."
    },
    {
      id: 4,
      icon: <FaShieldAlt className="text-4xl text-accent-500" />,
      title: "Risk assessment & analysis",
      description: "Thorough risk evaluation and analysis to help you make informed investment decisions and protect your financial interests."
    }
  ]

  return (
    <section id="investment" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary-100 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Investment & Funding" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 font-medium text-sm mb-4"
              {...fadeIn}
            >
              Investment Services
            </motion.span>
            
            <motion.h2 
              className="heading-2 text-primary-600 mb-6"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Strategic Investment & Funding Solutions
            </motion.h2>
            
            <motion.p 
              className="subtitle mb-8"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our investment and funding services provide strategic advisory solutions for businesses 
              and individuals looking to grow their financial portfolio. We offer comprehensive support 
              from investment planning to securing funding opportunities, helping you achieve your 
              financial goals with confidence and expertise.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={service.id} 
                  className="flex flex-col p-5 rounded-lg border border-gray-200 hover:border-primary-200 hover:shadow-md transition-all duration-300"
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

export default Investment