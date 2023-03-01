import Link from "next/link"
import { condenseAddress } from "../../libs/helpers"

interface props {
    tokenId: string,
    kilobytes: string,
    date: string
}
function HandEntry({ tokenId, kilobytes, date }: props) {
    return (
        <Link href={`/cards/${tokenId}`}>
            <div className='flex justify-between font-plex text-md my-4' >
                <div className='flex'>
                    <h1 className='mr-4 opacity-70'># {tokenId}</h1>
                    <h1>2023-03-03</h1>
                </div>

                <h2 className='opacity-70'>{parseInt(kilobytes) / 1000} KB</h2>
            </div>
        </Link>

    )
}
export default HandEntry 