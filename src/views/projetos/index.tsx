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
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

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
              <Link mt={'5'} href='https://github.com/beto-luis/projeto-fetch-github-api' isExternal color={'green'}>
                  Link do repositório <ExternalLinkIcon mx='2px' color={'green'} />
                </Link>
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
                  h={'full'}
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
                <Link mt={'5'} href='https://github.com/beto-luis/landing-page-com-grid-e-flex' isExternal color={'green'}>
                  Link do repositório <ExternalLinkIcon mx='2px' color={'green'} />
                </Link>
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
                  h={'full'}
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
                  Formulário de preenchimento obrigatório
                </Heading>
                <Text fontFamily={'poppins'} fontSize={'16'} color={useColorModeValue('gray.600', 'gray.300')} mt={'5'}>Esse projeto foi uma Quest de JavaScript do meu primeiro curso.
                  <br />
                  <br />
                  Um dos primeiros projetos em minha jornada de aprendizado como programador.
                  <br />
                  <br />
                  Explorei as diversas formas de posicionar os elementos em uma página, tentando sempre manter a boa prática do código limpo.
                </Text>
                <Link mt={'5'} href='https://github.com/beto-luis/Quest-JS-intermediario' isExternal color={'green'}>
                  Link do repositório <ExternalLinkIcon mx='2px' color={'green'} />
                </Link>
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
                  Foi construido para colocar em prática o conhecimento adquirido até o momento, desenvolvi como treinamento pessoal.
                  <br />
                  <br />
                  Responsivo e com boas práticas de codificação.
                </Text>
                <Link mt={'5'} href='https://github.com/beto-luis/Huddle-landing-page' isExternal color={'green'}>
                  Link do repositório <ExternalLinkIcon mx='2px' color={'green'} />
                </Link>
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

            <Box p={6} textAlign={'left'} maxW={'auto'}>
              <Stack spacing={0}>
                <Heading fontSize={'20'} fontWeight={500} fontFamily={'poppins'}>
                  Projeto Mario
                </Heading>
                <Text fontFamily={'poppins'} fontSize={'16'} color={useColorModeValue('gray.600', 'gray.300')} mt={'5'}>Nesse projeto foi utilizado HTML, CSS e JavaScript
                  <br />
                  <br />
                  Um dos primeiros projetos em minha jornada de aprendizado como programador.
                  <br />
                  <br />
                  Explorei as diversas formas de posicionar os elementos em uma página, tentando sempre manter a boa prática do código limpo.
                </Text>
                <Link mt={'5'} href='https://github.com/beto-luis/projeto-mario' isExternal color={'green'}>
                  Link do repositório <ExternalLinkIcon mx='2px' color={'green'} />
                </Link>
              </Stack>
            </Box>
          </Flex>
        </Center>
      </SimpleGrid>

      <Flex rounded={'full'} alignItems={'center'} w={800} h={'auto'} mb={'10'} bg={useColorModeValue('green.100', 'green.600')}>
        <Heading textAlign={'center'}
          p={'8'}
          mx={'auto'}
          fontSize={20}
          fontFamily={'Poppins'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}>
          Aqui estão algumas das minhas práticas em Dart como linguagem de programação e o framework Flutter para a interface de usuário.
          <br /><br />
          Eles estão disponiveis também para download, fique a vontade para experimentar suas funcionalidades na prática!
        </Heading>
      </Flex >

      <Tabs isFitted variant='enclosed' w={'90%'} >
        <TabList mb='20px'>
          <Tab color={'green'}>App Expenses</Tab>
          <Tab color={'green'}>Two</Tab>
          <Tab color={'green'}>Tre</Tab>
          <Tab color={'green'}>Four</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex gap={5}>
              <Image
                position={'relative'}
                objectFit='cover'
                rounded={'md'}
                h={'400'}
                src={'expenses.png'}
              />
              <Image
                position={'relative'}
                objectFit='cover'
                rounded={'md'}
                h={'400'}
                src={'expenses-2.png'}
              />
              <Flex ml={'15'} direction={'column'} color={useColorModeValue('gray.700', 'gray.50')} bg={useColorModeValue('green.100', 'green.600')} p={'8'} rounded={'md'}>
                <Heading mb={'5'} textAlign={'center'} fontFamily={'poppins'}>
                  App Despesas Pessoais
                </Heading>
                <Text textAlign={'left'} fontFamily={'poppins'}>
                  Este projeto consiste a utilização de boas práticas de programação garantindo a separação clara das responsabilidades, utilizei widgets do Flutter de forma reutilizável, promovendo a consistência visual em todo o aplicativo.
                  Implementei uma interface para visualização e edição das despesas cadastradas, proporcionando uma experiência completa ao usuário.
                  Uma funcionalidade destacada é a geração de um gráfico que ilustra o percentual dos valores gastos nos diferentes dias da semana.
                  Isso oferece uma análise visual e rápida dos padrões de gastos.
                </Text>
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex gap={5}>
              <Image
                position={'relative'}
                objectFit='cover'
                rounded={'md'}
                h={'400'}
                src={'meals.png'}
              />
              <Image
                position={'relative'}
                objectFit='cover'
                rounded={'md'}
                h={'400'}
                src={'meals-2.png'}
              />
              <Flex ml={'15'} direction={'column'} color={useColorModeValue('gray.700', 'gray.50')} bg={useColorModeValue('green.100', 'green.600')} p={'8'} rounded={'md'}>
                <Heading mb={'5'} textAlign={'center'} fontFamily={'poppins'}>
                  App Meals
                </Heading>
                <Text textAlign={'left'} fontFamily={'poppins'}>
                  Um app de receitas com a funcionalidade de separar as categorias, tempo, dificuldade e valores sobre o conteúdo da aplicação.
                  Neste app dinâmico teve como foco a implementação de múltiplas telas de navegação para garantir uma experiência fluida e organizada.
                  Utilização de rotas nomeadas para facilitar o acesso às diferentes seções do aplicativo.
                  Também inclui a adição de um drawer personalizado e dinâmico.
                  Uma boa organização das pastas para e dos componentes para facilitar atualização e colaborações futuras.
                </Text>
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex gap={5}>
              <Image
                position={'relative'}
                objectFit='cover'
                rounded={'md'}
                h={'400'}
                src={'shop.png'}
              />
              <Image
                position={'relative'}
                objectFit='cover'
                rounded={'md'}
                h={'400'}
                src={'shop-2.png'}
              />
              <Flex ml={'15'} direction={'column'} color={useColorModeValue('gray.700', 'gray.50')} bg={useColorModeValue('green.100', 'green.600')} p={'8'} rounded={'md'}>
                <Heading mb={'5'} textAlign={'center'} fontFamily={'poppins'}>
                  App Minha Loja
                </Heading>
                <Text textAlign={'left'} fontFamily={'poppins'}>
                  Um app de receitas com a funcionalidade de separar as categorias, tempo, dificuldade e valores sobre o conteúdo da aplicação.
                  Neste app dinâmico teve como foco a implementação de múltiplas telas de navegação para garantir uma experiência fluida e organizada.
                  Utilização de rotas nomeadas para facilitar o acesso às diferentes seções do aplicativo.
                  Também inclui a adição de um drawer personalizado e dinâmico.
                  Uma boa organização das pastas para e dos componentes para facilitar atualização e colaborações futuras.
                </Text>
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>
            <p>Four!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}