import React from 'react';

export const Icon = ({ name, className = '', style = {} }) => {
  const getIcon = () => {
    switch (name) {
      case 'whatsapp':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
            <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.128.552 4.195 1.6 6.031L.4 24l6.096-1.597c1.782.977 3.8 1.493 5.865 1.493 6.648 0 12.031-5.383 12.031-12.031S18.679 0 12.031 0zm0 21.966c-1.802 0-3.568-.485-5.116-1.403l-.367-.217-3.801.996.996-3.801-.217-.367c-.918-1.548-1.403-3.314-1.403-5.116 0-5.568 4.53-10.098 10.098-10.098 5.568 0 10.098 4.53 10.098 10.098 0 5.568-4.53 10.098-10.098 10.098zm5.534-7.553c-.303-.152-1.796-.886-2.074-.987-.278-.101-.48-.152-.682.152-.202.303-.784.987-.96 1.189-.177.202-.354.227-.657.076-1.921-.913-3.33-2.046-4.229-4.288-.126-.303.152-.278.43-.531.202-.202.354-.43.531-.682.177-.253.227-.43.354-.682.126-.253.076-.48-.025-.632-.101-.152-.682-1.643-.935-2.25-.253-.607-.506-.506-.682-.506h-.581c-.202 0-.531.076-.809.38-.278.303-1.062 1.037-1.062 2.53s1.087 2.934 1.238 3.136c.152.202 2.148 3.288 5.207 4.603 1.946.835 2.706.911 3.692.759.835-.126 2.074-.835 2.377-1.643.303-.809.303-1.492.202-1.643-.101-.152-.38-.253-.682-.405z"/>
          </svg>
        );
      case 'play':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        );
      case 'check-circle':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        );
      case 'question': // FAQ
        return (
          <svg viewBox="0 0 24 24" fill="#00509d" width="1em" height="1em">
            <circle cx="12" cy="12" r="10" />
            <path d="M11 16h2v2h-2v-2zm1-11C9.79 5 8 6.79 8 9h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" fill="#fff"/>
          </svg>
        );
      case 'bag': // Produits
        return (
          <svg viewBox="0 0 24 24" fill="#25D366" width="1em" height="1em">
            <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/>
          </svg>
        );
      case 'info': // Demande
        return (
          <svg viewBox="0 0 24 24" fill="#00509d" width="1em" height="1em">
            <circle cx="12" cy="12" r="10" />
            <path d="M11 7h2v2h-2zm0 4h2v6h-2z" fill="#fff"/>
          </svg>
        );
      case 'headset': // Support / SAV
        return (
          <svg viewBox="0 0 24 24" fill="#25D366" width="1em" height="1em">
            <path d="M12 1c-5 0-9 4-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-5-4-9-9-9z"/>
          </svg>
        );
      case 'warning': // Réclamations
        return (
          <svg viewBox="0 0 24 24" fill="#ff7f50" width="1em" height="1em">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
          </svg>
        );
      case 'lightbulb': // Boîte à idées
        return (
          <svg viewBox="0 0 24 24" fill="#ffb703" width="1em" height="1em">
            <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
          </svg>
        );
      case 'star': // Avis
        return (
          <svg viewBox="0 0 24 24" fill="#ffb703" width="1em" height="1em">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        );
      case 'gift': // Fidélité
        return (
          <svg viewBox="0 0 24 24" fill="#6a0dad" width="1em" height="1em">
            <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1h-4v-2h4zM9 4c.55 0 1 .45 1 1v2H6c0-.55.45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76 12 7.4l1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
          </svg>
        );
      case 'bullhorn': // Promotions
        return (
          <svg viewBox="0 0 24 24" fill="#6a0dad" width="1em" height="1em">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zM9 10h2v2H9zm4 0h2v2h-2zm-8 0h2v2H5z"/>
          </svg>
        );
      case 'bell': // Notifications
        return (
          <svg viewBox="0 0 24 24" fill="#25D366" width="1em" height="1em">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
          </svg>
        );
      case 'chat': // Échanger
        return (
          <svg viewBox="0 0 24 24" fill="#25D366" width="1em" height="1em">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
          </svg>
        );
      case 'smile': // Satisfaire
        return (
          <svg viewBox="0 0 24 24" fill="#25D366" width="1em" height="1em">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
          </svg>
        );
      case 'heart': // Fidéliser
        return (
          <svg viewBox="0 0 24 24" fill="#25D366" width="1em" height="1em">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        );
      case 'clock': // Gagnez du temps
        return (
          <svg viewBox="0 0 24 24" fill="#00509d" width="1em" height="1em">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
        );
      case 'sliders': // Outils
        return (
          <svg viewBox="0 0 24 24" fill="#ff7f50" width="1em" height="1em">
            <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
          </svg>
        );
      
      case 'shield': // Sécurité
        return (
          <svg viewBox="0 0 24 24" fill="#00509d" width="1em" height="1em">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
          </svg>
        );
      case 'list-check': // Améliorez
        return (
          <svg viewBox="0 0 24 24" fill="#25D366" width="1em" height="1em">
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <i className={`custom-icon ${className}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'normal', ...style }}>
      {getIcon()}
    </i>
  );
};
