import { useState, useEffect } from "react";

function Practice() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("re-rendered");
  }); ///run when anything re renders
  useEffect(() => {
    console.log("mounted");
  }, []); ///run when mounted for first time
  useEffect(() => {
    console.log("text re-rendered");
  }, [text]); ///run when text changes
  useEffect(() => {
    console.log("counter re-rendered");
  }, [counter]); ///run when counter changes
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
      <div className="textArea counter flex justify-center align-center w-[98vw] h-[50vh] bg-blue-300 flex-col">
        <h1 className="text-center">input field</h1>
        <input
          className="my-[10px] mx-[340px] h-[40px] rounded-lg shadow-black shadow-lg p-3"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="enter text"
        />
      </div>
    </>
  );
}

export default Practice;
