import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="heading-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Take the Next Step?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-white/80 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you're looking to enhance your career through our education services or
            find your ideal property through our real estate division, we're here to help you succeed.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              to="/contact" 
              className="btn-primary bg-accent-500 hover:bg-accent-600 text-center"
            >
              Contact Us Today
            </Link>
            <Link 
              to="/#business-areas" 
              className="btn-secondary bg-transparent text-white border-white hover:bg-white/10 text-center"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('business-areas').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction