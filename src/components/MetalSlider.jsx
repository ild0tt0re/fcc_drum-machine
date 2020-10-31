import React from 'react';
import './MetalSlider.scss';

export default function MetalSlider({
  volume,
  handleVolumeChange,
  powerState,
}) {
  const handleProgressChange = (e) => {
    const newVolume = e.currentTarget.value;
    handleVolumeChange(newVolume);
  };

  return (
    <input
      className={powerState ? 'active' : ''}
      type="range"
      value={volume}
      onChange={handleProgressChange}
      disabled={!powerState}
    />
  );
}
