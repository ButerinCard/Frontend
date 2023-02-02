
interface props {
    place: string, 
    kilobytes: string, 
    address: string
}
function LeaderBoardEntry({place, kilobytes, address}: props) {
    return (
        <div className='flex justify-between font-plex text-sm my-2' >

            <div className='flex'>
                <h1 className='mr-2 opacity-70'># {place}</h1>
                <h1>{address.slice(0, 5)}...{address.slice(28, 32)}</h1>
            </div>

            <h2 className='opacity-70'>{kilobytes} KB</h2>
        </div>
    )
}
export default LeaderBoardEntry 