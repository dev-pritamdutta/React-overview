import React, { useState } from "react";

const App = () => {

const [text, setText] = useState("");


  return (
    <div className="p-16 h-screen bg-gray-100">
      <input onChange={(e) => {setText(e.target.value)}} type="text" value={text} className="border border-gray-300 rounded-md p-2" placeholder="type your text" />
      <h3 className="text-xl font-medium ">you typed: {text} </h3>
    </div>
  );
};

export default App;
