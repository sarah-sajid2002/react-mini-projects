import { useState, useEffect } from "react";

function Example1() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval says hello");
    }, 1000);
    return () => clearInterval(interval); //cleanup!
  });
  return (
    <>
      <div className="counter flex justify-center align-center w-[98vw] h-[50vh] bg-blue-400 flex-col mb-2">
        <h1 className="text-center"> Counter</h1>
        <p className="text-center text-[30px]">{counter}</p>
        <button
          onClick={() => setCounter(counter + 1)}
          className=" my-[10px] mx-[340px] bg-black text-white"
        >
          up
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className=" my-[10px] mx-[340px] bg-black text-white"
        >
          down
        </button>
      </div>
    </>
  );
}

export default Example1;
