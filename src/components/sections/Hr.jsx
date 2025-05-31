import React from 'react'
import { motion } from 'framer-motion'
import { FaUsers, FaUserPlus, FaChartLine, FaCogs } from 'react-icons/fa'

const Hr = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  const services = [
    {
      id: 1,
      icon: <FaUserPlus className="text-4xl text-accent-500" />,
      title: "Talent acquisition & recruitment",
      description: "Find and attract top talent with our comprehensive recruitment services, from job posting to candidate screening and selection."
    },
    {
      id: 2,
      icon: <FaChartLine className="text-4xl text-accent-500" />,
      title: "Employee development programs",
      description: "Build stronger teams through customized training programs, skill development workshops, and career advancement planning."
    },
    {
      id: 3,
      icon: <FaCogs className="text-4xl text-accent-500" />,
      title: "HR policy development",
      description: "Create comprehensive HR policies and procedures that align with your organization's goals and comply with regulations."
    },
    {
      id: 4,
      icon: <FaUsers className="text-4xl text-accent-500" />,
      title: "Performance management systems",
      description: "Implement effective performance evaluation systems that drive employee engagement and organizational success."
    }
  ]

  return (
    <section id="hr" className="section-padding bg-gray-50">
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
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="HR Services" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-accent-100 text-primary-600 font-medium text-sm mb-4"
              {...fadeIn}
            >
              HR Services
            </motion.span>
            
            <motion.h2 
              className="heading-2 text-primary-600 mb-6"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Strategic Human Resources Solutions
            </motion.h2>
            
            <motion.p 
              className="subtitle mb-8"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our comprehensive HR services help businesses build strong, effective teams through 
              strategic talent acquisition, employee development, and organizational consulting. 
              We provide end-to-end human resource solutions that align with your business goals 
              and drive organizational success.
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

export default Hr