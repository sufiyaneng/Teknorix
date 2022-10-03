import React from "react";
import Form from "./sharedComponents/Form";
import Details from "./sharedComponents/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dummy from "./sharedComponents/Dummy";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          {/* <Route path="/details/:id" element={<Details />} /> */}
          <Route path="/details" element={<Details />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
