import HomePage from "../Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ShopPage from "../Pages/Shop/ShopPage";
import Header from "../Components/header/Header";

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      {/* <Route path="/shop" element={< ShopPage/>} />  */}
    </Routes>
  </div>
);

export default App;
