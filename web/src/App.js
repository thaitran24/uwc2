import React from "react";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Blank from "./pages/Blank.js";
import DetailView from "./pages/DetailView";
import Overview from "./pages/Overview";
import SetVehicle from "./pages/SetVehicle";
import SetMCP from "./pages/SetMCP";
import SetSchedule from "./pages/SetSchedule";
import Communication from "./pages/Communication";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>
          <Route index element={<Blank />} />
          <Route path="/detailView" element={<DetailView />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/calendar" element={<Blank />} />
          <Route path="/user" element={<SetVehicle />} />
          <Route path="/setMCP" element={<SetMCP />} />
          <Route path="/order" element={<Blank />} />
          <Route path="/schedule" element={<SetSchedule />} />
          <Route path="/communication" element={<Communication />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Blank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
