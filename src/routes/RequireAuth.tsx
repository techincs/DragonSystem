import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../redux/hooks/useAppSelector';

type Props = {
    children : JSX.Element
}

export const RequireAuth = ({ children }: Props) => {
    const user = useAppSelector(state => state.user);
    
    const isAuth = user.auth;

    if (!isAuth) {
        return <Navigate to="/" />
    }

    return children;
}