import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartWithLogo from "./pages/startWithLogo";
import UploadImage from "./pages/uploadImage";
import SelectImageType from "./pages/selectImageType";
import SetPerson from "./pages/setPerson";
import CheckList from "./pages/checkList";
import Result from "./pages/result";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartWithLogo />} />
        <Route path="/uploadImage" element={<UploadImage />} />
        <Route path="/selectImageType" element={<SelectImageType />} />
        <Route path="/setPerson" element={<SetPerson />} />
        <Route exact path="/checkList" element={<CheckList />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
