import React from "react";
import { Button } from "../ui/button";

const RandomColorGenerator = () => {
  const [type, setType] = React.useState("Choose a type man...");
  const [val, setVal] = React.useState("#ffffff");

  const HEXGenerator = () => {
    console.log("HEX Color Created");
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    setVal(`#${hex}`);
  };

  const RGBGenerator = () => {
    console.log("RGB Color Created jdkjsdkjnjnd");
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setVal(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div className="bg-slate-600 h-screen flex flex-col">
      <div className="bg-black flex justify-center items-center">
        <Button onClick={type === "hex" ? HEXGenerator : RGBGenerator}>
          Generate Random Color
        </Button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md m-4 w-1/6"
          onClick={() => {
            setType("rgb");
          }}
        >
          Create RGB Color
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md m-4 w-1/6"
          onClick={() => {
            setType("hex");
          }}
        >
          Create HEX Color
        </button>
      </div>
      <div className="bg-green-600 flex-1 flex flex-col justify-center items-center">
        <div className="m-8 text-center flex flex-col ">
          <h1 className={`text-2xl text-${val}`}>Type: {type}</h1>
          <h1 className={`text-2xl text-${val}`}>Color: {val}</h1>
        </div>
        <div
          className={`w-1/2 h-1/2 rounded-full`}
          style={{ backgroundColor: val }}
        ></div>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
