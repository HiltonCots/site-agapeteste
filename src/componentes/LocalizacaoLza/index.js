import React from 'react';

const LocationLinklza = () => {
  return (
    <div>
      <p style={{ 
        position: 'fixed',
        bottom: '515px',
        right: '1230px',
        textAlign: 'center',
        color: 'red',
        fontSize: '14px'
         }}
         >Estamos localizados em:</p>
      <a
        href="https://maps.app.goo.gl/3zggL7aQoaKwBSFE8"
        target="_blank"
        rel="noopener noreferrer"

        style={{ 
            position: 'fixed',
            bottom: '530px',
            right: '1150px',    
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

export default LocationLinklza;