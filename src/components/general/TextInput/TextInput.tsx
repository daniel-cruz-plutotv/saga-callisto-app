// libraries
import React from 'react';

const TextInput: React.FC = () => {
  return (
    <div className="o-input">
      <input type="text" className="o-input__text" placeholder=" " />
      <label className="o-input__label">Pokemon name: </label>
      <span className="o-input__bar"></span>
    </div>
  );
};

export default TextInput;