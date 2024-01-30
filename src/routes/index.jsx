import { BrowserRouter } from 'react-router-dom';

import {jwtDecode} from "jwt-decode";

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
    let token = localStorage.getItem('token');
    // let token = "dsahkjdhasjkdsa";  
    const isTokenVerified = isTokenValid(token);

    function isTokenValid(userToken) {
        try {
            jwtDecode(userToken)
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    if (isTokenVerified) {
        return (
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        );
    } else {
        return (
            <BrowserRouter>
                <AuthRoutes />
            </BrowserRouter>
        );
    };
};