import { Center, Heading, HStack, Image, VStack } from '@chakra-ui/react'
import { useCallback, useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Posts from '../components/Posts'
import ProfileCard from '../components/ProfileCard'
import AuthContext from '../context/AuthContext'
import PostService from '../services/PostService'
import svg from '../svgs/undraw_no_data_re_kwbl.svg'

function Home() {
    const { user } = useContext(AuthContext)
    const [posts, setPosts] = useState([])

    const getData = useCallback(async () => {
        const postService = new PostService()
        try {
            if (user.id !== undefined) {
                const result = await postService.getAllByUserFollowing(user.id, localStorage.getItem("token"))
                setPosts(result.data)
            }

        } catch (error) {
            console.log(error.message)
        }
    }, [user.id])

    useEffect(() => {
        getData()
    }, [getData])


    return (
        <>
            <Nav />
            <ProfileCard userName={user.fullName} />
            {
                posts.length === 0 ?
                    <Center>
                        <VStack h={'100vh'} alignItems={'center'} justifyContent={'center'}>
                            <Heading>No posts to show</Heading>
                            <Image src={svg} h={'50vh'} />
                        </VStack>

                    </Center>
                    :
                    <Posts posts={posts} />
            }

        </>
    )
}

export default Home