import { Button } from '@chakra-ui/react'
import { FC, memo } from 'react';

type Props = {
    text: string;
    variant: string;
    onClick: () => void;
}
export const PrimaryButton: FC<Props> = memo((props) => {
    const {text, variant, onClick} = props;

    return (
        <>
            <Button 
                w="50px" 
                h="50px" 
                borderRadius="100%"
                fontSize="20px"
                colorScheme='blue'
                variant={variant}
                onClick={onClick}
            >{text}</Button>
        </>
    );
});