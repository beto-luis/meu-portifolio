import {
    Accordion, AccordionProps
  } from '@chakra-ui/react'

  interface Props extends AccordionProps {
    children: React.ReactNode;
  }

  export const AccordionContainer = ({ children, ...props }: Props) => {
    return <Accordion{...props}>{children}</Accordion>
  };