import React, { Component } from "react";
import "./SignIn.Style.scss";
import FormInput from "../Form-Inputs/FormInput";
import CustomButton from "../Custom-button/CustomBotton";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>SignIn with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label= 'email'
            required
            
          />
          
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label= 'password'
            required
          />
          <CustomButton type="submit">Sign In</CustomButton> 
        </form>
      </div>
    );
  }
}

export default SignIn;
