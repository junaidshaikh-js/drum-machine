import { useState } from "react";

import DrumPad from "./DrumPad";
import Controls from "./Controls";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

function DrumMachine() {
  const [power, setPower] = useState(true);
  const [currentBank, setCurrentBank] = useState(bankOne);
  const [currentBankId, setCurrentBankId] = useState("Heater Kit");
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(0.3);

  const clearDisplay = () => {
    setTimeout(() => {
      setDisplay("");
    }, 1000);
  };

  const handlePower = () => {
    setPower(!power);

    if (power) {
      setDisplay("Power is OFF");
    } else {
      setDisplay("Power is ON");
    }

    clearDisplay();
    // console.log(power);
  };

  const handleBank = () => {
    if (power) {
      // eslint-disable-next-line eqeqeq
      if (currentBankId == "Heater Kit") {
        setCurrentBank(bankTwo);
        setCurrentBankId("Smooth Piano Kit");
        setDisplay("Smooth Piano Kit");
      } else {
        setCurrentBank(bankOne);
        setCurrentBankId("Heater Kit");
        setDisplay("Heater Kit");
      }

      clearDisplay();
      // console.log(currentBankId);
    }
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
    console.log(volume * 100);
    setDisplay(`Volume: ${volume * 100}`);
  };

  const powerSlider = power ? { transform: "translateX(36px)" } : {};

  const bankSlider =
    // eslint-disable-next-line eqeqeq
    currentBankId == "Smooth Piano Kit"
      ? { transform: "translateX(36px)" }
      : {};

  return (
    <section id="drum-machine">
      <DrumPad bank={currentBank} />
      <Controls
        handlePower={handlePower}
        handleBank={handleBank}
        powerSlider={powerSlider}
        bankSlider={bankSlider}
        displayText={display}
        volume={volume}
        handleVolume={handleVolume}
      />
    </section>
  );
}

export default DrumMachine;
