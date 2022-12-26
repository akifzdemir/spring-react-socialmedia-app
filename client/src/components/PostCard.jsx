import { Flex, Card, CardHeader, CardBody, CardFooter, Button, Avatar, Box, Heading, Text, Image } from '@chakra-ui/react'
import { BiLike, BiChat, BiShare } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import CommentModal from './CommentModal'

function PostCard({ userName,userImage, description, postImage,postId,userId }) {

    return (
        <Card maxW='lg'>
            <CardHeader as={Link} to={`/profile/${userId}`}>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={userName} src={userImage} />

                        <Box>
                            <Heading size='sm'>{userName}</Heading>

                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    {description}
                </Text>
            </CardBody>
            {
               <Image
                    maxW={'md'}
                    maxH={'sm'}
                    objectFit='contain'
                    src={postImage}
                    fallback={null}

                />
            }

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
               <CommentModal postId={postId}/>
                <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                    Share
                </Button>
            </CardFooter>
        </Card>
    )
}

export default PostCard