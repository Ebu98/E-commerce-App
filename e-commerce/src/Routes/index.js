import HomePage from "../Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ShopPage from "../Pages/Shop/ShopPage";
import Header from "../Components/header/Header";
import SignupAndSigninPage from "../Pages/Sign-upAndSign-in Page/Sign-up And Sign-in-Page";

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/sign" element={< SignupAndSigninPage/>} /> 
    </Routes>
  </div>
);

export default App;
