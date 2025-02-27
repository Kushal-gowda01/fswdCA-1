//take props and display
import React from 'react'
import Testimonial from '../App.jsx'

const TestimonialCard = ({ customerName, reviewText }) => {
    const { customerName, reviewText } = props;
    return (
        <div className="testimonial-card">
            <h3>{customerName}</h3>
            <p>{reviewText}</p>
        </div>
    )
}

TestimonialCard.Testimonial = { 
    customerName: React.PropTypes.string.isRequired,
    reviewText: React.PropTypes.string.isRequired,
};

export default TestimonialCard



