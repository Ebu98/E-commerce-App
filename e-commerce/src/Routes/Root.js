import { BrowserRouter } from "react-router-dom";
import App from ".";
import { Provider } from "react-redux";
import store from "../Components/redux/store";

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;
