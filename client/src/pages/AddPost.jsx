import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Button,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormLabel,
    Input,
    FormControl,
    useDisclosure,
    Textarea,
    useToast,
} from '@chakra-ui/react'
import PostService from '../services/PostService'
import PostImageService from '../services/PostImageService'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function AddPost() {

    const { user } = useContext(AuthContext)
    const [file, setFile] = useState(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const token = localStorage.getItem("token")
    const postService = new PostService()
    const postImageService = new PostImageService()
    const formData = new FormData();
    const navigate = useNavigate()

    const handleImageChance = (e) => {
        setFile(e.target.files[0])
    }


    const formik = useFormik({
        initialValues: {
            userId: 0,
            description: ""
        },
        onSubmit: async (values) => {
            try {
                values.userId = user.id
                const result = await postService.add(values, token)
                const postId = result.data
                if (file) {
                    formData.append("postId", postId)
                    formData.append("image", file)
                    await postImageService.upload(formData, token)
                }
                toast({
                    title: "Post Shared",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
                navigate(`/profile/${user.id}`)
            } catch (error) {
                toast({
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            }
        }
    })

    return (
        <>
            <Button onClick={onOpen} colorScheme={'pink'}>Share Post</Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent as={'form'} onSubmit={formik.handleSubmit}>
                    <ModalHeader>Share a post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Textarea
                                placeholder='Description'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='description'
                                value={formik.values.description}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Upload Image</FormLabel>
                            <Button colorScheme={'pink'} as={'label'}>
                                {file ? file.name : " Upload Image"}
                                <input hidden type={'file'}
                                    accept="image/*" onChange={handleImageChance} placeholder='Last name' />
                            </Button>

                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button type='submit' colorScheme='pink' onClick={onClose} mr={3}>
                            Share
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}

export default AddPost