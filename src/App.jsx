import { useEffect, useState } from 'react';
import MetalDrumPad from './components/MetalDrumPad';
import MetalPowerButton from './components/MetalPowerButton';
import MetalSlider from './components/MetalSlider';
import ProgressBar from './components/ProgressBar';
import SegmentDisplay from './components/SegmentDisplay';
import './styles/App.scss';

function App() {
  useEffect(() => { }, []);

  return (
    <div className="App vh-100">
      <SegmentDisplay />
      <MetalDrumPad />
      <MetalPowerButton />
      <MetalSlider />
      <ProgressBar />
    </div>
  );
}

export default App;
