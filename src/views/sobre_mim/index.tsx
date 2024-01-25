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
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp, } from 'react-icons/fa'
import { Divider } from '@chakra-ui/react'
import { AccordionContainer } from '@/components/AccordionContainer'
import { AccordionItens } from '@/components/AccordionItens'

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
          <AccordionContainer defaultIndex={[0]} allowMultiple>
            <AccordionItens title="Olá, eu sou Roberto.">
              Iniciei minha carreira na indústria, onde desenvolvi habilidades como eletrotécnico e me aprofundei na programação CNC. Decidi, recentemente, realizar uma transição para o universo da programação web e mobile. Minha jornada de aprendizado tem sido caracterizada por desafios inspiradores e conquistas notáveis, destacando minha habilidade em traduzir conceitos complexos em soluções interativas. Comprometido em manter-me atualizado, busco integrar a experiência industrial com a agilidade da programação para contribuir significativamente em projetos inovadores, estando aberto a colaborações inspiradoras e desafios dinâmicos.
            </AccordionItens>
            <AccordionItens title="Clique aqui para saber um pouco mais...">
              Sou um profissional dedicado e apaixonado por desafios. Iniciei minha carreira na indústria, através de uma oportunidade de estudar remuneradamente em uma multinacional [Denso do Brasil]. Nesse período conquistei um diploma de eletrotécnico em fabricação industrial, algum tempo depois tive a oportunidade de trabalhar com máquinas CNC e logo me interessei pelo seu sistema de programação, me dediquei muito nessa disciplina durante a faculdade e a complementei com um curso profissionalizante.
              <br />
              <br />
              Ao longo dos anos, a minha jornada na indústria me proporcionou uma visão única sobre a eficiência operacional, a automação e a precisão técnica. No entanto, a busca incessante pelo aprendizado e a vontade de explorar novos horizontes me levaram a um ponto crucial em minha carreira no início do ano passado.
              <br />
              <br />
              Decidi embarcar em uma emocionante transição de carreira para o universo da programação web e mobile. Uma vontade que surgira ainda muito jovem e sem um norte para me aproximar da área levou um tempo para reencontrar esse objetivo e então embarcar definitivamente  nessa incrível jornada de conhecimento e desafios. Desde então, tenho mergulhado profundamente nos fundamentos da programação, explorando linguagens como HTML, CSS, JavaScript e frameworks modernos como React.js para o desenvolvimento web e Flutter para o desenvolvimento mobile.
              <br />
              <br />
              Minha jornada de aprendizado tem sido marcada por desafios inspiradores e conquistas significativas. A habilidade de traduzir conceitos complexos em soluções interativas e acessíveis tornou-se minha paixão. Ao combinar minha experiência industrial com minha nova paixão pela programação, acredito que possuo uma perspectiva única que pode agregar valor a projetos inovadores.
              <br />
              <br />
              Estou entusiasmado para aplicar minha experiência adquirida na indústria e minha aptidão em programação para contribuir de maneira significativa em projetos web e mobile. Estou comprometido em manter-me atualizado com as últimas tendências tecnológicas e em aprimorar constantemente minhas habilidades para enfrentar os desafios dinâmicos do mundo da tecnologia.
              <br />
              <br />
              Meu objetivo é integrar as lições aprendidas na indústria com a criatividade e agilidade da programação para criar soluções eficientes e impactantes. Estou aberto a oportunidades emocionantes, colaborações inspiradoras e desafios que me permitam crescer profissionalmente e contribuir para a evolução do cenário tecnológico.
              <br />
              <br />
              Estou ansioso para compartilhar minha jornada e minhas habilidades em programação com a comunidade tecnológica, enquanto continuo explorando e construindo um futuro promissor nesta nova fase da minha carreira.
            </AccordionItens>
          </AccordionContainer>
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
            boxShadow={'2x1'}
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
                <Text fontFamily={'poppins'} fontSize={'20'} color={'gray.500'}>Desenvolvedor Frontend</Text>
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