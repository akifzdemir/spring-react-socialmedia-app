import { Center, VStack } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import PostCard from '../components/PostCard'
import ProfileCard from '../components/ProfileCard'
import AuthContext from '../context/AuthContext'
import PostService from '../services/PostService'

function Home() {
    const { user } = useContext(AuthContext)
    const postService = new PostService()
    const [posts, setPosts] = useState([])
    const imageUrl = process.env.REACT_APP_API + "postimages/download/"

    const getData = async () => {
        try {
            if (user.id !== undefined) {
                const result = await postService.getAllByUserFollowing(user.id, localStorage.getItem("token"))
                setPosts(result.data)
                console.log(posts)
            }

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getData()
    }, [user])


    return (
        <>
            <Nav />
            <ProfileCard userName={user.fullName} />
            <Center>

                <VStack marginTop={'50px'} spacing={5}>
                    {
                        posts.map(post => (
                            <PostCard
                                key={post.id}
                                description={post.description}
                                userName={post.userName +" "+post.userLastName}
                                postImage={imageUrl + post.id}
                                postId={post.id}
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