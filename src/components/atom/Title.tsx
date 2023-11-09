import { Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    title: string;
}

export const Title: FC<Props> = memo((props) => {
    console.log("Title");
    const {title} = props;

    return (
        <>
            <Text as="b" color="#b3b0ac" fontSize="20px">{title}</Text>
        </>
    );
});