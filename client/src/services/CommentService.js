import axios from 'axios'

export default class CommentService{
    getAllByPost(postId,token){
        return axios.get(process.env.REACT_APP_API+"comments/getallbypost/"+postId,{
            headers:{
                'Authorization':"Bearer "+token
            }
        })
    }

    add(values,token){
        return axios.post(process.env.REACT_APP_API+"comments/add",values,{
            headers:{
                'Authorization':"Bearer "+token
            }
        })
    }
}