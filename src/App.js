// app.js
import React from 'react';
import AboutMe from './AboutMe';
import MyPhoto from './MyPhoto';
import MyProjects from './MyProjects';
import ContactInfo from './ContactInfo';
import Header from './Header';
import Footer from './Footer';
import './css/background.css';

function App() {
  document.title = 'My React Portfolio';
  const sideBySideStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '100px',
  };
  const sideBySideStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '150px',
  };

  return (
    <div className="my-component">
    <Header />
      <div style={sideBySideStyle}>
        <MyPhoto />
        <AboutMe />
      </div>
      <div style={sideBySideStyles}>
        <MyProjects />
        <ContactInfo />
      </div>
      <Footer />
    </div>
  );
}

export default App;
