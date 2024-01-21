<Flex
      boxShadow={'lg'}
      maxW={'900px'}
      h={'415px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Flex direction={'column'} textAlign={'left'} justifyContent={'center'}>
        <chakra.p fontFamily={'Poppins'} fontWeight={'bold'} fontSize={14}>
          {name} <br></br>
          <chakra.span fontFamily={'Inter'} fontWeight={'medium'} color={'gray.500'}>
            {' '}
            {role}
          </chakra.span>
        </chakra.p>
        <chakra.p fontFamily={'Inter'} fontWeight={'medium'} fontSize={'15px'} pb={4}>
          {content}
        </chakra.p>
      </Flex>
      <Flex>
        <Image
          src={image}
          maxW={{ base: '100%', sm: '200px' }}
          objectFit={'contain'}
           />
      </Flex>
    </Flex>