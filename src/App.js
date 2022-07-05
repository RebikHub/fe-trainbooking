import React from "react";
import { Route, Routes } from "react-router-dom";
import ListCoaches from "./components/ListCoaches";
import ListRoutes from "./components/ListRoutes";
import SearchProgress from "./components/SearchProgress";
import ChoiceRoute from "./pages/ChoiceRoute";
import HeaderAndFooter from "./pages/HeaderAndFooter";
import Main from "./pages/Main";
import ListPassengers from "./components/ListPassengers";
import Payment from "./components/Payment";
import Order from "./components/Order";
import SuccessfulOrder from "./components/SuccessfulOrder";

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<HeaderAndFooter/>}>
        <Route index element={<Main/>}/>
        <Route path='/route' element={<ChoiceRoute/>}>
          <Route index element={<ListRoutes/>}/>
          <Route path='/route/coach' element={<ListCoaches/>}/>
          <Route path='/route/passengers' element={<ListPassengers/>}/>
          <Route path='/route/payment' element={<Payment/>}/>
          <Route path='/route/order' element={<Order/>}/>
        </Route>
        <Route path='/success' element={<SuccessfulOrder/>}/>
        {/* <Route path='/route' element={<SearchProgress/>}/> */}
      </Route>
    </Routes>
  );
}

export default App;
