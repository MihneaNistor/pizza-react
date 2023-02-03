import React from 'react';
import "../styles/contact.css";

function Contact() {
  return (
    <div className='contact'>
        <div className='left' style={{backgroundImage: "url('https://github.com/machadop1407/react-website-tutorial/blob/main/src/assets/pizzaLeft.jpg?raw=true')"}}>
        </div>
        <div className='right'>
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder="Enter Full Name..." type="text" />
                
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter Email..." type="email" />
                
                <label htmlFor="message">Message</label>
                <textarea rows="6" placeholder="Enter message..." name="message"></textarea>

                <input class="button" type="submit" value="Send Message"/>
            </form>
        </div>
    </div>
  );
}

export default Contact