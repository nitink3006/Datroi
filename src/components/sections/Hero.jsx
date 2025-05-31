import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative bg-primary-600 text-white min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-700/80 to-primary-600"></div>
      </div>
      
      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-1 mb-6">
              Building <span className="text-accent-500">Futures</span> in Education & Real Estate
            </h1>
            <p className="subtitle mb-8 text-white/80">
              Datroi offers premium educational opportunities and professional real estate services. 
              Whether you're looking to advance your career or find your dream property, we're here to help you succeed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary bg-accent-500 hover:bg-accent-600">
                Get Started
              </Link>
              {/* <Link to="/#business-areas" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                Learn More
              </Link> */}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-accent-500/20 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional development and growth concept" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero