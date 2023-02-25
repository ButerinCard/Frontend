import React, { useEffect, useState } from 'react'
import LeaderBoardEntry from './LeaderBoardEntry'
import { TopMinersDocument, execute, GetHandDocument } from '../../.graphclient'
import useWeb3Provider from '../../libs/hooks/web3'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
interface Miner {
  id: string,
  kiloBytes: string
}
interface Hand {
  id: string,
  miner: string
}

enum LeaderBoardType {
  miners = 0,
  hand = 1
}


export default function Miners() {
  const {  address } = useWeb3Provider()
  const [type, setType] = useState<LeaderBoardType>(LeaderBoardType.miners)
  const [miners, setMiners] = useState<Miner[]>([]);
  const [hand, setHand] = useState<Hand[]>([])
  useEffect(() => {
    execute(TopMinersDocument, {}).then((r) => {
      setMiners(r.data.miners);
    })
    if (address) {
      const APIURL = 'https://api.studio.thegraph.com/query/41656/buterincardsgoerli/v0.1.5'
      const tokensQuery = `
        query($user: String) {
          cards(filter: {miners_contains: $user}) {
            id
            miner
          }
        }
      `
      const client = new ApolloClient({
        uri: APIURL,
        cache: new InMemoryCache(),
      })

      client
        .query({
          query: gql(tokensQuery),
          variables: {
            user: address
          }
        })
        .then((data) => {setHand(data.data.cards)})
        .catch((err) => {
          console.log('Error fetching data: ', err)
        })

    }
  }, [address]);

  return (
    <div className='lg:flex justify-start hidden '>
      <div>
        <div className='flex justify-around'>
          <h1 className={`${type === LeaderBoardType.miners ? '' : ' opacity-60 '} text-center font-PS2 font-semibold mb-3 select-none cursor-pointer`}
            onClick={() => setType(LeaderBoardType.miners)}>Top miners</h1>
          <h1 className={` ${type === LeaderBoardType.hand ? '' : ' opacity-60 '} text-center font-PS2 font-semibold mb-3 select-none cursor-pointer`}
            onClick={() => setType(LeaderBoardType.hand)}>Your hand</h1>
        </div>

        <div className=' py-1 px-4 rounded-md md:w-80 md:h-80   xl:w-120 xl:h-116 bg-black bg-opacity-5 shadow-lg' >
          {type === LeaderBoardType.miners && miners.map((m, i) => {
            return <LeaderBoardEntry key={i + m.id} place={(i + 1).toString()} kilobytes={m.kiloBytes} address={m.id} />
          })}
          {type === LeaderBoardType.hand && hand.map((m, i) => {
            return <LeaderBoardEntry key={i + m.id} place={(i + 1).toString()} kilobytes={m.miner} address={m.id} />
          })}
        </div>
      </div>
    </div>)
}
