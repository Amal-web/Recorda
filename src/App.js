import {  Route, Routes } from "react-router-dom";

import JobseekerPage from "./Pages/JobSeeker Page/JobseekerPage"
import ApplicationStatusComponent from "./Pages/JobSeeker Page/components/ApplicationStatusComponent"
import UserSchduleComponent from "./Pages/JobSeeker Page/components/SideNavComponents/Schdeule/main"

import "./Pages/JobSeeker Page/JobSeeker.css"


import "./App.css";
import LandingHome from "./components/Landingpage/LandingHome";
import CollegeAdmin from "./components/CollegeAdmin/CollegeAdmin";
import UserSelect from "./components/UserSelection/UserSelect";
import Profile from "./components/Profile/Profile";




function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route path="/selectuser" element={<UserSelect/>}/>
        <Route path="/collegeadmin" element={<CollegeAdmin />} />
        <Route path="/user" element={<JobseekerPage />}>
          <Route index element={<ApplicationStatusComponent />} />
          <Route path="schedule" element={<UserSchduleComponent />} />
          <Route path="profile" element={<Profile/>}/>
        </Route>
        {/* <Route path="/schedule" element={<JobseekerPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
