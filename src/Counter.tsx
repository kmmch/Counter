import { Helmet } from "react-helmet";
import { Text } from "@chakra-ui/react";

export const Counter = () => {
    const titleTagText = "Counter";

    return (
        <>
            <Helmet  title="Counter" />
            <Text>Counter</Text>
        </>
    );
}