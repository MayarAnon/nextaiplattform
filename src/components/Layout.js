import Navbar from "./Navbar";
import { store } from "../lib/store.js";
import { Provider } from "react-redux";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <Provider store={store}>
      <div className="content">
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </div>
    </Provider>
  );
}
