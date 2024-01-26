import { Header } from "@/layout/header";
import { Flex, Box, Image, Link, useColorModeValue } from "@chakra-ui/react";

export function Skills() {
    return (
        
            <Flex
                position={'absolute'}
                justifyContent={'center'}
                alignItems={'center'}
                mt={'20'}
            >
                <Flex
                    position={'relative'}
                    bg={useColorModeValue('gray.50', 'gray.900')}
                    color={useColorModeValue('gray.700', 'gray.200')}
                    boxShadow={'lg'}
                    rounded={'md'}>
                    <Link target="_blank" href="https://www.credly.com/badges/b4736eeb-3745-498a-a1be-25a21a8b84c8/public_url">
                        <Image
                            src="aws-certified-cloud-practitioner.png"
                        />
                    </Link>
                </Flex>
            </Flex>
        
    )
}