import React from 'react';

const LocationLinkvgo = () => {
    return (
      <div>
        <p style={{ 
          position: 'fixed',
          bottom: '515px',
          right: '730px',
          textAlign: 'center',
          color: 'red',
          fontSize: '14px'
           }}
           >Estamos localizados em:</p>
        <a
          href="https://maps.app.goo.gl/LhxJvSQVS4s19M87A"
          target="_blank"
          rel="noopener noreferrer"
  
          style={{ 
              position: 'fixed',
              bottom: '530px',
              right: '650px',    
              display: 'inline-block',
              textAlign: 'center',
              color: 'blue', 
              fontSize: '14px' 
      }}
        >
          Ver no Mapa
        </a>
      </div>
    );
  };
  

export default LocationLinkvgo;