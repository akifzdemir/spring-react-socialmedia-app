import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("isAuthenticated") || false
    );
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || {}
    );

    const login = (token) => {
        const decodedToken = jwtDecode(token);
        setUser(decodedToken.user);
        setIsAuthenticated(true);
        localStorage.setItem("token",token)
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("user", JSON.stringify(decodedToken.user));
        navigate("/home")
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser({});
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user");
        localStorage.removeItem("token")
        navigate("/")
    };

    useEffect(() => {
        const checkTokenExpired = () => {
            const token = localStorage.getItem("token");
            if (token) {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;
                if (decodedToken.exp < currentTime) {
                    logout();
                    console.log("token expired")
                }
            }
        };

        if (isAuthenticated) {
            checkTokenExpired();
        }
    }, [isAuthenticated]);

    const value = { isAuthenticated, login, logout, user };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
