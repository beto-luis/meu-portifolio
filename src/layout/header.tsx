import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Heading,
    Spacer,
    Text,
} from '@chakra-ui/react'
import { HamburgerIcon, } from '@chakra-ui/icons'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const bgcolor = useColorModeValue('gray.50', 'gray.900');
    const color = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');
    return (
        <>
            <Box h={20} w={{ base: '100%', }}
                position={'fixed'}
                zIndex="1"
                bg={useColorModeValue('gray.50', 'gray.900',)}
                color={useColorModeValue('gray.700', 'gray.200')}
                px={4}>
                <Flex maxW={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                    <Flex w="100%" gap="3" p="5" direction="row" align="center" >
                        <Heading fontSize={{ base: "16px", md: "20px", lg: "25px" }} >Roberto Carvalho /</Heading>
                        <Text fontSize={{ base: "16px", md: "20px", lg: "25px" }} fontWeight={300}>Dev Frontend</Text>
                        <Spacer />
                    </Flex>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <HamburgerIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack direction={'column'} as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            <Flex gap="5" >
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
                                }} variant='ghost' href='/habilidades'>
                                    Habilidades
                                </Button>
                            </Flex>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'} ml="5">
                        <Stack direction={'row'} spacing={7}>
                            <Button _hover={{
                                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                            }} onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box bg={bgcolor} pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <Flex maxW={'auto'} direction={'column'} alignSelf={'flex-end'} gap="5" >
                                <Button as={'a'} _hover={{
                                    bg: (color),
                                }} variant='ghost' href='/'>
                                    Sobre mim
                                </Button>
                                <Button as={'a'} _hover={{
                                    bg: (color),
                                }} variant='ghost' href='/projetos'>
                                    Projetos
                                </Button>
                                <Button as={'a'} _hover={{
                                    bg: (color),
                                }} variant='ghost' href='/habilidades'>
                                    Habilidades
                                </Button>
                            </Flex>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}