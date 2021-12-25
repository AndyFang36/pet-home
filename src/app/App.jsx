import {Header} from "./containers/Header";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import '../assets/css/App.css';
import {Provider} from "react-redux";
import store from "./store";
import {Main} from "./containers/Main";
import {Footer} from "./containers/Footer";
import {CssBaseline} from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline/>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
