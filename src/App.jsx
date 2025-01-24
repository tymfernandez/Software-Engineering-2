import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Complaints from "./components/Complaints";
import Notifications from "./components/Notifications";
import Support from "./components/Support";
import BlotterForm from "./components/BlotterForm";
import Login from "./components/Login";
import SignUp from "./components/signup";
import Form7 from "./components/Form7";
import Form7Next from "./components/Form7Next";
import Form8 from "./components/Form8";
import Form9 from "./components/Form9";
import Form14 from "./components/Form14";
import Form15 from "./components/Form15";
import Form16 from "./components/Form16";
import Form17 from "./components/Form17";
import Form18 from "./components/Form18";
import Form19 from "./components/Form19";
import Form20 from "./components/Form20";
import Form21 from "./components/Form21";
import Form22 from "./components/Form22";
import Form23 from "./components/Form23";
import Form24 from "./components/Form24";
import Form25 from "./components/Form25";
import Form7View from "./components/Form7View";
import Form8View from "./components/Form8View";
import "./components/App.css";

const App = () => {
  const formData = {
    form7KpCaseNumber: "",
    form7MaySumbong: " ",
    form7Blg: "",
    form7UkolSa: "",
    reklamo: "",
    resolutionRequest: "",
    form7Day: "",
    form7Month: "",
    form7Year: "",
    form7ReceiveDay: "",
    form7ReceiveMonth: "",
    form7ReceiveYear: "",

    form8KpCaseNumber: "",
    form8Kay: "",
    form8Sumbong: "",
    form8Date: "",
    form8Day: "",
    form8Month: "",
    form8Year: "",
    form8DayUtos: "",
    form8MonthUtos: "",
    form8YearUtos: "",
    form8DayNow: "",
    form8MonthNow: "",
    form8YearNow: "",
    form8DayBiso: "",
    form8MonthBiso: "",
    form8YearBiso: "",
    form8Time: "",
  };

  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  // Determine if the current path is the login page
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/";

  return (
    <div className="app-container">
      {/* Render Sidebar only if not on the login page */}
      {!isLoginPage && (
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      )}

      {/* Main Content Area */}
      <div className={`main-content ${isCollapsed ? "collapsed" : ""}`}>
        <Routes>
          {/* Login Page (Default Route) */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/support" element={<Support />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blotter-form" element={<BlotterForm />} />
          <Route path="/form7" element={<Form7 />} />
          <Route path="/next" element={<Form7Next />} />
          <Route path="/form8" element={<Form8 />} />
          <Route path="/form9" element={<Form9 />} />
          <Route path="/form14" element={<Form14 />} />
          <Route path="/form15" element={<Form15 />} />
          <Route path="/form16" element={<Form16 />} />
          <Route path="/form17" element={<Form17 />} />
          <Route path="/form18" element={<Form18 />} />
          <Route path="/form19" element={<Form19 />} />
          <Route path="/form20" element={<Form20 />} />
          <Route path="/form21" element={<Form21 />} />
          <Route path="/form22" element={<Form22 />} />
          <Route path="/form23" element={<Form23 />} />
          <Route path="/form24" element={<Form24 />} />
          <Route path="/form25" element={<Form25 />} />
          <Route
            path="/form7/view"
            element={<Form7View formData={formData} />}
          />
          <Route
            path="/form8/view"
            element={<Form8View formData={formData} />}
          />
        </Routes>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
