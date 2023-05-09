import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import React from 'react'

const ButtonLayout = ({buttonText, isTransparent = false}: {buttonText:string ; isTransparent?: boolean}) => {
  return (
    <Button
          bg={isTransparent ? "transparent" : '#0083FF;'}
          color={isTransparent ? "#2D3958" :"white"}
          border={'1px solid #2D3958' }
          borderColor={isTransparent ? '#2D3958' : 'transparent'}
          _hover={{ bg: "#0083FF" }}
          rightIcon={<ArrowForwardIcon />}
        >
          {buttonText}
        </Button>
  )
}

export default ButtonLayout