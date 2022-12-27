import React, { useCallback, useContext, useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    Input,
    InputRightElement,
    InputGroup,
    Card,
    CardBody,
    Heading,
    VStack,
} from '@chakra-ui/react'
import CommentService from '../services/CommentService'
import { useFormik } from 'formik'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

function CommentModal({ postId }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user } = useContext(AuthContext)

   
    const [comments, setComments] = useState([])
    const getData = useCallback( async () => {
        const commentService = new CommentService()
        try {
            const result = await commentService.getAllByPost(postId, localStorage.getItem("token"))
            setComments(result.data)
        } catch (error) {
            console.log(error)
        }
    },[postId,])


    useEffect(() => {
        getData()
    }, [getData])

    const formik = useFormik({
        initialValues: {
            description: "",
            postId: postId,
            userId: user.id
        },
        onSubmit: async (values) => {
            const commentService = new CommentService()
            try {
                await commentService.add(values, localStorage.getItem("token"))
                getData()
            } catch (error) {
                console.log(error)
            }
        }
    })


    return (
        <>
            <Button flex='1' variant='ghost' onClick={onOpen}>Comment {comments.length}</Button>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                scrollBehavior={'inside'}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent alignItems={'center'}>
                    <ModalHeader >
                        <Text>Comments</Text>
                        <InputGroup as={'form'} onSubmit={formik.handleSubmit} size='md'>
                            <Input
                                pr='4.5rem'
                                type={'text'}
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name={'description'}
                                placeholder={'Share a Comment'}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button type='submit' colorScheme={'pink'} h='1.75rem' size='sm' >
                                    Share
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody width={"100%"}>
                        <VStack spacing={2}>
                            {
                                comments.map(comment => (
                                    <Card as={Link} to={`/profile/${comment.userId}`} key={comment.id} width={"100%"} size={'sm'}>
                                        <CardBody>
                                            <Heading size={'md'}>{comment.userName + " " + comment.userLastName}</Heading>
                                            <Text>{comment.description}</Text>
                                        </CardBody>
                                    </Card>
                                ))
                            }
                        </VStack>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CommentModal