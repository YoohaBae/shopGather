import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartWithLogo from "./pages/startWithLogo";
import UploadImage from "./pages/uploadImage";
import SetPerson from "./pages/setPerson";
import CheckList from "./pages/checkList";
import CheckListTwo from "./pages/checkListTwo";
import Result from "./pages/result";
import TakePhoto from "./pages/takePhoto";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartWithLogo />} />
        <Route path="/uploadImage" element={<UploadImage />} />
        <Route path="/setPerson" element={<SetPerson />} />
        <Route exact path="/checkList" element={<CheckList />} />
        <Route exact path="/checkListTwo" element={<CheckListTwo />} />
        <Route exact path="/takePhoto" element={<TakePhoto />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
