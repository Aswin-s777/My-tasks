import React,{useContext} from "react";
import ComponentF from "./ComponentF";
//import {UserContext,productDetail} from '../App'

function ComponentE() {

  const message=useContext(UserContext);
  const productInfo=useContext(productDetail);

  return (
    <div>
      <div>
        <h1>This is component E and {message} - Product Info is {productInfo}</h1>
        <ComponentF />
      </div>
    </div>
  );
}

export default ComponentE;