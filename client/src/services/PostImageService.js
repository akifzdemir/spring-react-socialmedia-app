import axios from "axios";

export default class PostImageService {
    upload(values, token) {
        return axios.post(process.env.REACT_APP_API + "postimages/upload", values, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization':"Bearer "+token
            }
        })
    }
}