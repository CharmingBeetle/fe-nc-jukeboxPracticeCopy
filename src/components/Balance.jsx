const Balance = ({cash, setCash, error, setError}) => {

  function handleAddCash() {
    if(error === "You ran out of cash!"){
      setError("")
    }
    setCash((currCash) => {
      return currCash + 1;
    });
  }
  return (
    <>
      <h2>Your Cash Balance: £{cash}</h2>
      <button
        onClick={handleAddCash}>Add Cash</button>
    </>
  );
};

export default Balance;
