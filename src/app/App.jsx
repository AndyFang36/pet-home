import {Header} from "./containers/Header";
import {BrowserRouter} from "react-router-dom";
import '../assets/css/App.css';
import {Provider} from "react-redux";
import store from "./store";
import {Main} from "./containers/Main";
import {Footer} from "./containers/Footer";
import {CssBaseline} from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
import {ArrowUpward} from "@mui/icons-material";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline/>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
        <ScrollToTop
          smooth
          component={<ArrowUpward fontSize="large" sx={{color: "white"}}/>}
          style={{backgroundColor: "limegreen", width: "3rem", height: "3rem"}}
        />
      </BrowserRouter>
    </Provider>
  );
}

export default App;