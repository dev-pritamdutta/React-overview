import React, { useState } from "react";

const App = () => {
  const [mymoney, setMymoney] = useState(100);

  const handleMoney = () => {
    setMymoney(mymoney + 100);
    console.log("Money updated:", mymoney);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h3>my money: {mymoney}</h3>
      <button onClick={() => {handleMoney()}} className="p-3 bg-amber-200 my-16">
        Add money
      </button>
    </div>
  );
};

export default App;
