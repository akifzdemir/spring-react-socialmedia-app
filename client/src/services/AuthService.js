import axios from "axios";

export default class AuthService{

    register(values){
        return axios.post(process.env.REACT_APP_API+"auth/register",values)
    }


}