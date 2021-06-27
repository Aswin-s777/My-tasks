import React,{useState} from 'react'

function Formusestate() {
    const [name, setName] = useState({ firstName: "", lastName: "" });

  const changeHandler = (e) => {
    setName({
      ...name,
      firstName: e.target.value,
    });
  };

  return (
    <div>
      {/* <input text="text" onChange={(e)=>setName({firstName: e.target.value})}/> */}
      <input type="text" onChange={changeHandler} />
      <input
        type="text"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      <h1>firstName is - {name.firstName}</h1>
      <h1>lastName is - {name.lastName}</h1>
      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
}

export default Formusestate
