import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from "./Pages/Login/loginpage";
import LogoutPage from "./Pages/Logout/logoutpage";
import MainApp from "./Pages/Main/mainapp";
import RegisterPage from "./Pages/Register/registerpage";




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
