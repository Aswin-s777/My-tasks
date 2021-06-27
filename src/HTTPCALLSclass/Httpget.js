import React, { Component } from "react";
import axios from "axios";

class Httpget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookinfo: [],
      aswin:""
    };
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.state.aswin}`)

      .then((response) => {
        console.log("response : ", response);

        this.setState({
          bookinfo: response.data,
        });
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  }

  componentDidUpdate(){
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.state.aswin}`)

      .then((response) => {
        console.log("response : ", response);

        this.setState({
          bookinfo: response.data,
        });
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  }

  render() {
    const ta = {
      border: "1px Solid black",
      width: "100%",
    };
    const td = {
      padding: "10px",
    };

    const { bookinfo } = this.state;

    console.log("current state", this.state);
    return (
      <div>
        {this.state.bookinfo.title}
        <table cellPadding="5" cellSpacing="5">
          <input type="text" onChange={(e)=>{this.setState({aswin:e.target.value})}}></input>
          {this.state.aswin}
          <div>
            {bookinfo.length
              ? bookinfo.map((inf) => (
                  <table style={ta}>
                    
                    <div key={inf.id}>
                      <tr>
                        <tr>{inf.userId} </tr>
                        <tr>{inf.title}</tr>
                        <tr>{inf.id} </tr>
                      </tr>
                    </div>
                  </table>
                ))
              : null}
          </div>
        </table>
      </div>
    );
  }
}

export default Httpget;
