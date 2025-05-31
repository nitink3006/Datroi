import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "The internship program at Datroi was a game-changer for my career. The hands-on experience and mentorship I received helped me secure a full-time position in my field within weeks of completing the program.",
      author: "Priya Sharma",
      position: "Software Developer",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      content: "Datroi's real estate consultants provided exceptional service when I was looking to invest in commercial property. Their market insights and personalized approach helped me find the perfect investment opportunity.",
      author: "Rahul Mehra",
      position: "Business Owner",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      content: "The professional training program at Datroi completely transformed my skill set. The industry-relevant curriculum and expert instructors gave me the confidence to advance my career to the next level.",
      author: "Ananya Patel",
      position: "Marketing Manager",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }

  const prev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="heading-2 text-primary-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hear from our satisfied clients about their experiences with Datroi's 
            education and real estate services.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-lg shadow-md p-8 md:p-10">
                    <FaQuoteLeft className="text-accent-300 text-4xl mb-6" />
                    <p className="text-gray-700 italic mb-8 text-lg">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-600">{testimonial.author}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prev}
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md focus:outline-none text-primary-600 hover:text-primary-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            onClick={next}
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md focus:outline-none text-primary-600 hover:text-primary-700 transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  current === index ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials