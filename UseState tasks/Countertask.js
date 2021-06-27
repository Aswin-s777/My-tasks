import React,{useState} from 'react'

function Countertask() {
    const[count,Setcount]=useState(0);
    
    //we are using arrow function inside loop to store a value
    //we are using setcount to update the count in the function whenever the count value chagnes
    const incrementFive = () => {
        for (let i = 0; i < 7; i++) {
            
         Setcount((count) => count + 3);
          
        console.log(count);
        }
    
        
      };
    
    const elaya={
        background: "url(" + "https://i.pinimg.com/originals/36/db/77/36db77ba1af872f131214f0ac9dcff7f.jpg" + ")",
    }

    return (
        <body style={elaya}>
        <div >
            <h1>count={count}</h1>
            <ul>
            <li><button onClick={() => Setcount(count + 1)}>INCREMENT</button></li>
            <li><button onClick={() => Setcount(count - 1)}>DECREMENT</button></li>
            <li><button onClick={() => Setcount(0)}>RESET</button></li>
            <li><button onClick={incrementFive}>INCREMENTFIFTEEN</button></li>
            <li>  <input type="text" /></li>
            </ul>
            
        </div>
        </body>
    )
}

export default Countertask
