import React from 'react';
import './MetalPowerButton.scss';

export default function MetalPowerButton({ isOn, handlePower }) {
  const handlePowerClick = (e) => {
    handlePower(isOn);
  };

  return (
    <div className="power-container position-absolute">
      <div
        className={`button ${isOn ? 'active' : ''}`}
        onClick={handlePowerClick}
      >
        ⏻
      </div>
    </div>
  );
}
