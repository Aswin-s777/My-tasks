import React, { useState } from "react";

function Randomnum() {
  const [rnum, setItem] = useState([]);

  const addItem = () => {
    setItem([
      ...rnum,
      {
        id: rnum.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add a item</button>
      <ul>
        {rnum.map((rnum) => (
          <li key={rnum.id}>{rnum.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Randomnum;