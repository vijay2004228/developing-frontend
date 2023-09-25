import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file

const FAQ = () => {
    // Define an array of FAQ items (questions and answers)
    const faqItems = [
        {
            question: 'What is a React.js-based classroom application?',
            answer: 'A React.js-based classroom application is a web platform built using the React.js library, which allows for the creation of interactive and dynamic user interfaces. It is designed to facilitate online learning by providing features like course management, assignments, discussions, and user profiles.'
        },
        {
            question: 'How do I start a new React.js project for a classroom web application?',
            answer: 'You can initiate a new React.js project by using tools like Create React App (CRA), which sets up a boilerplate project with the necessary configurations.'
        },
        {
            question: 'What are React components and how are they used in a classroom web application?',
            answer: 'React components are individual pieces of the user interface that can be composed together to form a complete application'
        },
        {
            question: 'How is state managed in a React.js web application?',
            answer: 'State management in React.js can be handled using the useState hook for local component state or by implementing a global state management solution like Redux. '
        },
        
        // Add more FAQ items as needed
    ];

    // Initialize state to keep track of which FAQ item is currently expanded
    const [activeItem, setActiveItem] = useState(null);

    // Function to toggle the active FAQ item
    const toggleItem = (index) => {
        if (activeItem === index) {
            // If the clicked item is already active, close it
            setActiveItem(null);
        } else {
            // Otherwise, open the clicked item
            setActiveItem(index);
        }
    };

    return (
        <div className='faq-main'>
        <div className="faq-container">
            <h2 className='faq-h2'>Frequently Asked Questions</h2>
            <ul>
                {faqItems.map((item, index) => (
                    <li key={index}>
                        <button className={`faq-question ${activeItem === index ? 'active' : ''}`} onClick={() => toggleItem(index)}>
                            {item.question}
                        </button>
                        {activeItem === index && <p className="faq-answer">{item.answer}</p>}
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default FAQ;