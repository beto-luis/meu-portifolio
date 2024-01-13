import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Avatar,
  Center,
  VisuallyHidden,
  chakra,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp, } from 'react-icons/fa'
import { Divider } from '@chakra-ui/react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      fontSize={'20'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.300', 'green.300'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export function SobreMim() {
  return (
    <Container maxW={'100%'}
      overflow={'hidden'}>
      <Stack ml={10}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              color={useColorModeValue('gray.700', 'gray.200')}
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                bottom: 1,
                left: 0,
              }}>
              Olá,
            </Text>
            <br />
            <Text as={'span'} color={'green.600'}>
              Seja bem vindo <br></br> ao meu portifólio!
            </Text>
          </Heading>
          <Text mr={'10'} color={useColorModeValue('gray.700', 'gray.200')}>
            Snippy is a rich coding snippets app that lets you create your own code
            snippets, categorize them, and even sync them in the cloud so you can use them
            anywhere. All that is free!
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'green.300'}
              _hover={{ bg: 'green.700' }}>
              Get started
            </Button>
          </Stack>
        </Stack>
        <Center py={5}>
          <Box
            mr={20}
            maxW={'600px'}
            w={'full'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}>
            <Flex
              h={'180px'}
              w={'full'}
              zIndex={-1}
              bg={useColorModeValue('green.100', 'green.600')} />
            <Flex justify={'center'} mt={-130}>
              <Avatar
                objectFit={'cover'}
                rounded={'full'}
                size={'1'}
                src={'Imagem_perfil_2.jpeg'}
                w={'65%'}
                css={{
                  border: '3px solid'
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={20}>
                <Heading mt={'5'} fontSize={'2xl'} fontWeight={500} fontFamily={'poppins'}>
                  Roberto Carvalho
                </Heading>
                <Divider w={'70%'} mt={'10'} mb={'10'} />
                <Text fontFamily={'poppind'} fontSize={'20'} color={'gray.500'}>Desenvolvedor Frontend</Text>
              </Stack>

              <Stack justify={'center'} direction={'row'} spacing={3}>
                <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/roberto-carvalho-bb6130221/'}>
                  <FaLinkedin />
                </SocialButton>
                <SocialButton label={'Whatsapp'} href={'https://wa.me/+5541997265642'}>
                  <FaWhatsapp />
                </SocialButton>
                <SocialButton label={'Github'} href={'https://github.com/beto-luis'}>
                  <FaGithub />
                </SocialButton>
              </Stack>
            </Box>
          </Box>
        </Center>
      </Stack>
    </Container>
  )
}