import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';


function UserCard({ image, fullName, followers, following, isFollowing, isOwner }) {
    return (
        <>
            <Flex position={{ base: 'relative', xl: 'fixed' }} alignItems={{ base: 'center', xl: 'flex-end' }} justifyContent={{ base: 'center', xl: 'flex-end' }} width={"100%"} right={{ xl: 12 }} top={{ base: 4, xl: 12 }}>
                <Center>
                    <Box
                        maxW={'270px'}
                        w={'xl'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        overflow={'hidden'}>
                        <Image
                            h={'120px'}
                            w={'full'}
                            src={
                                'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                            }
                            objectFit={'cover'}
                        />
                        <Flex justify={'center'} mt={-12}>
                            <Avatar
                                size={'xl'}
                                src={image}
                                name = {fullName!==undefined && fullName}
                                alt={'Author'}
                                css={{
                                    border: '2px solid white',
                                }}
                            />
                        </Flex>

                        <Box p={6}>
                            <Stack spacing={0} align={'center'} mb={5}>
                                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                    {fullName !== undefined && fullName}
                                </Heading>
                            </Stack>

                            <Stack direction={'row'} justify={'center'} spacing={6}>
                                <Stack spacing={0} align={'center'}>
                                    <Text fontWeight={600}>{followers}</Text>
                                    <Text fontSize={'sm'} color={'gray.500'}>
                                        Followers
                                    </Text>
                                </Stack>
                                <Stack spacing={0} align={'center'}>
                                    <Text fontWeight={600}>{following}</Text>
                                    <Text fontSize={'sm'} color={'gray.500'}>
                                        Following
                                    </Text>
                                </Stack>
                            </Stack>
                            {
                                !isOwner &&
                                <Button
                                    w={'full'}
                                    mt={8}
                                    colorScheme = 'pink'
                                    color={'white'}
                                    rounded={'md'}
                                    >                        
                                    {isFollowing ? 'Followed' : 'Follow'}
                                </Button>
                            }

                        </Box>
                    </Box>
                </Center>

            </Flex>
        </>
    )
}

export default UserCard