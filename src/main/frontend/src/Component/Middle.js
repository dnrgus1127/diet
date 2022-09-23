import React from 'react'
import SearchCon from './SearchCon'
import styled from 'styled-components'
import Infomation from './Infomation'

const Container = styled.div`
  width: 100%;
  height: auto;
  padding : 0 32px;
  padding-top: 112px;
`

const FlexdCon = styled.div`
  display : flex;
  width: 100%;


`

const ZoneContainer = styled.div`
  height: auto;
`

const QuaterCon = styled(ZoneContainer)`
  
  width: 25%;

`
const ThreeQuaterCon = styled(ZoneContainer)`
  width: 75%;

`

const Middle = () => {
  return (
    <Container>
      <FlexdCon>
        <ThreeQuaterCon>
          <SearchCon />
        </ThreeQuaterCon>
        <QuaterCon>
          <div className='fixed'>
            <Infomation/>
          </div>
        </QuaterCon>
      </FlexdCon>
      <ThreeQuaterCon>
        <SearchCon />
      </ThreeQuaterCon>

    </Container>
  )
}

export default Middle