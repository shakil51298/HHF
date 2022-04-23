import React, { useContext } from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { UserContext } from '../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const userMail = loggedInUser.email;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                true ? (
                    children
                ) : (
                    <Navigate
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;