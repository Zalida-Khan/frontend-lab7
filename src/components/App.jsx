import React from "react";
import { Routes, Route } from "react-router-dom";
import Countries from "./Countries";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter basename="/frontend-lab7/">
    <Routes>
      <Route path="/" element={<Countries />}>
        <Route path="countries/:cca2" element={<Details />} />
      </Route>
      <Route path="/countries" element={<Countries />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
