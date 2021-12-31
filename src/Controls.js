import Toggle from "./Toggle";

function Controls() {
  return (
    <div className="controls-wrapper">
      <Toggle name="Power" />
      <Toggle name="Bank" />
    </div>
  );
}

export default Controls;
