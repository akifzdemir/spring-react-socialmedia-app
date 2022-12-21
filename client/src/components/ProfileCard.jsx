import React from 'react'
import { Card, CardHeader, Box, Flex, Avatar, Heading, Text, Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function ProfileCard({firstName,lastName,userImage}) {
    return (
        <Flex position={{ base: 'relative', xl: 'fixed' }} alignItems={{ base: 'center', xl: 'flex-end' }} justifyContent={{ base: 'center', xl: 'flex-end' }} width={"100%"} right={{ xl: 12 }} top={{ base:4,xl: 12 }}>
            <Card w={{base:'md',xl:'sm'}}>
                <CardHeader>
                    <HStack justifyContent={'center'} alignItems={'center'} spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar name={firstName +" "+lastName} src={userImage} />
                            <Box>
                                <Text>Logged in as :</Text>
                                <Heading size='sm'>{firstName +" "+lastName}</Heading>
                               
                            </Box>
                        </Flex>
                        <Button as={Link} to={"/profile"} colorScheme={'pink'}>Go Profile</Button>
                    </HStack>
                </CardHeader>
            </Card>
        </Flex>
    )
}

export default ProfileCard