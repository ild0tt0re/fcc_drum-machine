import { useEffect, useState } from 'react';
import MetalDrumPad from './components/MetalDrumPad';
import MetalPowerButton from './components/MetalPowerButton';
import MetalSlider from './components/MetalSlider';
import ProgressBar from './components/ProgressBar';
import SegmentDisplay from './components/SegmentDisplay';
import './styles/App.scss';

const bankOne = getBankOne();
const bankTwo = getBankTwo();

function App() {
  const [clipName, setClipName] = useState('Welcome');
  const [volume, setVolume] = useState(92);
  const [selectedBank, setBank] = useState(bankOne);
  const [power, setPower] = useState(true);

  useEffect(() => {}, []);

  const handleDrumPadPress = (clipName) => {
    setClipName(clipName);
  };

  const handleVolumeChange = (volume) => {
    setVolume(volume);
  };

  const handlePower = (isOn) => {
    const togglePowerState = !isOn;
    setPower(togglePowerState);
    setClipName(togglePowerState ? 'POWER-ON' : 'POWER-OFF');
  };

  return (
    <div className="App vh-100">
      <main className="h-100 d-flex justify-content-center align-items-center">
        <div id="drum-machine" className="container drum-pads-container">
          <div className="row row-cols-2 justify-content-center align-items-center">
            <div className="drum-left order-last order-lg-first">
              <div className="row row-cols-3">
                {bankOne.map((currentPad) => (
                  <div key={currentPad.keyTrigger} className="col">
                    <MetalDrumPad
                      character={currentPad.keyTrigger}
                      audioClip={currentPad.url}
                      charCode={currentPad.keyCode}
                      idClip={currentPad.id}
                      volume={volume}
                      handleDrumPadPress={handleDrumPadPress}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="drum-right ml-4">
              <div className="row align-items-center justify-content-center mb-3">
                <div className="col-8">
                  <h3>DSEG7-Modern</h3>
                  <p style={{ fontFamily: 'DSEG7-Modern' }}>
                    <span style={{ fontWeight: 200 }}>123abc</span>
                    <span style={{ fontWeight: 'normal' }}>123abc</span>
                    <span style={{ fontWeight: 'bold' }}>123abc</span>
                    <br />
                  </p>
                </div>
                <div className="col-4 position-relative">
                  <MetalPowerButton isOn={power} handlePower={handlePower} />
                </div>
              </div>
              <div className="row align-items-center justify-content-center">
                <div className="col-10">
                  <SegmentDisplay clipName={clipName} volume={volume} />
                </div>
                <div className="col-2">
                  <ProgressBar volume={volume} />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <MetalSlider
                    volume={volume}
                    handleVolumeChange={handleVolumeChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

function getBankOne() {
  return [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ];
}

function getBankTwo() {
  return [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    },
  ];
}
