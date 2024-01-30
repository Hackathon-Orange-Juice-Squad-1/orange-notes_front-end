import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoutes as AppRoutesComponent } from './app.routes';
import { AuthRoutes as AuthRoutesComponent } from './auth.routes';
import { Register } from '../pages/Register';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthRoutesComponent />} />
                <Route path="/app" element={<AppRoutesComponent />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};