import styled from 'styled-components'

const Title = styled.h1`
    color: ${(props)=>props.theme.accentColor};
`

export function Coins(){
    return <Title>Coins</Title>
}