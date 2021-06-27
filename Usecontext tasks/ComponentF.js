import React, { Component } from "react";
//import { productDetail, UserContext } from "../App";

class ComponentF extends Component {
  render() {
    return (
      <div>
        <h1>This is component F</h1>
        {/* <UserContext.Consumer>
          {(data) => {
            return (
              <productDetail.Consumer>
                {(info) => {
                  return (
                    <h1>
                      {data} {info}
                    </h1>
                  );
                }}
              </productDetail.Consumer>
            );
          }}
        </UserContext.Consumer> */}
      </div>
    );
  }
}

export default ComponentF;