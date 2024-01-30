import { BrowserRouter } from 'react-router-dom';

import {jwtDecode} from "jwt-decode";

import { AppRoutes as AppRoutesComponent } from './app.routes';
import { AuthRoutes as AuthRoutesComponent } from './auth.routes';

export function AppRoutes() {
    // let token = localStorage.getItem('token');
    let token = "dsahkjdhasjkdsa";  
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
                <AppRoutesComponent />
            </BrowserRouter>
        );
    } else {
        return (
            <BrowserRouter>
                <AuthRoutesComponent />
            </BrowserRouter>
        );
    };
};