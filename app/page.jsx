import React from "react";

// import TsPractice from "./components/tsPractice/TsPractice";
// import JsPractice from './components/jsPractice/JsPractice'
// import BuiltInFunctionsInJs from './components/builtInFunctionsInJs/BuiltInFunctionsInJs'

export default function Home() {



  
  return (
    <div >
      {/* <TsPractice/>
      <JsPractice/> */}
      {/* <BuiltInFunctionsInJs/> */}
      
      <div className="grid lg:grid-cols-6  md:grid-cols-4 gap-5  ">
        <div className="bg-red-400 text-center text-5xl    md:row-span-4 p-5 h-[800px]">item 1</div>

        <div className="lg:col-span-4 md:col-span-2 grid  grid-cols-2 md:grid-cols-2 gap-4  ">
          <div className="bg-green-400 text-center text-5xl ">item 2</div>
        <div className="bg-blue-400 text-center text-5xl ">item 3 </div>
        <div className="bg-black text-center text-5xl  ">item 4</div>
        <div className="bg-pink-400 text-center text-5xl ">item 5</div>
        <div className="bg-yellow-400 text-center text-5xl ">item 6</div>
        <div className="bg-gray-600 text-center text-5xl  ">item 7</div>
        </div>
        
        <div className=" bg-yellow-600 text-center text-5xl lg:row-span-4 ">item 8</div>
      </div>
   

    </div>
  );
}
