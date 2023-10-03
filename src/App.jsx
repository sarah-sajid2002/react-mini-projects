// import BgChanger from "./components/bg changer project/BgChanger";
import { useState } from "react";
import BgChanger from "./components/bg changer project/BgChanger";

function App() {
  return (
    <>
      <div className="flex justify-center align-center flex-wrap  rounded-xl fixed top-7 border-black border-2 mx-[40px]">
        <BgChanger color="orange" />
        <BgChanger color="Black" textColor="white" />
        <BgChanger color="Yellow" />
        <BgChanger color="Green" />
        <BgChanger color="White" />
        <BgChanger color="Olive" />
        <BgChanger color="Pink" />
        <BgChanger color="Red" />
        <BgChanger color="Blue" textColor="white" />
        <BgChanger color="FireBrick" textColor="white" />
      </div>
    </>
  );
}

export default App;
