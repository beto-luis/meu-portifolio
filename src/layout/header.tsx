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
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

export function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Box mt={'0'}
                h={20} w="100%" position={'fixed'} zIndex="1"
                bg={useColorModeValue('gray.50', 'gray.900',)}
                color={useColorModeValue('gray.700', 'gray.200')} px={4}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Flex w="100%" gap="3" p="5" direction="row" align="center" >
                        <Heading fontSize={25} >Roberto Carvalho /</Heading>
                        <Text fontSize={25} fontWeight={300}>Dev Frontend</Text>
                        <Spacer />
                        <Flex gap="5">
                            <Button as={'a'} _hover={{
                                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                            }} variant='ghost' href='/'>
                                Sobre mim
                            </Button>
                            <Button as={'a'} _hover={{
                                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                            }} variant='ghost' href='/projetos'>
                                Projetos
                            </Button>
                            <Button as={'a'} _hover={{
                                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                            }} variant='ghost' href='/skills'>
                                Skills
                            </Button>
                            {/* <Button onClick={() => router.push('./projetos/page')}>
                                Click here to read more
                            </Button> */}
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