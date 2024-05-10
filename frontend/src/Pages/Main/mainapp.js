import React from "react";
import client from "../../utils/api";
import { useNavigate } from "react-router";

const MainApp = () => {

    const navigate = useNavigate();

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
            <h1>Hello</h1>
            <form onSubmit={submitLogout}>
            <button>Logout</button>
            </form>
        </>
    )
};

export default MainApp;