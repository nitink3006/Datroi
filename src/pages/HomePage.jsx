import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import BusinessAreas from '../components/sections/BusinessAreas'
import Education from '../components/sections/Education'
import RealEstate from '../components/sections/RealEstate'
import Testimonials from '../components/sections/Testimonials'
import CallToAction from '../components/sections/CallToAction'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <BusinessAreas />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Education />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <RealEstate />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <CallToAction />
      </motion.div>
    </>
  )
}

export default HomePage