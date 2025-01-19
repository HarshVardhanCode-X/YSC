import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { USER_DATA } from '../../constants/appConstants';
import { getLocalData } from '../../helpers';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const userData = getLocalData(USER_DATA);
        const isAuthenticated = userData?.token;

        if (!isAuthenticated) {
            navigate("/");
        } else if (isAuthenticated && (location.pathname === "/" || location.pathname === '/register')) {
            navigate('/dashboard');
        }
    }, [location.pathname]);

    return (
        <>
            {children}
        </>
    );
};

export default ProtectedRoute;
