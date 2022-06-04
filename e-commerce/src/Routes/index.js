import HomePage from "../Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ShopPage from "../Pages/Shop/ShopPage";
import Header from "../Components/header/Header";
import SignupAndSigninPage from "../Pages/Sign-upAndSign-in Page/Sign-up And Sign-in-Page";
import { auth } from "../firebase/firebase.utils";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/sign" element={<SignupAndSigninPage />} />
        </Routes>
      </div>
    );
  }
}
export default App;
