import React, { useState, useEffect } from "react";

export default function Attributes({ attribute, count, onIncrement, onDecrement }) {
    const [modifier, setModifier] = useState(0);

    useEffect(() => {
        const calculatedModifier = Math.floor((count - 10) / 2);
        setModifier(calculatedModifier);
      }, [count]);

  return (
    <div>
      {attribute} {count}  (Modifier: {modifier})
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}