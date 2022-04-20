import { h, render } from "preact";
import { useState } from "preact/hooks";
import register from "preact-custom-element";

function Counter() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <div className="">Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </div>
  );
}
register(Counter, "counter-element");
