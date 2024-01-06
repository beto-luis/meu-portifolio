import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export function Header() {
    return (
        <Box w="100%" bgGradient="linear(to-t, white, blue.400)" >
            <Flex p="5" align="center" gap="3">
                <Heading fontSize={25}>Roberto de Carvalho /</Heading>
                <Text fontSize={25}>Dev Frontend</Text>
            </Flex>
            <Flex>
                
            </Flex>
        </Box>
    );
}