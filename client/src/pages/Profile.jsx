import { Center, Heading, VStack } from '@chakra-ui/react'
import { useEffect, useState, useContext, useMemo } from 'react'
import Nav from '../components/Nav'

import PostCard from '../components/PostCard'
import ProfileCard from '../components/ProfileCard'
import AuthContext from '../context/AuthContext'
import PostService from '../services/PostService'

function Profile() {

    const { user } = useContext(AuthContext)
    const postService = new PostService()
    const [posts, setPosts] = useState([])
    const imageUrl = process.env.REACT_APP_API + "postimages/download/"


    const getUserPosts = async () => {
        try {
            if (user.id !== undefined) {
                const result = await postService.getAllByUserId(user.id, localStorage.getItem("token"))
                console.log(result.data)
                setPosts(result.data)
            }
        } catch (error) {
            console.log(error.message)
        }
    }



    useMemo(() => {
        getUserPosts()
    }, [user])

    return (
        <>
            <Nav />
           
            <Center>
            
                <VStack marginTop={'50px'} spacing={5}>
                    {
                        posts.map(post => (
                            <PostCard
                                key={user.id}
                                description={post.description}
                                firstName={user.name}
                                lastName={user.lastName}
                                postImage={imageUrl + post.id}
                            // userImage={user.userImages[0]}

                            />
                        ))
                    }
                </VStack>
            </Center>

        </>
    )
}

export default Profile