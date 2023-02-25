import { condenseAddress } from "../../libs/helpers"

interface props {
    place: string,
    kilobytes: string,
    address: string
}
function LeaderBoardEntry({ place, kilobytes, address }: props) {
    return (
        <div className='flex justify-between font-plex text-md my-4' >

            <div className='flex'>
                <h1 className='mr-2 opacity-70'># {place}</h1>
                <h1>{condenseAddress(address)}</h1>
            </div>

            <h2 className='opacity-70'>{kilobytes} KB</h2>
        </div>
    )
}
export default LeaderBoardEntry 