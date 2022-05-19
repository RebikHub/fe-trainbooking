import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderAndFooter from "./pages/HeaderAndFooter";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HeaderAndFooter/>}>
        <Route index element={<Main/>}/>
      </Route>
    </Routes>
  );
}

export default App;
