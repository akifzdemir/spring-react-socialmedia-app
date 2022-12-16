import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Tooltip,
} from '@chakra-ui/react';
import { BiHome } from 'react-icons/bi'

function Nav() {
  return (
  <Box top={3} zIndex={1} position={'fixed'} width={'100%'} px={5}>
        <Flex
          bg={'white'}
          color={useColorModeValue('gray.600', 'white')}
          minH={'70px'}
          borderRadius={"2xl"}
          alignItems={'center'}
          justifyContent={'space-evenly'}
          boxShadow={'2xl'}
        >
          <Tooltip label={'Home'} hasArrow fontSize={'xl'} borderRadius={'2xl'}>
            <Button
              p={7}
              borderRadius={'2xl'}
              colorScheme={'whiteAlpha'}
              color={'black'}
              _hover={{ bg: 'purple.500', color: 'white' }}
              _active={{ bg: 'purple.600', color: 'white' }}
            >
              <BiHome fontSize={42} />
            </Button>
          </Tooltip>
          <Button
            fontSize={'sm'}
            fontWeight={400}
          >
            Sign In
          </Button>
          <Button
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'purple.500'}
            _hover={{
              bg: 'purple.400',
            }}

            to={'/register'}
          >
            Sign Up
          </Button>
        </Flex>
      </Box>
  )
}

export default Nav