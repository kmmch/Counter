import { Box, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    children: number;
}

export const Count: FC<Props> = memo((props) => {
    const {children} = props;

    return (
        <>
            <Box my="50px">
                <Text fontSize="6xl" color="blue.600" as="b">{children}</Text>
            </Box>
        </>
    );
});