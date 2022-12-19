import { Center, VStack } from '@chakra-ui/react'
import { useEffect, useState, useContext } from 'react'
import Nav from '../components/Nav'

import PostCard from '../components/PostCard'
import AuthContext from '../context/AuthContext'
import PostService from '../services/PostService'

function Home() {

    const { user } = useContext(AuthContext)
    const postService = new PostService()
    const [posts, setPosts] = useState([])

    const getUserPosts = async () => {
        try {
            if (user.id!=undefined) {
                const result = await postService.getAllByUserId(user.id, localStorage.getItem("token"))
                console.log(result.data)
                setPosts(result.data)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
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
                            // postImage={post.postImages[0]}
                            // userImage={user.userImages[0]}

                            />
                        ))
                    }
                </VStack>
            </Center>
        </>
    )
}

export default Home