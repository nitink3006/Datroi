import { useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import Logo from '../ui/Logo'

const Header = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isBusinessOpen, setIsBusinessOpen] = useState(false)
  const businessTimeoutRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setIsBusinessOpen(false)
  }

  const handleBusinessMouseEnter = () => {
    // Clear any existing timeout
    if (businessTimeoutRef.current) {
      clearTimeout(businessTimeoutRef.current)
    }
    setIsBusinessOpen(true)
  }

  const handleBusinessMouseLeave = () => {
    // Add delay before closing
    businessTimeoutRef.current = setTimeout(() => {
      setIsBusinessOpen(false)
    }, 200) // 200ms delay
  }

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="z-10">
            <Logo color={scrolled || isOpen ? 'dark' : 'light'} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-${scrolled ? 'primary-600' : 'white'} hover:text-accent-500 font-medium transition-colors duration-300 ${isActive ? 'border-b-2 border-accent-500' : ''}`
              }
            >
              Home
            </NavLink>
            
            {/* Business Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={handleBusinessMouseEnter}
              onMouseLeave={handleBusinessMouseLeave}
            >
              <button 
                className={`flex items-center text-${scrolled ? 'primary-600' : 'white'} hover:text-accent-500 font-medium transition-colors duration-300`}
              >
                Business <FaChevronDown className="ml-1" />
              </button>
              
              {isBusinessOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                >
                  <Link 
                    to="/#education" 
                    className="block px-4 py-2 text-primary-600 hover:bg-primary-50 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })
                      setIsBusinessOpen(false)
                    }}
                  >
                    Education
                  </Link>
                  <Link 
                    to="/#real-estate" 
                    className="block px-4 py-2 text-primary-600 hover:bg-primary-50 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('real-estate')?.scrollIntoView({ behavior: 'smooth' })
                      setIsBusinessOpen(false)
                    }}
                  >
                    Real Estate
                  </Link>
                </div>
              )}
            </div>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-${scrolled ? 'primary-600' : 'white'} hover:text-accent-500 font-medium transition-colors duration-300 ${isActive ? 'border-b-2 border-accent-500' : ''}`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-10 text-2xl focus:outline-none" 
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FaTimes className={`text-${scrolled ? 'primary-600' : 'white'}`} />
            ) : (
              <FaBars className={`text-${scrolled ? 'primary-600' : 'white'}`} />
            )}
          </button>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white flex flex-col items-center justify-center lg:hidden"
            >
              <nav className="flex flex-col items-center space-y-8">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `text-primary-600 text-xl font-medium ${isActive ? 'text-accent-500' : ''}`
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
                
                {/* Business Section in Mobile Menu */}
                <div className="flex flex-col items-center space-y-4">
                  <span className="text-primary-600 text-xl font-medium">Business</span>
                  <Link 
                    to="/#education" 
                    className="text-primary-600 text-lg"
                    onClick={(e) => {
                      e.preventDefault()
                      closeMenu()
                      setTimeout(() => {
                        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                  >
                    Education
                  </Link>
                  <Link 
                    to="/#real-estate" 
                    className="text-primary-600 text-lg"
                    onClick={(e) => {
                      e.preventDefault()
                      closeMenu()
                      setTimeout(() => {
                        document.getElementById('real-estate')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                  >
                    Real Estate
                  </Link>
                </div>

                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `text-primary-600 text-xl font-medium ${isActive ? 'text-accent-500' : ''}`
                  }
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </nav>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header