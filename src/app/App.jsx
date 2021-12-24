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

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
