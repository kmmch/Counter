import { Helmet } from "react-helmet";

import { Box, Center, Container, Flex, Spacer, VStack } from "@chakra-ui/react";
import { Title } from "./components/atom/Title";
import { Count } from "./components/atom/Count";
import { PrimaryButton } from "./components/molecules/PrimaryButton";
import { ChangeEvent, memo, useEffect, useState } from "react";

export const Counter = memo(() => {
    const titleTagText = "Counter";
    const [num, setNum] = useState(0);


    const onClickCountUp = (): void => {
        setNum(num + 1);
    }

    const onClickCountDown = (): void => {
        setNum(num - 1);
    }

    return (
        <>
            <Helmet  title={titleTagText} />

            <Box bg="#EBF8FF" h="100vh">
                <Center h="100vh">
                    <VStack bg="white" borderRadius={20} boxShadow='base' p="50px">
                        <Center>
                            <Title title="React Counter" />
                        </Center>
                        <Count>{num}</Count>                    
                        <Flex>
                            <Box w="40%">
                                <PrimaryButton text="+" variant="solid" onClick={onClickCountUp}/>
                            </Box>
                            <Spacer/>
                            <Box w="40%">
                                <PrimaryButton text="-" variant="outline" onClick={onClickCountDown}/>
                            </Box>
                        </Flex>
                    </VStack>
                </Center>
            </Box>
        </>
    );
});