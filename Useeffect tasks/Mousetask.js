import React, { useState } from "react";
import Mouseeffect from "./Mouseeffect";

function Mousetask() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toogle Display</button>
      {display && <Mouseeffect />}
    </div>
  );
}

export default Mousetask;