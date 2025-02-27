import React from 'react'
import {TestimonialCard} from '../src/components/TestimonialCard'



function App() {
  const testimonials = [
    {
      name: 'kushal',
      text: 'I absolutely love this product! The quality and customer service are top-notch.',

    },

    {
      name: 'vaibhaav',
      text: 'I have used this product before and it was absolutely fantastic. The customer service is amazing.',
    },
  ]


  return (
    <>
    <div className='app'>
      <h1>Testimonials</h1>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}

    </div>
    </>
  )
}

export default App
