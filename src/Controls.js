import Toggle from "./Toggle";

function Controls({ handlePower, handleBank, powerSlider, bankSlider }) {
  return (
    <div className="controls-wrapper">
      <Toggle name="Power" controlFunc={handlePower} slider={powerSlider} />
      <Toggle name="Bank" controlFunc={handleBank} slider={bankSlider} />
    </div>
  );
}

export default Controls;
