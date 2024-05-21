import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#f0f0f0', 
      padding: '20px', 
      textAlign: 'center', 
      position: 'fixed', 
      left: 0, 
      bottom: 0, 
      width: '100%' 
    }}>
      <p>Todos os direitos reservados Ágape Passagens e Turismo &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;