import React, { Component } from "react";
import axios from "axios";

class Httppost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log("state objects :: ", this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => console.log("response :: ", response))
      .catch((error) => console.log(error));
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type="text" name="userId" onChange={this.changeHandler} />
          </div>
          <div>
            <input type="text" name="title" onChange={this.changeHandler} />
          </div>
          <div>
            <input type="text" name="body" onChange={this.changeHandler} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Httppost;