import { Center, Flex, VStack,Card, CardHeader, CardBody, CardFooter ,Button,Avatar,Box,Heading,Text,IconButton,Image } from '@chakra-ui/react'
import React from 'react'
import Nav from '../components/Nav'

import PostCard from '../components/PostCard'


function Home() {
    return (
        <>
            <Nav />
            <Center>
                <VStack marginTop={'50px'} spacing={5}>
                   <PostCard/>
                   <PostCard/>
                   <PostCard/>
                </VStack>
            </Center>
        </>
    )
}

export default Home