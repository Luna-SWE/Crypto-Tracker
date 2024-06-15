import { useParams } from 'react-router-dom'

interface RouteParams {
    coinId:string;
}

export function Coin(){
    const {coinId} = useParams<RouteParams>()

    return <h1>Coin: {coinId}</h1>
}