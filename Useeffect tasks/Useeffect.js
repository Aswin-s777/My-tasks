import React,{ useState , useEffect } from 'react'

function Useeffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
  
    //UseEffect has a parameter which will executes every time when component is renrendered
    useEffect(() => {
      console.log("useEffect rendered");
      document.title = `You have clicked ${count} times`;
    },[count]);
  
    return (
      <div>
        <input type="text" onChange={(e) => setName({ name: e.target.value })} />
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      </div>
    );
  }

export default Useeffect
