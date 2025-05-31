import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const onSubmit = (data) => {
    console.log(data)
    alert("Thank you for your message! We will contact you soon.")
    reset()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6">Contact Us</h1>
            <p className="subtitle text-white/80">
              Have questions about our services? We're here to help! 
              Reach out to our team using the contact information below 
              or fill out the form, and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Address */}
            <motion.div 
              className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">Our Location</h3>
              <p className="text-gray-600">
                Datroi Pvt Ltd <br />
Plot no. 785, Udyog Vihar, Phase 5 Industrial Complex, Gurugram, India
              </p>
            </motion.div>

            {/* Phone */}
            {/* <motion.div 
              className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">Phone Number</h3>
              <p className="text-gray-600">
                Main: +91 98765 43210<br />
                Support: +91 98765 43211
              </p>
            </motion.div> */}

            {/* Email */}
            <motion.div 
              className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">Email Address</h3>
              <p className="text-gray-600">
                info@datroi.com<br />
                support@datroi.com
              </p>
            </motion.div>

            {/* Business Hours */}
            <motion.div 
              className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-3 text-primary-600 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="Your full name"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-error-500">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="Your email address"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your phone number"
                    {...register('phone')}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-3 rounded-md border ${errors.subject ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Subject of your message"
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-error-500">{errors.subject.message}</p>
                  )}
                </div>

                {/* Interest */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    className={`w-full px-4 py-3 rounded-md border ${errors.interest ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    {...register('interest', { required: 'Please select an interest' })}
                  >
                    <option value="">Select an option</option>
                    <option value="education">Education Services</option>
                    <option value="real-estate">Real Estate Services</option>
                    <option value="both">Both Services</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  {errors.interest && (
                    <p className="mt-1 text-sm text-error-500">{errors.interest.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Your message here..."
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-error-500">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-primary bg-primary-600 hover:bg-primary-700 w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-[400px] lg:h-full"
            >
              <h2 className="heading-3 text-primary-600 mb-6">Our Location</h2>
              <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5258067721!2d76.76357111220952!3d28.643795032644507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1698763061595!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage