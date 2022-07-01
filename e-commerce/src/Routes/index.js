import HomePage from "../Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ShopPage from "../Pages/Shop/ShopPage";
import Header from "../Components/header/Header";
import SignupAndSigninPage from "../Pages/Sign-upAndSign-in Page/Sign-up And Sign-in-Page";
import { auth, createUserProfileDocument} from "../firebase/firebase.utils";
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignupAndSigninPage />} />
        </Routes>
      </div>
    );
  }
}
export default App;
