import { useEffect, useState } from 'react';
import MetalDrumPad from './components/MetalDrumPad';
import MetalPowerButton from './components/MetalPowerButton';
import './styles/App.scss';

function App() {
  useEffect(() => { }, []);

  return (
    <div className="App vh-100">
      <MetalDrumPad />
      <MetalPowerButton />
    </div>
  );
}

export default App;
