import Toggle from "./Toggle";

function Controls({
  handlePower,
  handleBank,
  powerSlider,
  bankSlider,
  displayText,
  volume,
  handleVolume,
}) {
  console.log(volume);
  return (
    <div className="controls-wrapper">
      <Toggle name="Power" controlFunc={handlePower} slider={powerSlider} />
      <p id="display">{displayText}</p>
      <input
        type="range"
        min={0}
        max={1}
        value={volume}
        step={0.1}
        onChange={handleVolume}
      />
      <Toggle name="Bank" controlFunc={handleBank} slider={bankSlider} />
    </div>
  );
}

export default Controls;
