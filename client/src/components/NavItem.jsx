import { Button, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'

function NavItem({description,icon}) {
  return (
    <Tooltip label={description} hasArrow fontSize={'xl'} borderRadius={'2xl'}>
          <Button
            p={7}
            borderRadius={'2xl'}
            colorScheme={'pink'}
            fontSize={'3xl'} 
            rightIcon={icon}
          >
            <Text as={'b'} >{description}</Text>
          </Button>
        </Tooltip>
  )
}

export default NavItem