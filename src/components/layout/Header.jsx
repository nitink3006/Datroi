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
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 max-h-96 overflow-y-auto"
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
                  <Link 
                    to="/#hr" 
                    className="block px-4 py-2 text-primary-600 hover:bg-primary-50 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('hr')?.scrollIntoView({ behavior: 'smooth' })
                      setIsBusinessOpen(false)
                    }}
                  >
                    HR
                  </Link>
                  <Link 
                    to="/#internships" 
                    className="block px-4 py-2 text-primary-600 hover:bg-primary-50 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('internships')?.scrollIntoView({ behavior: 'smooth' })
                      setIsBusinessOpen(false)
                    }}
                  >
                    Internships
                  </Link>
                  <Link 
                    to="/#investment" 
                    className="block px-4 py-2 text-primary-600 hover:bg-primary-50 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })
                      setIsBusinessOpen(false)
                    }}
                  >
                    Investment and Funding
                  </Link>
                  <Link 
                    to="/#research" 
                    className="block px-4 py-2 text-primary-600 hover:bg-primary-50 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })
                      setIsBusinessOpen(false)
                    }}
                  >
                    Research
                  </Link>
                  <Link 
                    to="/#society" 
                    className="block px-4 py-2 text-primary-600 hover:bg-primary-50 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('society')?.scrollIntoView({ behavior: 'smooth' })
                      setIsBusinessOpen(false)
                    }}
                  >
                    Society
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
              className="fixed inset-0 bg-white flex flex-col items-center justify-center lg:hidden overflow-y-auto"
            >
              <nav className="flex flex-col items-center space-y-6 py-8">
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
                <div className="flex flex-col items-center space-y-3">
                  <span className="text-primary-600 text-xl font-medium mb-2">Business</span>
                  <Link 
                    to="/#education" 
                    className="text-primary-600 text-lg hover:text-accent-500 transition-colors"
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
                    className="text-primary-600 text-lg hover:text-accent-500 transition-colors"
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
                  <Link 
                    to="/#hr" 
                    className="text-primary-600 text-lg hover:text-accent-500 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      closeMenu()
                      setTimeout(() => {
                        document.getElementById('hr')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                  >
                    HR
                  </Link>
                  <Link 
                    to="/#internships" 
                    className="text-primary-600 text-lg hover:text-accent-500 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      closeMenu()
                      setTimeout(() => {
                        document.getElementById('internships')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                  >
                    Internships
                  </Link>
                  <Link 
                    to="/#investment" 
                    className="text-primary-600 text-lg hover:text-accent-500 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      closeMenu()
                      setTimeout(() => {
                        document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                  >
                    Investment and Funding
                  </Link>
                  <Link 
                    to="/#research" 
                    className="text-primary-600 text-lg hover:text-accent-500 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      closeMenu()
                      setTimeout(() => {
                        document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                  >
                    Research
                  </Link>
                  <Link 
                    to="/#society" 
                    className="text-primary-600 text-lg hover:text-accent-500 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      closeMenu()
                      setTimeout(() => {
                        document.getElementById('society')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                  >
                    Society
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