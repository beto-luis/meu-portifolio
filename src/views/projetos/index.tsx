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
      <Box justifyContent={'center'}>
        <Flex
        justifyContent={'center'}
        alignItems={'center'}
        maxW={800} 
        rounded={'full'}
        boxShadow={'lg'} 
        h={100} 
        mt={'14'} 
        bg={useColorModeValue('green.100', 'green.600')}>
        <Heading
          my={'6'}
          fontSize={{ base : "16px" , md : "30px" , lg : "40px" }}
          fontFamily={'Poppins'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}>
          Fique um pouco e explore!
        </Heading>
        </Flex>
        <Flex 
        justifyContent={'center'}
        alignItems={'center'}
        maxW={800} 
        rounded={'full'} 
        boxShadow={'lg'}
        h={'auto'} 
        mt={'14'} 
        bg={useColorModeValue('green.100', 'green.600')}>
        <Text 
          my={'6'}
          fontSize={{ base : "8px" , md : "12px" , lg : "16px" }}
          fontFamily={'Poppins'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}>
        Aqui encontran-se alguns dos meus projetos com diferentes funcionalidades que foram desenvolvidos durante meu aprendizado em programação.
        <br/>
        Caso deseje ver outros projetos, visite meu repositório clicando aqui <Link href='https://github.com/beto-luis/projeto-fetch-github-api' isExternal color={useColorModeValue('pink.400', 'pink.200')}>
                Link do repositório <ExternalLinkIcon mx='2px' color={useColorModeValue('pink.400', 'pink.200')} />
              </Link>
        </Text>
        </Flex>
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
              <Link target='_Blank' as={'a'} href={'https://main--fluffy-praline-f37cd8.netlify.app/'} variant='custom'>
                <Image
                  position={'relative'}
                  objectFit='cover'
                  h={''}
                  src={'fetch-github.png'}
                  alt='ilustração'
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
                <Text mb={'5'} fontFamily={'poppins'} fontSize={'16'} color={useColorModeValue('gray.600', 'gray.300')} mt={'5'}>Esse projeto foi feito com HTML, CSS e JavaScript. Nele eu pude colocar em prática meu aprendizado até o momento.
                  <br />
                  <br />
                  Aproveitei também para testar meu conhecimento em consumo de API`s e leitura de documentação.
                  <br />
                  <br />
                  Por mais que sua funcionalidade seja simples, foi um excelente desafio para elevar meu nível de conhecimento.</Text>
              </Stack>
              <Link href='https://github.com/beto-luis/projeto-fetch-github-api' isExternal color={'green'}>
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
                  alt='ilustração'
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
                  alt='ilustração'
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
                  alt='ilustração'
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
                  alt='ilustração'
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
                  alt='ilustração'
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
                  alt='ilustração'
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

      <Tabs isFitted variant='enclosed' w={'90%'} my={'40px'} >
        <TabList mb='20px'>
          <Tab color={'green'}>App Expenses</Tab>
          <Tab color={'green'}>App Meals</Tab>
          <Tab color={'green'}>App Shop</Tab>
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
                alt='ilustração'
              />
              <Image
                position={'relative'}
                objectFit='cover'
                rounded={'md'}
                h={'400'}
                src={'expenses-2.png'}
                alt='ilustração'
              />
              <Flex ml={'15'} direction={'column'} color={useColorModeValue('gray.700', 'gray.50')} bg={useColorModeValue('green.100', 'green.600')} p={'8'} rounded={'md'}>
                <Heading mb={'5'} textAlign={'center'} fontFamily={'poppins'}>
                  App Despesas Pessoais
                </Heading>
                <Text textAlign={'left'} fontFamily={'poppins'}>
                  Este projeto consiste na utilização de boas práticas de programação garantindo a separação clara das responsabilidades, utilizei widgets do Flutter de forma reutilizável, promovendo a consistência visual em todo o aplicativo.
                  Implementei uma interface para visualização e edição das despesas cadastradas, proporcionando uma experiência completa ao usuário.
                  Uma funcionalidade destacada é a geração de um gráfico que ilustra o percentual dos valores gastos nos diferentes dias da semana.
                  Isso oferece uma análise visual e rápida dos padrões de gastos.
                </Text>
                <Link href='https://storage-apps-flutter.s3.sa-east-1.amazonaws.com/app-expenses.apk' mt={'auto'} fontWeight={'bold'} color={useColorModeValue('pink.400', 'pink.200')}>
                  Download do App <ExternalLinkIcon mx='2px' />
                </Link>
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
                alt='ilustração'
              />
              <Image
                position={'relative'}
                objectFit='cover'
                rounded={'md'}
                h={'400'}
                src={'meals-2.png'}
                alt='ilustração'
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
                <Link href='https://storage-apps-flutter.s3.sa-east-1.amazonaws.com/app-meals.apk' mt={'auto'} fontWeight={'bold'} color={useColorModeValue('pink.400', 'pink.200')} >
                  Download do App <ExternalLinkIcon mx='2px' />
                </Link>
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
                alt='ilustração'
              />
              <Image
                position={'relative'}
                objectFit='cover'
                rounded={'md'}
                h={'400'}
                src={'shop-2.png'}
                alt='ilustração'
              />
              <Flex ml={'15'} direction={'column'} color={useColorModeValue('gray.700', 'gray.50')} bg={useColorModeValue('green.100', 'green.600')} p={'8'} rounded={'md'}>
                <Heading mb={'5'} textAlign={'center'} fontFamily={'poppins'}>
                  App Minha Loja
                </Heading>
                <Text textAlign={'left'} fontFamily={'poppins'}>
                  Este projeto que app simula um site de compras, com seções para as informações dos produtos e o métodos para favoritar e adicionar itens ao carrinho de compras.
                  Neste projeto utilizei o provider como gerenciador de estado, também procura extender o conhecimento na utilização de widgets e padrões visuais.
                  É possivel notar uma organização e complexidade maior na construção deste app.
                </Text>
                <br />
                <Link href='https://storage-apps-flutter.s3.sa-east-1.amazonaws.com/app-shop.apk' mt={'auto'} fontWeight={'bold'} color={useColorModeValue('pink.400', 'pink.200')}>
                  Download do App <ExternalLinkIcon mx='2px' />
                </Link>
              </Flex>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}