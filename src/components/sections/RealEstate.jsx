import { motion } from 'framer-motion'
import { FaHome, FaBuilding, FaHandshake, FaChartLine } from 'react-icons/fa'

const RealEstate = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  const services = [
    {
      id: 1,
      icon: <FaHome className="text-4xl text-accent-500" />,
      title: "Residential Properties",
      description: "Find your perfect home with our extensive residential property listings, including apartments, villas, and luxury homes."
    },
    {
      id: 2,
      icon: <FaBuilding className="text-4xl text-accent-500" />,
      title: "Commercial Real Estate",
      description: "Discover prime commercial spaces for your business, from office buildings to retail locations and industrial facilities."
    },
    {
      id: 3,
      icon: <FaHandshake className="text-4xl text-accent-500" />,
      title: "Property Consultation",
      description: "Receive expert guidance on property transactions, valuation, legal aspects, and documentation from our experienced consultants."
    },
    {
      id: 4,
      icon: <FaChartLine className="text-4xl text-accent-500" />,
      title: "Investment Advisory",
      description: "Make informed real estate investment decisions with our data-driven market analysis and tailored investment strategies."
    }
  ]

  return (
    <section id="real-estate" className="section-padding bg-gray-50">
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
                src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Real Estate Services" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-accent-100 text-primary-600 font-medium text-sm mb-4"
              {...fadeIn}
            >
              Real Estate Services
            </motion.span>
            
            <motion.h2 
              className="heading-2 text-primary-600 mb-6"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Exceptional Real Estate Solutions
            </motion.h2>
            
            <motion.p 
              className="subtitle mb-8"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our real estate division offers comprehensive services for property buyers, sellers, 
              and investors. With deep market knowledge and a client-focused approach, we help you 
              navigate the complex real estate landscape to find the perfect property or maximize 
              your investment returns.
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

export default RealEstate