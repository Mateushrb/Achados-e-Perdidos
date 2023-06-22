import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButtonStyles.css";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.location.href = `https://wa.me/${48998117717}`;
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
    </button>
  );
};

export default WhatsAppButton;
