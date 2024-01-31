import { BrowserRouter } from 'react-router-dom';

import { useIsLoggedIn } from '../hooks/useIsLoggedIn';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
    const { isLoggedIn } = useIsLoggedIn();

    if (isLoggedIn) {
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