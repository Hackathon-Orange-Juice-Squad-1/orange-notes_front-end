import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const useIsLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let token = localStorage.getItem('token');
    let storedToken = localStorage.getItem('google_login_token');
    // let token = "dsahkjdhasjkdsa";  
    // let storedToken = null;  

    useEffect(() => {
        const isTokenVerified = isTokenValid(token) || isGoogleTokenValid(storedToken);

        console.log(isGoogleTokenValid(storedToken), isTokenValid(token), isTokenVerified);

        if (isTokenVerified) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [token]);

    function isGoogleTokenValid(googleToken) {
        try {
            return googleToken === null ? false : true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    function isTokenValid(userToken) {
        try {
            const token = jwtDecode(userToken)
            console.log('token', token)
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return { isLoggedIn };
};