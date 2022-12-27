import { Button, Container, Flex, FormControl, FormLabel, Heading, Image, Input, Stack, Text, useBreakpointValue, useToast, VStack } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import AuthService from '../services/AuthService'
import svg from '../svgs/main.svg'

function Register() {

  const authService = new AuthService();
  const toast = useToast()
  const {login} = useContext(AuthContext)

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    onSubmit: async (values) => {
      try {
        const result = await authService.register(values)
        login(result.data)
        toast({
          title:"Register Succesfully",
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      } catch (error) {
        console.log(error.response.data)
        toast({
          title:error.response.data,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    }
  })


  return (
    <Stack direction={'row'} spacing={0} minH={'100vh'}>
      <Flex alignItems={'center'} justifyContent={'center'} width={{ base: 0, md: '100%', lg: '100%' }}>
        <VStack p={10} spacing={5}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '0', md: '5xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'pink.500',
                  zIndex: -1,
                }}>
                Spring-React
              </Text>
              <br />{' '}
              <Text color={'pink.500'} as={'span'}>
                Social Media App
              </Text>{' '}
            </Heading>
          </Stack>
          <Image src={svg} />
        </VStack>
      </Flex>
      <Flex justifyContent={'center'} alignItems={'center'} width={'100%'}>
        <Container>
          <VStack as={'form'} p={10} onSubmit={formik.handleSubmit} borderRadius={'xl'} boxShadow={'2xl'} spacing={5}>
            <Heading>Register</Heading>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                name='firstName'
                type='text'
              />

            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                name='lastName'
                type='text'
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name='email'
                type='email' />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                name='password'
                type='password' />
            </FormControl>
            <Button type='submit' colorScheme={'pink'}>Register</Button>
            <Button as={Link} to={"/login"}>Login</Button>
           
          </VStack>
        </Container>
      </Flex>
    </Stack>
  )
}

export default Register