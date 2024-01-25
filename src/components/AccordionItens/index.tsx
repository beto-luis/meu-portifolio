import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    useColorModeValue,
    Box,
  } from '@chakra-ui/react'

  interface Props {
    title: string,
    children: React.ReactNode;
  }

  export const AccordionItens = ({ title, children }: Props) => {
    return (
        <AccordionItem>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' mr={'10'} color={useColorModeValue('gray.700', 'gray.200')} fontFamily={'poppins'} fontWeight={'light'}>
            {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4} mr={'10'} color={useColorModeValue('gray.700', 'gray.200')} fontFamily={'poppins'}>
        {children}
    </AccordionPanel>
  </AccordionItem>
    );
  };