// ContactInfo.js
import React from 'react';
import fbicon from './icons/facebook.png'
import instaicon from './icons/instagram.png'
import twiticon from './icons/twitter.png'
import giticon from './icons/github.png'
import './css/links.css';
function ContactInfo() {
  return (
    <div>
      <p><h2>Contact Information</h2></p>
      <p>Email: <a href="mailto:jarircse16@gmail.com" className="email-link">jarircse16@gmail.com</a></p>
      <p>Phone: <a href="tel:+8801615406040" className="email-link">+8801615406040</a></p>
      <p>
      <a href="https://www.facebook.com/jarir.in.ruet.cse/" target="_blank" rel="noopener noreferrer"><img src={fbicon} alt="Facebook" /></a>
      <a href="https://www.instagram.com/jarircse16/" target="_blank" rel="noopener noreferrer"><img src={instaicon} alt="Instagram" /></a>
      <a href="https://twitter.com/JarirAhmed16" target="_blank" rel="noopener noreferrer"><img src={twiticon} alt="Twitter" /></a>
      <a href="https://github.com/jarircse16" target="_blank" rel="noopener noreferrer"><img src={giticon} alt="Github" /></a>
      </p>
      {/* Add more contact information as needed */}
    </div>
  );
}

export default ContactInfo;
