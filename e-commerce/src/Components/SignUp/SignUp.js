import React, { Component } from "react";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    };
  }
  handleChange = (e) => {
    const { value, name } = e.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "",name: "",confirmPassword: "" });
  };
  render() {
    return (
      <div className="sign-in">
        <h1>I don't have an account</h1>
        <span>SignUp with your credentials</span>

        <form onSubmit={this.handleSubmit}>
        <label>Display Name</label>
          <input
            type="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Comfirmpassword</label>
          <input
            type="comfirmpassword"
            name="comfirmpassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            required
          />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignUp;
