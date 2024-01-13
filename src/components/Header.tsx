import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Heading,
    Spacer,
    Text,
    chakra,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>  
            <Box h={20} w="100%" position={'fixed'} zIndex="1"
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')} px={4}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Flex w="100%" gap="3" p="5" direction="row" align="center" >
                        <Heading fontSize={25} >Roberto Carvalho /</Heading>
                        <Text fontSize={25} fontWeight={300}>Dev Frontend</Text>
                        <Spacer />
                        <Flex gap="5">
                            <Button _hover={{
                                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                            }} variant='ghost'>
                                Sobre mim
                            </Button>
                            <Button _hover={{
                                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                            }} variant='ghost'>
                                Projetos
                            </Button>
                            <Button _hover={{
                                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                            }} variant='ghost'>
                                Contato
                            </Button>
                        </Flex>
                    </Flex>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button _hover={{
                                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                            }} onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}