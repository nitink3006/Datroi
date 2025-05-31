import { motion } from 'framer-motion'
import { FaUserGraduate, FaLaptopCode, FaChalkboardTeacher, FaHandshake } from 'react-icons/fa'

const Education = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  const services = [
    {
      id: 1,
      icon: <FaUserGraduate className="text-4xl text-accent-500" />,
      title: "Internship Programs",
      description: "Gain hands-on experience in various industries with our structured internship programs designed for students and recent graduates."
    },
    {
      id: 2,
      icon: <FaLaptopCode className="text-4xl text-accent-500" />,
      title: "Technical Training",
      description: "Develop in-demand technical skills with our specialized training programs led by industry experts in IT, data science, and more."
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher className="text-4xl text-accent-500" />,
      title: "Professional Development",
      description: "Enhance your professional skills with our comprehensive courses in leadership, communication, project management, and other essential areas."
    },
    {
      id: 4,
      icon: <FaHandshake className="text-4xl text-accent-500" />,
      title: "Career Mentorship",
      description: "Connect with experienced professionals for personalized guidance to help you navigate your career path and achieve your goals."
    }
  ]

  return (
    <section id="education" className="section-padding bg-white">
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
                src="https://images.pexels.com/photos/3184660/pexels-photo-3184660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Education and Training" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 font-medium text-sm mb-4"
              {...fadeIn}
            >
              Education Services
            </motion.span>
            
            <motion.h2 
              className="heading-2 text-primary-600 mb-6"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering Careers Through Education & Training
            </motion.h2>
            
            <motion.p 
              className="subtitle mb-8"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At Datroi, we believe in the transformative power of education. Our comprehensive 
              training programs and internship opportunities are designed to bridge the gap between 
              academic knowledge and industry requirements, preparing individuals for successful careers.
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

export default Education