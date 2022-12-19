import axios from 'axios'

export default class UserImageService{
    download(userId,token){
        return axios.get(process.env.REACT_APP_API+"userimages/download/"+userId,{
            headers:{
                'Authorization':"Bearer "+token
            }
        })
    }
}