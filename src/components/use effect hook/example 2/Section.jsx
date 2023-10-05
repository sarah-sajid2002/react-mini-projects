import { useEffect, useState } from "react";

function Section() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => clearInterval(id);
  });

  useEffect(() => {
    console.log("section has re-rendered");
  }, [timer]);
  return (
    <>
      <h1 className="text-center bg-slate-400 py-6 my-4">
        time on page : {timer}
      </h1>
    </>
  );
}

export default Section;
