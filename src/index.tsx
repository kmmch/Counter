import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import { Counter } from './Counter';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ChakraProvider>
        <React.StrictMode>
            <Counter />
        </React.StrictMode>
    </ChakraProvider>
);