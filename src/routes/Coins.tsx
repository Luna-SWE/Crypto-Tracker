import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CoinsList = styled.ul``

const Coin = styled.li`
    background-color: white;
    color: ${(props)=>props.theme.bgColor};
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        display:flex;
        align-items: center;
        padding: 20px;
        transition: color .2s ease-in;
    }
    &:hover {
        a {
            color: ${(props)=>props.theme.accentColor};
        }
    }
`

const Title = styled.h1`
    font-size: 48px;
    color: ${(props)=>props.theme.accentColor};
`

const Loader = styled.span`
    text-align: center;
    display: block;
`

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`

interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    is_new: boolean,
    rank: number,
    is_active: boolean,
    type: string,
}

export function Coins(){
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        (async () => {
            const response = await fetch('https://api.coinpaprika.com/v1/coins');
            const json = await response.json()
            setCoins(json.slice(0,100));
            setLoading(false);
        })()
    },[])

    return (
        <Container>
            <Header>
                <Title>Coin</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : <CoinsList>
                {coins.map(coin=><Coin key={coin.id}>
                    <Link to={{
                        pathname:`/${coin.id}`,
                        state: {name : coin.name},
                    }}>
                    <Img src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}/>
                    {coin.name} &rarr;</Link>
                </Coin>)}
            </CoinsList>}
        </Container>
    )
    
    
}