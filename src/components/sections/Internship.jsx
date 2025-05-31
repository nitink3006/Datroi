import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaUsers, FaGraduationCap, FaChartLine } from 'react-icons/fa'

const Internship = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  const services = [
    {
      id: 1,
      icon: <FaBriefcase className="text-4xl text-accent-500" />,
      title: "Industry-specific placements",
      description: "Get placed in top companies across various industries including tech, finance, healthcare, and manufacturing based on your field of study."
    },
    {
      id: 2,
      icon: <FaUsers className="text-4xl text-accent-500" />,
      title: "Mentorship programs",
      description: "Connect with experienced professionals who provide guidance, support, and industry insights throughout your internship journey."
    },
    {
      id: 3,
      icon: <FaGraduationCap className="text-4xl text-accent-500" />,
      title: "Skill-based training",
      description: "Develop practical skills through hands-on training sessions, workshops, and real-world project experience tailored to your career goals."
    },
    {
      id: 4,
      icon: <FaChartLine className="text-4xl text-accent-500" />,
      title: "Career guidance & support",
      description: "Receive comprehensive career counseling, resume building, interview preparation, and long-term career planning assistance."
    }
  ]

  return (
    <section id="internships" className="section-padding bg-white">
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
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Internship Programs" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 font-medium text-sm mb-4"
              {...fadeIn}
            >
              Internship Services
            </motion.span>
            
            <motion.h2 
              className="heading-2 text-primary-600 mb-6"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Launch Your Career with Expert Guidance
            </motion.h2>
            
            <motion.p 
              className="subtitle mb-8"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our internship programs provide industry-focused opportunities that bridge the gap between 
              academic learning and professional experience. We offer hands-on training, mentorship, and 
              career development support to help students and young professionals successfully enter the 
              workforce with confidence and practical skills.
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

export default Internship