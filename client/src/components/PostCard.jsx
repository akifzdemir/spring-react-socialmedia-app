import React from 'react'
import { Center, Flex, VStack, Card, CardHeader, CardBody, CardFooter, Button, Avatar, Box, Heading, Text, IconButton, Image } from '@chakra-ui/react'
import { BiLike, BiChat, BiShare } from 'react-icons/bi'

function PostCard({ firstName, lastName, userImage, description, postImage }) {

    return (
        <Card maxW='lg'>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={firstName + lastName} src={userImage} />

                        <Box>
                            <Heading size='sm'>{firstName + lastName}</Heading>

                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    {description}
                </Text>
            </CardBody>
            <Image
                objectFit='cover'
                src={postImage}
            />

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
                <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                    Like
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                    Comment
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                    Share
                </Button>
            </CardFooter>
        </Card>
    )
}

export default PostCard