import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import React from 'react'

const ButtonLayout = ({buttonText}: {buttonText:string}) => {
  return (
    <Button
          display={{ lg: "flex", base: "none" }}
          bg={"#0083FF;"}
          color={"white"}
          _hover={{ bg: "#0083FF" }}
          rightIcon={<ArrowForwardIcon />}
        >
          {buttonText}
        </Button>
  )
}

export default ButtonLayout