import { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

export const useIsLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let token = localStorage.getItem('token');
    // let token = "dsahkjdhasjkdsa";  

    useEffect(() => {
        const isTokenVerified = isTokenValid(token)

        if (isTokenVerified) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [token]);

    function isTokenValid(userToken) {
        try {
            jwtDecode(userToken)
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    } 

    return { isLoggedIn };
};