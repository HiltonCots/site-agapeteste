import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButtonvgo = () => {
  const phoneNumber = '556136271802'; // Substitua pelo seu número de telefone no formato internacional
  const message = 'Olá, compra de passagens e informações. '; // Mensagem pré-definida

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '550px',
        right: '500px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 20px',
        color: 'white',
        backgroundColor: '#25D366',
        borderRadius: '15px',
        textDecoration: 'none',
        fontSize: '16px',
  
      }}
    >
      <FaWhatsapp size={24} style={{ marginRight: '8px' }} />
      WhatsApp Ágape Passagens - Valparaíso de Goiás/GO
    </a>
  );
};

export default WhatsappButtonvgo
