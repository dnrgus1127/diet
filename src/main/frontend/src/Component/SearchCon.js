import React, { useState } from 'react';
import axios from 'axios';

const SearchCon = () => {

    const [hello, setHello] = useState(null)
    const [search, setSearch] = useState("라면");

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
    //             keyword: "바나나칩",
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
            .then(response => { console.log(response.data); setHello(response.data) })
    }

    // const haveItems = ((hello !== null) ? Object.keys(hello.body).includes('items') : null);
    const haveItems = ((hello !== null)? Object.keys(hello.I2790).includes('row') : null);
    return (
        <div>
            {/* <form action='api/putDiet' onSubmit={handleSubmitKeyword}>
                검색어 : <input name="keyword" type="text" value={search} onChange={handleChange}></input>
                <button type='submit'>검색</button>
            </form>
            {(hello !== null && haveItems) ? hello.body.items.map((item, index) => (
                <div key={index} style={{ display: 'flex' }}>
                    <p>{item.DESC_KOR}</p>
                    <p>{item.NUTR_CONT1}</p>
                </div>
            )) : "검색 결과가 없습니다."} */}

            <form action='api/getFood' onSubmit={handleSubmitKeywordFood}>
                Food검색어 : <input name="keyword" type="text" value={search} onChange={handleChange}></input>
                <button type='submit'>검색</button>
            </form>
            {(hello !== null && haveItems) ? hello.I2790.row.map((item, index) => (
                <div key={index} style={{ display: 'flex' }}>
                    <p>{item.DESC_KOR}</p>
                    <p>{item.NUTR_CONT1}</p>
                </div>
            )) : "검색 결과가 없습니다."}
        </div>
    )
}

export default SearchCon