// Libraries
import { useState, useEffect } from "react";

const Home = () => {
  const [ state, setState ] = useState(1);
  const [ isOdd, setIsOdd ] = useState(false);

  useEffect(() => {
    if(state % 2) {
      setIsOdd(true)
    } else {
      setIsOdd(false)
    };
  }, [state])

  function handleClick() {
    setState(() => {
      return state + 1;
    });
  };

  return(
    <main>
      <h1>Home</h1>
      <h3>Current state = {state}</h3>
      <button onClick={() => handleClick()}>Increment State</button>

      {
        isOdd
        ? <h4>State is Odd</h4>
        : <h4>State is Even</h4>
      }
    </main>
  );
};


export default Home;