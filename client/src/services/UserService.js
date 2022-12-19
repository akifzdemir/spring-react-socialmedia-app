import axios from 'axios'

export default class UserService{

    getById(id,token){
        return axios.get(process.env.REACT_APP_API+"users/getbyid/"+id,{
            headers:{
                'Authorization':"Bearer "+token
            }
        });
    }
}