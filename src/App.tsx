import React from "react";
import { Route, Routes } from "react-router-dom";
import ListCoaches from "./pages/ListCoaches";
import ListRoutes from "./pages/ListRoutes";
import ChoiceRoute from "./pages/ChoiceRoute";
import HeaderAndFooter from "./pages/HeaderAndFooter";
import Main from "./pages/Main";
import ListPassengers from "./pages/ListPassengers";
import Payment from "./pages/Payment";
import SuccessfulOrder from "./pages/SuccessfulOrder";
import Order from "./pages/Order";

export default function App() {
  
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
      </Route>
    </Routes>
  );
};
