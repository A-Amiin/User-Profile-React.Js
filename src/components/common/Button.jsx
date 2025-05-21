import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg transition-colors';
  const variants = {
    primary: 'bg-[#007bff] text-white hover:bg-[#0056b3]',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    link: 'text-[#007bff] bg-[#f8f9fa] hover:bg-[#007bff] hover:text-white'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 