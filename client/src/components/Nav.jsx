import {
  Box,
  useColorModeValue,
  Stack,
  Button,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { BiHome } from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import AuthContext from '../context/AuthContext';
import AddPost from '../pages/AddPost';
import NavItem from './NavItem';

function Nav() {
  const {user} = useContext(AuthContext)
  return (
    <Box top={{lg:4}} zIndex={1} w={{ sm: "100%", lg: '30vh' }} position={{ sm:'sticky', lg: 'fixed' }} px={5}>
      <Stack
        bg={'white'}
        color={useColorModeValue('gray.600', 'white')}
        borderRadius={"2xl"}
        spacing={'10'}
        p={'15px'}
        pt={{lg:'10vh'}}
        h={{ sm: '20', lg: '95vh' }}
        direction={{ sm: 'row', lg: 'column' }}
        boxShadow={'2xl'}
      >
        <NavItem description={'Home'} icon={<BiHome/>} path={"/home"}/>
        <NavItem description={'Profile'} icon={<CgProfile/>} path={`/profile/${user.id}`}/>
        <AddPost/>

      
      </Stack>
    </Box>
  )
}

export default Nav