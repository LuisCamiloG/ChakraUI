import React from 'react';
import { Button } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Container>
      <Box position="absolute" boxSize="100%">
        <Image
          src="https://images.unsplash.com/photo-1547645829-c324cc1898b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHN1bnNldCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="img1"
          w="95%"
          h="40vh"
          m="40px"
          objectFit="cover"
        ></Image>
      </Box>
      <Box position="relative" m="auto">
        <Center h="260px" w="200vh">
          <Text color="white" fontSize="30px" mt="220px">
            DOMINA EL TERRENO
          </Text>
        </Center>
        <Center mb="50px" gap="15px">
          <Button
            color="white"
            colorScheme="gray"
            variant="outline"
            bg="transparent"
            border="1px solid #fff"
            ml="50%"
          >
            VER DETALLES
          </Button>
          <Button
            color="white"
            colorScheme="gray"
            variant="outline"
            bg="transparent"
            border="1px solid #fff"
          >
            VER VIDEO
          </Button>
        </Center>
      </Box>

      <Box mt="150px" position="relative" flexDirection="column">
        <Image
          src="https://images.unsplash.com/photo-1547645829-c324cc1898b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHN1bnNldCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="imgDos"
          w="35%"
          h="40vh"
          ml="40px"
          objectFit="cover"
        ></Image>
        <Box position="absolute" bottom="80px" ml="60px">
          <Center
            mb="50px"
            gap="15px"
            display="flex"
            flexDirection="column"
            ml="100px"
          >
            <Text color="white" fontSize="20px">
              DOMINA EL TERRENO
            </Text>
            <Button
              color="white"
              w="100%"
              colorScheme="gray"
              variant="outline"
              bg="transparent"
              border="1px solid #fff"
            >
              VER DETALLES
            </Button>
            <Button
              color="white"
              w="100%"
              colorScheme="gray"
              variant="outline"
              bg="transparent"
              border="1px solid #fff"
            >
              VER VIDEO
            </Button>
          </Center>
        </Box>
      </Box>
    </Container>
  );
};
export default Header;
