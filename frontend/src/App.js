import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from "./Pages/Login/loginpage";
import LogoutPage from "./Pages/Logout/logoutpage";
import MainApp from "./Pages/Main/mainapp";
import RegisterPage from "./Pages/Register/registerpage";
import Navbar from "./Pages/Main/navbar";
import Footer from "./Pages/Main/footer";


const App = () => {
  return (
    <Router>
      <div>
      <section>
        <Navbar />
      </section>
      <section>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/app" element={<MainApp />} />
          <Route path="/logout" element={<LogoutPage/>}/>
        </Routes>
      </section>
      <section>
        <Footer />
      </section>
      </div>
    </Router>

  );
}

export default App;
