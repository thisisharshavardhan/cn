import React from "react";

export default function App() {
  // counter state
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}