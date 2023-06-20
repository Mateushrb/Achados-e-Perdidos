import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import './CookiesStyles.css'

const Cookie = () => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent");
    if (cookieConsent) {
      setConsentGiven(true);
    }
  }, []);

  const handleConsent = () => {
    Cookies.set("cookieConsent", "true");
    setConsentGiven(true);
  };

  const renderConsentMessage = () => {
    if (consentGiven) {
      return null;
    }
    return (
      <div className="cookie-consent">
        <p>
          Este site utiliza cookies para melhorar sua experiência. Ao continuar
          navegando, você concorda com o uso de cookies.
        </p>
        <button className="accept_cookies" onClick={handleConsent}>Aceitar</button>
      </div>
    );
  };

  return renderConsentMessage();
};

export default Cookie;
