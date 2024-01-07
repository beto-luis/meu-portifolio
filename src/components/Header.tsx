import React from "react";
import { Box, Button, Flex, Heading, Spacer, Text, WrapItem } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
    return (
        <Box w="100%" bgGradient="linear(to-t, white, blue.400)">
            <Flex direction="row" p="5" align="center" gap="2">
                <Heading fontSize={25}>Roberto de Carvalho /</Heading>
                <Text fontSize={25}>Dev Frontend</Text>
                <Spacer />
                <Flex gap="5" >
                    <Link href={""}>Sobre mim</Link>
                    <Link href={""}>Projetos</Link>
                    <Link href={""}>Contato</Link>
                </Flex>
            </Flex>
        </Box>
    );
}