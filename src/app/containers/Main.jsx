import Box from "@mui/material/Box";
import {
  Routes,
  Route
} from "react-router-dom";
import {HomePage} from "../pages/HomePage";

export const Main = () => {
  return(
    <Box component="main">
      <Routes>
        <Route exact index path="/" element={<HomePage/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </Box>
  );
}