import React from 'react';
// import SearchCon from './Component/SearchCon';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './style/theme'
import Container from './Dashboard/Container';
import { GlobalStyle } from './style/global';
import './App.css';



function App() {


    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            {/* <SearchCon/> */}
            <Container/>
        </ThemeProvider>
    );
}

export default App;  