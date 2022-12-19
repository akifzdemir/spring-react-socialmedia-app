import axios from 'axios'

export default class LikeService{
    add(values,token){
        return axios.post(process.env.REACT_APP_API+"likes/add",values,{
            headers:{
                'Authorization':"Bearer "+token
            }
        })
    }


    delete(id,token){
        return axios.delete(process.env.REACT_APP_API+"likes/delete?id="+id,{
            headers:{
                'Authorization':"Bearer "+token
            }
        })
    }


}