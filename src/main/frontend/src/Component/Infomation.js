import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: white; */
    justify-content: center;
    align-items: center;

    h2 {
        padding-bottom: 16px;
        text-align: center;
    }
`

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    padding : 0 24px;
    margin-bottom : 24px;
`

const MenuItem = styled.div`
    padding : 5px 15px;
    margin : 1px;
    border-radius: 5px;
    border : 1px solid grey;
    background-color: #fff;
`

const ResultBox = styled.div`
    border-radius: 5px;
    border : 1px solid grey;
    background-color: #fff;
    /* 임시 높이 */
    height: 70vh;
    padding : 15px;

`
const Infomation = () => {
    const [carbo, setCarbo] = useState("");
    const [protein, setProtein] = useState("");
    const [fat, setFat] = useState("");
  return (
    <Container>

        <h2>오늘치 영양성분</h2>
        <Menu>
            <MenuItem>주요</MenuItem>
            <MenuItem>일일</MenuItem>
            <MenuItem>탄단지</MenuItem>
        </Menu>
        <ResultBox>
            <p>탄수화물 : {carbo}</p>
            <p>단백질 : {protein}</p>
            <p>지방 : {fat}</p>
        </ResultBox>
    </Container>
  )
}

export default Infomation