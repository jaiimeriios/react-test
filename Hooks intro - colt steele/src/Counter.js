import React, { useState } from "react";

const Counter = ({ step = 1 }) => {

  const [count, setCount] = useState(0);
 
  return (
    <div>
      <h3 className='counter'>{count}</h3>
      <button className='counter' onClick={() => setCount(count - step)}>
        - {step}
      </button>
      <button className="counter" onClick={() => setCount(count + step)}>
        + {step}
      </button>
    </div>
  );
};

export default Counter;
