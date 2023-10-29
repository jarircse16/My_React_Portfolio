import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      Welcome to My Portfolio
    </header>
  );
}

const headerStyle = {
  background: 'blue',
  color: '#fff',
  textAlign: 'center',
  padding: '20px',
  fontSize: '30px', // Increase text size
fontFamily: 'Arial, sans-serif', // Set a custom font
};

export default Header;
