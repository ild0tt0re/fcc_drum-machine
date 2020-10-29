import { useEffect, useState } from 'react';
import MetalDrumPad from './components/MetalDrumPad';
import './styles/App.scss';

function App() {
  useEffect(() => { }, []);

  return (
    <div className="App vh-100">
      <MetalDrumPad />
    </div>
  );
}

export default App;
