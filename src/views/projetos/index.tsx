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
  Spacer,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

const informacoesProjeto = [
  {
    name: 'Buscador de Usuários do GitHub',
    role: 'Chief Marketing Officer',
    content:
      'Esse projeto foi feito com HTML, CSS e JavaScript. Nele eu pude colocar em prática meu aprendizado até o momento. Aproveitei também para testar meu conhecimento em consumo de API`s e leitura de documentação. Por mais que seja um projeto simples, foi um excelente desafio para elevar meu nível de conhecimento.',
    image:
      'fetch-github.png',
  },
  /* {
    name: 'Krysta B.',
    role: 'Entrepreneur',
    content:
      "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    avatar:
      'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Darcy L.',
    role: 'Movie star',
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Daniel T.',
    role: 'Musician',
    content:
      'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
    avatar:
      'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  }, */
]

interface ProjetosCardProps {
  name: string
  role: string
  content: string
  image: string
  index: number
}

function ProjectsCard(props: ProjetosCardProps) {
  const { name, role, content, image, } = props
  return (
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
              w={''}
              src={image}
              _after={{
                position: 'absolute',
                src: { image },
                transition: '0.2s',
              }}
              _hover={{
                _after: { opacity: '1' },
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
            <Text fontFamily={'poppins'} fontSize={'16'} color={'gray.500'} mt={'5'}>Esse projeto foi feito com HTML, CSS e JavaScript. Nele eu pude colocar em prática meu aprendizado até o momento. 
            <br/>
            <br/>
            Aproveitei também para testar meu conhecimento em consumo de API`s e leitura de documentação.
            <br/>
            <br/>
            Por mais que seja um projeto simples, foi um excelente desafio para elevar meu nível de conhecimento.</Text>
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
          <Link target='_Blank' as={'a'} href={'https://github.com/beto-luis/projeto-fetch-github-api'} variant='custom'>
            <Image
              position={'relative'}
              objectFit='cover'
              w={''}
              src={image}
              _after={{
                position: 'absolute',
                src: { image },
                transition: '0.2s',
              }}
              _hover={{
                _after: { opacity: '1' },
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
            <Text fontFamily={'poppins'} fontSize={'16'} color={'gray.500'} mt={'5'}>Esse projeto foi feito com HTML, CSS e JavaScript. Nele eu pude colocar em prática meu aprendizado até o momento. 
            <br/>
            <br/>
            Aproveitei também para testar meu conhecimento em consumo de API`s e leitura de documentação.
            <br/>
            <br/>
            Por mais que seja um projeto simples, foi um excelente desafio para elevar meu nível de conhecimento.</Text>
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
          <Link target='_Blank' as={'a'} href={'https://github.com/beto-luis/projeto-fetch-github-api'} variant='custom'>
            <Image
              position={'relative'}
              objectFit='cover'
              w={''}
              src={image}
              _after={{
                position: 'absolute',
                src: { image },
                transition: '0.2s',
              }}
              _hover={{
                _after: { opacity: '1' },
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
            <Text fontFamily={'poppins'} fontSize={'16'} color={'gray.500'} mt={'5'}>Esse projeto foi feito com HTML, CSS e JavaScript. Nele eu pude colocar em prática meu aprendizado até o momento. 
            <br/>
            <br/>
            Aproveitei também para testar meu conhecimento em consumo de API`s e leitura de documentação.
            <br/>
            <br/>
            Por mais que seja um projeto simples, foi um excelente desafio para elevar meu nível de conhecimento.</Text>
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
          <Link target='_Blank' as={'a'} href={'https://github.com/beto-luis/projeto-fetch-github-api'} variant='custom'>
            <Image
              position={'relative'}
              objectFit='cover'
              w={''}
              src={image}
              _after={{
                position: 'absolute',
                src: { image },
                transition: '0.2s',
              }}
              _hover={{
                _after: { opacity: '1' },
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
            <Text fontFamily={'poppins'} fontSize={'16'} color={'gray.500'} mt={'5'}>Esse projeto foi feito com HTML, CSS e JavaScript. Nele eu pude colocar em prática meu aprendizado até o momento. 
            <br/>
            <br/>
            Aproveitei também para testar meu conhecimento em consumo de API`s e leitura de documentação.
            <br/>
            <br/>
            Por mais que seja um projeto simples, foi um excelente desafio para elevar meu nível de conhecimento.</Text>
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
          <Link target='_Blank' as={'a'} href={'https://github.com/beto-luis/projeto-fetch-github-api'} variant='custom'>
            <Image
              position={'relative'}
              objectFit='cover'
              w={''}
              src={image}
              _after={{
                position: 'absolute',
                src: { image },
                transition: '0.2s',
              }}
              _hover={{
                _after: { opacity: '1' },
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
            <Text fontFamily={'poppins'} fontSize={'16'} color={'gray.500'} mt={'5'}>Esse projeto foi feito com HTML, CSS e JavaScript. Nele eu pude colocar em prática meu aprendizado até o momento. 
            <br/>
            <br/>
            Aproveitei também para testar meu conhecimento em consumo de API`s e leitura de documentação.
            <br/>
            <br/>
            Por mais que seja um projeto simples, foi um excelente desafio para elevar meu nível de conhecimento.</Text>
          </Stack>
        </Box>
      </Flex>
    </Center>
  )
}

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
        {informacoesProjeto.map((cardInfo, index) => (
          <ProjectsCard key={index} {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
    </Flex>
  )
}