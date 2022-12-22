import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import UserService from "../services/UserService";

const AuthContext = createContext()

export const AuthProvider =({children})=>{

    const [auth,setAuth] = useState(false)
    const [user,setUser] = useState({name:"",lastName:"",email:""})
    const navigate = useNavigate()
    const userService = new UserService()

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
                const user = await userService.getById(decode.userId,token)
                 setUser(user.data)
                 setAuth(true)
            }else{
                setAuth(false)
                setUser({})
            }
        } catch (error) {          
            setAuth(false)
            setUser({})
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
        logout,
        user
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default AuthContext