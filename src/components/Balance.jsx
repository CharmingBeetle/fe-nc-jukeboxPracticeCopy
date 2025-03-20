const Balance = (props) => {
  return (
    <>
      <h2>Your Cash Balance: £{props.cash}</h2>
      <button
        onClick={() => {
          props.setCash((currCash) => {
            return currCash + 1;
          });
        }}
      >
        Add Cash
      </button>
    </>
  );
};

export default Balance;
