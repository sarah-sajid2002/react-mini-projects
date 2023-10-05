import { useEffect, useState } from "react";
import Section from "./Section.jsx";

function Home() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("home has re-rendered");
  }, [counter]);

  useEffect(() => {
    console.log("something has re-rendered");
  });
  return (
    <>
      <div className="flex flex-col w-full bg-slate-500 py-6 my-4">
        <h1 className="text-center w-[100vw] ">visits : {counter} </h1>
        <button
          className="mx-[480px] border-2px border-black hover:bg-black hover:text-white bg-blue-200 text-center"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div>
      <Section />
    </>
  );
}

export default Home;
