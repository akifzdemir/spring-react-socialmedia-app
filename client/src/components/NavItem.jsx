import { Button, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'

function NavItem({description,icon}) {
  return (
    <Tooltip label={description} hasArrow direction='ltr' fontSize={'xl'} borderRadius={'2xl'}>
          <Button
            p={7}
            borderRadius={'2xl'}
            colorScheme={'whiteAlpha'}
            color={'black'}
            fontSize={'3xl'} 
            _hover={{backgroundColor:'pink.500',color:'white'}}
            rightIcon={icon}
          >
            <Text as={'b'} >{description}</Text>
          </Button>
        </Tooltip>
  )
}

export default NavItem