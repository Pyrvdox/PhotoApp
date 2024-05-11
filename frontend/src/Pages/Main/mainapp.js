import React, { useState } from "react";
import client from "../../utils/api";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const MainApp = () => {

    const [currentUser, setCurrentUser] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        client.get("/api/user")
        .then(function(res) {
            if(res.data){
                setCurrentUser(res.data);
            }
        })
        .catch(function(error) {
          setCurrentUser(false);
        });
      }, []);

    const submitLogout = (e) => { 
        e.preventDefault();
        client.post(
            "api/logout/",
            {withCredentials: true}
        )
        navigate("/logout")
    }

    return(
        <>
            <h1>Hello {currentUser}</h1>
            
            <form onSubmit={submitLogout}>
            <button>Logout</button>
            </form>
        </>
    )
};

export default MainApp;