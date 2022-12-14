import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;

    h2 {
        text-align: center;
        margin-bottom : 16px;
    }
    
    
`

const SearchBox = styled.form`
    margin-bottom: 14px;
    margin-left: 10px;
    align-items: center;
    
    input {
        height: 48px;
        /* background-color: ${({ theme }) => theme.tertiary}; */
        background-color: #fff;
        border: 1px solid grey;
        
        width: 80%;
        color: black;
        border-radius: 8px;
        outline: none;
        padding-left: 10px;

    }

    button {
        width: 7%;
        margin-left : 3px;
        height: 48px;
        background-color: #fff;
        border: 1px solid grey;
        /* background-color: ${({ theme }) => theme.tertiary}; */
        border-radius: 8px;

    }

`

const ResultBox = styled.div`
    /* padding : 10px; */
    display:  flex;
    flex-wrap: wrap;

`

const ItemBox = styled.div`
    /* display: flex; */
    width: 20%;
    /* height: 10vh; */
    border: 1px solid grey;
    border-radius: 5px;
    margin : 10px;
    padding : 15px;
    /* background-color: ${({theme})=> theme.tertiary}; */
    background-color: #fff;
    /* text-align: center; */
    
    h4 {
        font-size : 14px; 
        color : black;
        text-align: center;
        margin-bottom: 5px;
    }

    p {
        font-size : 12px;

    }

    &:hover {
        background-color: grey;
    }

`


const SearchCon = () => {

    // const [hello, setHello] = useState(null);
    const [result, setResult] = useState(null);
    const [search, setSearch] = useState("");

    // useEffect(() => {
    //     axios.get('/api/hello')
    //         .then(response => { setHello(response.data); console.log(response.data) })
    //         .catch(error => console.log(error))
    // }, []);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios({
    //         method: "post",
    //         url: "/api/putDiet",
    //         data: {
    //             keyword: "????????????",
    //         },
    //         contentType: "application/x-www-form-urlencoded; charset=UTF-8;"
    //     })
    // }

    // const handleSubmitKeyword = (event) => {
    //     event.preventDefault();
    //     axios.get(`/api/getDiet?keyword=${search}`, { keyword: search })
    //         .then(response => { console.log(response.data); setHello(response.data) })
    // }

    const handleChange = ({ target: { value } }) => setSearch(value);

    const handleSubmitKeywordFood = (e) => {
        e.preventDefault();
        axios.get(`/api/getFood?keyword=${search}`, { keyword: search })
            .then(response => { console.log(response.data); setResult(response.data) })
    }

    // const haveItems1 = ((hello !== null) ? Object.keys(hello.body).includes('items') : null);
    const haveItems = ((result !== null) ? Object.keys(result.I2790).includes('row') : null);
    return (
        <Container>
            <h2>?????? ??????</h2>


            {/* <form action='api/putDiet' onSubmit={handleSubmitKeyword}>
                ????????? : <input name="keyword" type="text" value={search} onChange={handleChange}></input>
                <button type='submit'>??????</button>
            </form>
            {(hello !== null && haveItems1) ? hello.body.items.map((item, index) => (
                <div key={index} style={{ display: 'flex' }}>
                    <p>{item.DESC_KOR}</p>
                    <p>{item.NUTR_CONT1}</p>
                </div>
            )) : "?????? ????????? ????????????."} */}

            <SearchBox action='api/getFood' onSubmit={handleSubmitKeywordFood}>
                <input name="keyword" type="text" placeholder='?????? ??????' value={search} onChange={handleChange}></input>
                <button type='submit'>??????</button>
            </SearchBox>
            <ResultBox>
                {(result !== null && haveItems) ? result.I2790.row.map((item, index) => (
                    <ItemBox  key={index}>
                        <h4>{item.DESC_KOR}</h4>
                        <p>????????? : {item.NUTR_CONT1}kcal</p>
                        <p>???????????? : {item.NUTR_CONT2}g </p>
                        <p>????????? : {item.NUTR_CONT3}g</p>
                        <p>?????? : {item.NUTR_CONT4}g</p>
                        <p>?????? : {item.NUTR_CONT5}g</p>
                        <p>????????? : {item.NUTR_CONT6}mg</p>
                        <p>???????????? : {item.SERVING_SIZE}g</p>
                    </ItemBox>
                //     <div style={{ display: 'flex' }}>
                //     <p>{item.MAKER_NAME}</p>
                //     <p>{item.DESC_KOR}</p>
                //     <p>{item.SERVING_SIZE}g ???</p>
                //     <p>{item.NUTR_CONT1}kcal</p>
                //     <p>????????????:{item.RESEARCH_YEAR}???</p>
                // </div>
                )) : "?????? ????????? ????????????."}
            </ResultBox>
        </Container>
    )
}

export default SearchCon