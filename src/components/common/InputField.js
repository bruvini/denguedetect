import React from 'react';
import './InputField.css';

const InputField = ({ placeholder, type, name, value, onChange }) => {
  return (
    <div className="input-field">
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
