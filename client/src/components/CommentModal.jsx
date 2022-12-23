import React, { useContext, useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
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
    CardHeader,
    Heading,
    HStack,
    VStack,
} from '@chakra-ui/react'
import CommentService from '../services/CommentService'
import { useFormik } from 'formik'
import AuthContext from '../context/AuthContext'

function CommentModal({ postId }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user } = useContext(AuthContext)

    const commentService = new CommentService()
    const [comments, setComments] = useState([])
    const getData = async () => {
        try {
            const result = await commentService.getAllByPost(postId, localStorage.getItem("token"))
            setComments(result.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getData()
    }, [postId])

    const formik = useFormik({
        initialValues: {
            description: "",
            postId: postId,
            userId: user.id
        },
        onSubmit: async (values) => {
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
                                    <Card width={"100%"} size={'sm'}>
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