import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import Logo from '../ui/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-600 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo color="light" />
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              Datroi is a premier provider of real estate services and educational opportunities, 
              committed to excellence and innovation in both sectors.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-500 transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-500 transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-500 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-500 transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-accent-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#education" className="text-sm opacity-80 hover:opacity-100 hover:text-accent-500 transition-colors duration-300">
                  Education Services
                </Link>
              </li>
              <li>
                <Link to="/#real-estate" className="text-sm opacity-80 hover:opacity-100 hover:text-accent-500 transition-colors duration-300">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 hover:text-accent-500 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#internships" className="text-sm opacity-80 hover:opacity-100 hover:text-accent-500 transition-colors duration-300">
                  Internship Programs
                </Link>
              </li>
              <li>
                <Link to="/#training" className="text-sm opacity-80 hover:opacity-100 hover:text-accent-500 transition-colors duration-300">
                  Professional Training
                </Link>
              </li>
              <li>
                <Link to="/#properties" className="text-sm opacity-80 hover:opacity-100 hover:text-accent-500 transition-colors duration-300">
                  Property Listings
                </Link>
              </li>
              <li>
                <Link to="/#consulting" className="text-sm opacity-80 hover:opacity-100 hover:text-accent-500 transition-colors duration-300">
                  Real Estate Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-accent-500" />
                <span className="text-sm opacity-80">
                  Datroi Pvt Ltd <br />
Plot no. 785, Udyog Vihar, Phase 5 Industrial Complex, Gurugram, India
                </span>
              </li>
{/*               <li className="flex items-center">
                <FaPhone className="mr-3 text-accent-500" />
                <span className="text-sm opacity-80">+91 98765 43210</span>
              </li> */}
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-accent-500" />
                <span className="text-sm opacity-80">info@datroi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
<p className="text-sm opacity-70">
  &copy; {currentYear} Datroi.com. All rights reserved. | Designed by <a href="https://webcrafticx.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity text-accent-500">webcrafticx</a>
</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
