import { motion } from 'framer-motion'
import { FaGraduationCap, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BusinessAreas = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
  
  return (
    <section id="business-areas" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="heading-2 text-primary-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Business Areas
          </motion.h2>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Datroi specializes in two primary business sectors, offering exceptional services 
            in both education and real estate. Explore our diverse offerings and discover how 
            we can help you achieve your goals.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div 
            className="card group hover:translate-y-[-8px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Education and Training Programs" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-600/60 flex items-center justify-center">
                <FaGraduationCap className="text-white text-5xl" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="heading-3 text-primary-600 mb-3">Education Services</h3>
              <p className="text-gray-600 mb-4">
                We provide exceptional internship opportunities and professional training programs 
                designed to equip individuals with in-demand skills and practical experience for 
                career advancement.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Industry-focused internship programs
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Professional skill development
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Career mentorship opportunities
                </li>
              </ul>
              <Link 
                to="/#education" 
                className="inline-block font-medium text-primary-600 hover:text-primary-700 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('education').scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
          
          {/* Real Estate Card */}
          <motion.div 
            className="card group hover:translate-y-[-8px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Real Estate Services" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-600/60 flex items-center justify-center">
                <FaHome className="text-white text-5xl" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="heading-3 text-primary-600 mb-3">Real Estate Services</h3>
              <p className="text-gray-600 mb-4">
                Our real estate division offers comprehensive services for property buyers, sellers, 
                and investors. We provide expert guidance through every step of the real estate 
                transaction process.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Residential & commercial properties
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Investment consultation
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Property management services
                </li>
              </ul>
              <Link 
                to="/#real-estate" 
                className="inline-block font-medium text-primary-600 hover:text-primary-700 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('real-estate').scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BusinessAreas