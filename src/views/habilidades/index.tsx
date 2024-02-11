import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

export function Habilidades() {
  return (
    <Container maxW={'8xl'} py={12} position={'relative'}>
      <SimpleGrid mt={'20'} columns={{ base: 1, md: 2 }} spacing={5}>
        <Stack spacing={4}>
          <Heading color={useColorModeValue('gray.700', 'gray.200')}>Minhas habilidades e certificados</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Eu estarei atualizando essa página de acordo com o progresso do meu conhecimento e conquistas!
            <br />
            Por hora aqui eu compartilho algumas das minhas realizações profissionais.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.700')} />
            }>
            <Text mt={'10'} textAlign={'center'} fontWeight={'bold'} color={useColorModeValue('green.700', 'green.200')} fontSize={'lg'}>
              Badges AWS
            </Text>
            <Flex
              p={'3'}
              justify={'space-evenly'}
              maxW={'auto'}
              bg={useColorModeValue('gray.50', 'gray.900')}
              color={useColorModeValue('gray.700', 'gray.200')}
              boxShadow={'lg'}
              rounded={'md'}
              overflow={'hidden'}>
              <Link target='_blank' href='https://www.credly.com/badges/72072ba1-fea2-4316-a00f-f4b95adac625/public_url' >
                <Image h={'100'} src='aws-knowledge-cloud-essentials.png' alt='Cloud essentials' />
              </Link>
              <Link target='_blank' href='https://www.credly.com/badges/b4736eeb-3745-498a-a1be-25a21a8b84c8/public_url' >
                <Image h={'100'} src='aws-certified-cloud-practitioner.png' alt='Cloud practitioner' />
              </Link>
              <Link target='_blank' href='https://www.credly.com/badges/35cee08b-d2da-4bc6-a513-156a54696bdd/public_url' >
                <Image h={'100'} src='aws-cloud-quest-cloud-practitioner.png' alt='Cloud quest practitioner' />
              </Link>
              <Link target='_blank' href='https://www.credly.com/badges/25736ef7-2b6c-46db-826e-a30a452fb3a4/public_url' >
                <Image h={'100'} src='aws-cloud-quest-solutions-architect.png' alt='Cloud solutions' />
              </Link>
            </Flex>
            <Text mt={'10'} justifyContent={'center'} textAlign={'center'} fontWeight={'bold'} color={useColorModeValue('green.700', 'green.200')} fontSize={'lg'}>
              Badges AWS em andamento
            </Text>
            <Flex
              p={'3'}
              justify={'space-evenly'}
              maxW={'auto'}
              bg={useColorModeValue('gray.50', 'gray.900')}
              color={useColorModeValue('gray.700', 'gray.200')}
              boxShadow={'lg'}
              rounded={'md'}
              overflow={'hidden'}>
              <Image h={'100'} src='aws-knowledge-architecting.png' alt='Cloud essentials' filter={'grayscale(100%)'} />
              <Image h={'100'} src='aws-certified-solutions-architect-associate.png' alt='Cloud practitioner' filter={'grayscale(100%)'} />  
            </Flex>
            <Text mt={'10'} textAlign={'center'} fontWeight={'bold'} color={useColorModeValue('green.700', 'green.200')} fontSize={'lg'}>
              Certificado Flutter
            </Text>
            <Flex
              justify={'space-evenly'}
              maxW={'auto'}
              bg={useColorModeValue('gray.50', 'gray.900')}
              color={useColorModeValue('gray.700', 'gray.200')}
              boxShadow={'lg'}
              rounded={'md'}
              overflow={'hidden'}>
              <Link target='_blank' as={'a'} href='https://www.udemy.com/certificate/UC-936ceef2-818f-4e49-bf50-e7e72a1483a4/'>
                <Image m={'5'} rounded={'md'} h={'100'} src='Flutter.jpg' alt='Flutter' />
              </Link>
            </Flex>
            <Text mt={'10'} textAlign={'center'} fontWeight={'bold'} color={useColorModeValue('green.700', 'green.200')} fontSize={'lg'}>
              Certificado FrontEnd
            </Text>
            <Flex
              justify={'space-evenly'}
              maxW={'auto'}
              bg={useColorModeValue('gray.50', 'gray.900')}
              color={useColorModeValue('gray.700', 'gray.200')}
              boxShadow={'lg'}
              rounded={'md'}
              overflow={'hidden'}>
              <Link target='_blank' href='https://storage-certificated.s3.sa-east-1.amazonaws.com/Certificado+DEV+QUEST.pdf' >
                <Image m={'5'} rounded={'md'} h={'100'} src='dev-em-dobro.png' alt='Certificado' />
              </Link>
            </Flex>
          </Stack>
        </Stack>
        <Flex>
          <Image
            objectPosition={'fixed'}
            maxH={'400'}
            rounded={'md'}
            boxShadow={'lg'}
            src={
              'caneca-mensagem.jpg'
            }
            alt='mensagem de inspiração'
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}