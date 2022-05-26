import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchProgress from "./components/SearchProgress";
import ChoiceRoute from "./pages/ChoiceRoute";
import HeaderAndFooter from "./pages/HeaderAndFooter";
import Main from "./pages/Main";

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<HeaderAndFooter/>}>
        <Route index element={<Main/>}/>
        <Route path='/route' element={<ChoiceRoute/>}/>
        {/* <Route path='/route' element={<SearchProgress/>}/> */}
      </Route>
    </Routes>
  );
}

export default App;
