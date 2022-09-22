import React from 'react';
// import SearchCon from './Component/SearchCon';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './style/theme'
import Container from './Dashboard/Container';

function App() {


    return (
        <ThemeProvider theme={defaultTheme}>
            {/* <SearchCon/> */}
            <Container/>
        </ThemeProvider>
    );
}

export default App;  