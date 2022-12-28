import axios from 'axios'

export default class LikeService{
    add(userId,postId,token){   
        const values = {userId,postId}
        return axios.post(process.env.REACT_APP_API+"likes/add",values,{
            headers:{
                'Authorization':"Bearer "+token
            }
        })
    }

    delete(userId,postId,token){
        const values = {userId,postId}
        return axios.post(process.env.REACT_APP_API+"likes/delete",values,{
            headers:{
                'Authorization':"Bearer "+token
            }
        })
    }

    isLiked(userId,postId,token){
        return axios.get(process.env.REACT_APP_API+`likes/isliked?userId=${userId}&postId=${postId}`,{
            headers:{
                'Authorization':"Bearer "+token
            }
        })
    }

    getLikesByPost(postId,token){
        return axios.get(process.env.REACT_APP_API+"likes/getallbypost/"+postId,{
            headers:{
                'Authorization':"Bearer "+token
            }
        })
    }


}