import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  /* background-color: ${({ theme }) => theme.primary}; */
  height: 80px;
  width: 100%;
  display: flex;
  position: fixed;
  top:0;
  left: 0;
    
`

const Gnb = styled.div`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;

`

const H1 = styled.h1`
  color: black;
  font-weight: 100;
  font-size: 40px;

`

const Header = () => {
  return (
    <Container>
      <Gnb>
        <div></div>
        <H1>내가 뭘 먹었더라</H1>
        <div></div>
      </Gnb>
    </Container>
  )
}

export default Header