import React, { useRef, useEffect } from 'react';
import './MetalDrumPad.scss';

export default function MetalDrumPad({
  character,
  audioClip,
  idClip,
  volume,
  handleDrumPadPress,
}) {
  const audioEl = useRef(null);
  const padEl = useRef(null);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (audioEl.current) audioEl.current.volume = volume / 100;
  }, [volume]);

  const setPadActive = (classes) => {
    padEl.current.classList.add('active');
  };

  const removePadActive = (classes) => {
    padEl.current.classList.remove('active');
  };

  const handlePadClick = (e) => {
    setPadActive();
    setTimeout(removePadActive, 90);
    handleDrumPadPress(idClip);
    audioEl.current.play();
  };

  function handleKeyPress(e) {
    if (e.code === `Key${character}`) {
      handlePadClick();
    }
  }

  return (
    <div id={idClip} className="drum-pad">
      <button ref={padEl} className="metal radial" onClick={handlePadClick}>
        {character}
      </button>
      <audio id={character} ref={audioEl} className="clip" src={audioClip} />
    </div>
  );
}
