import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios';
import LoginPage from "./Pages/Login/loginpage";
import LogoutPage from "./Pages/Logout/logoutpage";
import MainApp from "./Pages/Main/mainapp";
import RegisterPage from "./Pages/Register/registerpage";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:5432"
});


const App = () => {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/app" element={<MainApp />} />
          <Route path="/logout" element={<LogoutPage/>}/>
        </Routes>

      </div>
    </Router>

  );
}

export default App;
