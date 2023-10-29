// MyProjects.js
import React from 'react';
import './css/links.css';

function MyProjects() {
  return (
    <div>
      <h2>Download CV</h2>
      <ul>
        <li><a href="https://drive.google.com/drive/folders/1RIXsLftiMiTGFV9jhUaOhackGfMHqCpx?usp=sharing" className="email-link" target="_blank" rel="noopener noreferrer">Click Here to Download</a></li>
        {/* Add more projects as needed */}
      </ul>
    </div>
  );
}

export default MyProjects;
