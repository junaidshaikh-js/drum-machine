function DrumPad({ bank }) {
  return (
    <div className="drum-pad-wrapper">
      {bank.map((item) => {
        return (
          <button className="drum-pad" key={item.id}>
            <p>{item.keyTrigger}</p>
            {/* <audio src="item.url"></audio> */}
          </button>
        );
      })}
    </div>
  );
}

export default DrumPad;
