import React from 'react'
import styled from 'styled-components'
import Header from '../Component/Header'
import Middle from '../Component/Middle'

const Warapper = styled.div`
  /* height: 100vh; */
  background-color: ${({theme}) => theme.quaternary};

`

const Container = () => {
  return (
    <Warapper>
        <Header/>
        <Middle/>
    </Warapper>
  )
}

export default Container