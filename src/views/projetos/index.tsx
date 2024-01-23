import {
  Image,
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Stack,
  Center,
  Text,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

export function MeusProjetos() {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      alignItems={'center'}
      direction={'column'}
      width={'100%'}
      overflow={'hidden'}>
      <Box w={800} rounded={'full'} h={100} mt={'14'} bg={useColorModeValue('green.100', 'green.600')}>
        <Heading
          my={'6'}
          fontSize={40}
          fontFamily={'Poppins'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}>
          Fique um pouco e explore!
        </Heading>
      </Box>
      <SimpleGrid columns={{ base: 1 }} spacing={'20'} mt={16} mb={16} mx={'auto'}>
        <Center py={5} flexDirection={'column'}>
          <Flex
            maxW={'800px'}
            w={'full'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            boxShadow={'lg'}
            rounded={'md'}
            overflow={'hidden'}
            mb={'20'}>
            <Flex justify={'center'}>
              <Link target='_Blank' as={'a'} href={'https://github.com/beto-luis/projeto-fetch-github-api'} variant='custom'>
                <Image
                  position={'relative'}
                  objectFit='cover'
                  h={'100%'}
                  src={'fetch-github.png'}
                  _after={{
                    position: 'absolute',
                    transition: '0.2s',
                  }}
                  _hover={{
                    opacity: '0.8',
                    transform: (1.1),
                  }}
                />
              </Link>
            </Flex>

            <Box p={6} textAlign={'left'} maxW={400}>
              <Stack spacing={0}>
                <Heading fontSize={'20'} fontWeight={500} fontFamily={'poppins'}>
                  Buscador de Usuários do GitHub
                </Heading>
                <Text fontFamily={'poppins'} fontSize={'16'} color={useColorModeValue('gray.600', 'gray.300')} mt={'5'}>Esse projeto foi feito com HTML, CSS e JavaScript. Nele eu pude colocar em prática meu aprendizado até o momento.
                  <br />
                  <br />
                  Aproveitei também para testar meu conhecimento em consumo de API`s e leitura de documentação.
                  <br />
                  <br />
                  Por mais que sua funcionalidade seja simples, foi um excelente desafio para elevar meu nível de conhecimento.</Text>
              </Stack>
            </Box>
          </Flex>

          <Flex
            maxW={'800px'}
            w={'full'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            boxShadow={'lg'}
            rounded={'md'}
            overflow={'hidden'}
            mb={'20'}>
            <Flex justify={'center'}>
              <Link target='_Blank' as={'a'} href={'https://beto-luis.github.io/landing-page-com-grid-e-flex/'} variant='custom'>
                <Image
                  position={'relative'}
                  objectFit='cover'
                  h={''}
                  src={'landing-page.png'}
                  _before={{
                    position: 'absolute',
                    transition: '0.2s',
                  }}
                  _hover={{
                    opacity: '0.8',
                    transform: (1.1),
                  }}
                />
              </Link>
            </Flex>

            <Box p={6} textAlign={'left'} maxW={400}>
              <Stack spacing={0}>
                <Heading fontSize={'20'} fontWeight={500} fontFamily={'poppins'}>
                  Landing page com flex e grid
                </Heading>
                <Text fontFamily={'poppins'} fontSize={'16'} color={useColorModeValue('gray.600', 'gray.300')} mt={'5'}>Neste projeto utilizei apenas HTML e CSS, nele eu aprendi sobre flex e grid no CSS.
                  <br />
                  <br />
                  Explorei as diversas formas de posicionar os elementos em uma página, tentando sempre manter a boa prática do código limpo.
                  <br />
                  <br />
                  A responsividade foi o principal foco no desenvolvimento desse projeto e também o maior desafio.
                  </Text>
              </Stack>
            </Box>
          </Flex>

          <Flex
            maxW={'800px'}
            w={'full'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            boxShadow={'lg'}
            rounded={'md'}
            overflow={'hidden'}
            mb={'20'}>
            <Flex justify={'center'}>
              <Link target='_Blank' as={'a'} href={'https://beto-luis.github.io/Quest-JS-intermediario/'} variant='custom'>
                <Image
                  position={'relative'}
                  objectFit='cover'
                  h={''}
                  src={'formulario.png'}
                  _before={{
                    position: 'absolute',
                    transition: '0.2s',
                  }}
                  _hover={{
                    opacity: '0.8',
                    transform: (1.1),
                  }}
                />
              </Link>
            </Flex>

            <Box p={6} textAlign={'left'} maxW={400}>
              <Stack spacing={0}>
                <Heading fontSize={'20'} fontWeight={500} fontFamily={'poppins'}>
                  Formulário de campo obrigatório
                </Heading>
                <Text fontFamily={'poppins'} fontSize={'16'} color={useColorModeValue('gray.600', 'gray.300')} mt={'5'}>Esse projeto foi uma Quest de JavaScript do meu primeiro curso.
                  <br />
                  <br />
                  Um dos primeiros projetos em minha jornada de aprendizado como programador.
                  <br />
                  <br />
                  Explorei as diversas formas de posicionar os elementos em uma página, tentando sempre manter a boa prática do código limpo.
                  </Text>
              </Stack>
            </Box>
          </Flex>

          <Flex
            maxW={'800px'}
            w={'full'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            boxShadow={'lg'}
            rounded={'md'}
            overflow={'hidden'}
            mb={'20'}>
            <Flex justify={'center'}>
              <Link target='_Blank' as={'a'} href={'https://beto-luis.github.io/Huddle-landing-page/'} variant='custom'>
                <Image
                  position={'relative'}
                  objectFit='cover'
                  h={''}
                  src={'huddle.png'}
                  _before={{
                    position: 'absolute',
                    transition: '0.2s',
                  }}
                  _hover={{
                    opacity: '0.8',
                    transform: (1.1),
                  }}
                />
                <Image
                  position={'relative'}
                  objectFit='cover'
                  h={''}
                  src={'huddle-2.png'}
                  _before={{
                    position: 'absolute',
                    transition: '0.2s',
                  }}
                  _hover={{
                    opacity: '0.8',
                    transform: (1.1),
                  }}
                />
              </Link>
            </Flex>

            <Box p={6} textAlign={'left'} maxW={400}>
              <Stack spacing={0}>
                <Heading fontSize={'20'} fontWeight={500} fontFamily={'poppins'}>
                  Huddle - FrontEnd Mentor
                </Heading>
                <Text fontFamily={'poppins'} fontSize={'16'} color={useColorModeValue('gray.600', 'gray.300')} mt={'5'}>Landing page feita com HTML e CSS, desafio do FrontEnd Mentor.
                  <br />
                  <br />
                  Foi construido para colocar em prática o conhecimento que havia adquirido até o momento como treinamento pessoal.
                  <br />
                  <br />
                  Responsivo e com boas práticas de codificação.
                  </Text>
              </Stack>
            </Box>
          </Flex>

          <Flex
            maxW={'800px'}
            w={'full'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            boxShadow={'lg'}
            rounded={'md'}
            overflow={'hidden'}
            mb={'20'}>
            <Flex justify={'center'} direction={'column'}>
              <Link target='_Blank' as={'a'} href={'https://beto-luis.github.io/projeto-mario/'} variant='custom'>
                <Image
                  position={'relative'}
                  objectFit='cover'
                  h={''}
                  src={'projeto-mario.png'}
                  _before={{
                    position: 'absolute',
                    transition: '0.2s',
                  }}
                  _hover={{
                    opacity: '0.8',
                    transform: (1.1),
                  }}
                />
                <Image
                position={'relative'}
                  objectFit='cover'
                  h={''}
                  src={'projeto-mario-tr.png'}
                  _before={{
                    position: 'absolute',
                    transition: '0.2s',
                  }}
                  _hover={{
                    opacity: '0.8',
                    transform: (1.1),
                  }}
                />
              </Link>
            </Flex>

            <Box p={6} textAlign={'left'} maxW={400}>
              <Stack spacing={0}>
                <Heading fontSize={'20'} fontWeight={500} fontFamily={'poppins'}>
                  Formulário de campo obrigatório
                </Heading>
                <Text fontFamily={'poppins'} fontSize={'16'} color={useColorModeValue('gray.600', 'gray.300')} mt={'5'}>Esse projeto foi uma Quest de JavaScript 
                  <br />
                  <br />
                  Um dos primeiros projetos em minha jornada de aprendizado como programador.
                  <br />
                  <br />
                  Explorei as diversas formas de posicionar os elementos em uma página, tentando sempre manter a boa prática do código limpo.
                  </Text>
              </Stack>
            </Box>
          </Flex>


        </Center>
      </SimpleGrid>
    </Flex>
  )
}