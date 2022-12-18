import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AuthContext = createContext()

export const AuthProvider =({children})=>{

    const [auth,setAuth] = useState(false)
    const [user,setUser] = useState({email:""})
    const navigate = useNavigate()

    const login = (token)=>{
        if (token) {
            localStorage.setItem('token',token)
            setAuth(true)
            navigate("/home")
        }
    }

    const isLogged= async()=>{
        const token = localStorage.getItem("token")
        try {
            if (token) {
                const decode = await jwtDecode(token)
                setUser(
                {
                   email:decode.sub
                })
                 setAuth(true)
            }else{
                setAuth(false)
                setUser({email:""})
            }
        } catch (error) {          
            setAuth(false)
            localStorage.removeItem("token")
            setUser({email:""})
        }
    }

    const logout = () => {
        localStorage.removeItem("token")
        setAuth(false)
        navigate("/")
    }

    const checkTokenExprired = async () => {
        const token = localStorage.getItem("token")
        if (token) {
            let decode = await jwtDecode(token)
            let currentDate = new Date();
            if (decode.exp * 1000 < currentDate.getTime()) {
                localStorage.removeItem("token")
                console.log("Token Exprired")
                setAuth(false)
                navigate("/")
            }
        }
    }

    useEffect(()=>{
        isLogged()
        checkTokenExprired()
    },[auth])

    const values = {
        auth,
        setAuth,
        login,
        logout
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default AuthContext