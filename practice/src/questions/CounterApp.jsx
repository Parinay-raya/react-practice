import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Counter App</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Tap me
      </button>
      <p className="mt-3 text-lg">You've tapped {count} times.</p>
    </div>
  );
}

export default CounterApp;
