function Toggle({ name, controlFunc, slider }) {
  return (
    <div className="toggle-container">
      <h2>{name}</h2>
      <div className="slider-container" onClick={controlFunc}>
        <div className="slider" style={slider}></div>
      </div>
    </div>
  );
}

export default Toggle;
