import React from 'react';

const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  className = '',
  label,
  id
}) => {
  const baseStyles = 'w-full p-3 border-2 border-[#007bff] rounded-lg outline-none focus:border-[#0056b3] transition-colors';
  
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseStyles} min-h-[100px] resize-y ${className}`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseStyles} ${className}`}
        />
      )}
    </div>
  );
};

export default Input; 