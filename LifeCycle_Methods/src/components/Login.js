import React, { Component } from "react";
import "./Login.css";

export class Login extends Component {
    constructor(props) {
    console.log("Constructor calling...");
    super(props);
    this.state = { userName: "" };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({ userName: e.target.value });
    console.log("onChange calling...", this.state.userName);
  }

  onClick() {
    console.log("onClick calling...");
    var user = document.getElementById("userName");
    var pass = document.getElementById("passWord");
    if (user.value === "" || pass.value === "") {
      alert("Please enter User name or Password");
    }
  }

  render() {
    console.log("Render calling...");
    return (
      <div className="main-div">
        <div>
          <label>User name</label>
          <input
            type="text"
            id="userName"
            value={this.state.userName}
            onChange={this.onChange}
            placeholder="User Name">
          </input>
          <br />
          <label>password</label>
          <input type="password" id="passWord" placeholder="Password"></input>
          <br />
          <button onClick={this.onClick}>Login</button>
        </div>
        <div>
          <label>Hello {this.state.userName}</label>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount calling...");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate calling...");
  }

  componentDidCatch() {
    console.log("componentDidCatch calling...");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount calling...");
  }
}

export default Login;
