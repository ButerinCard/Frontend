import Image from 'next/image'
import { useRouter } from 'next/router';


export default function Home() {
const router = useRouter(); 
const {slug} = router.query; 
  return (
    <div>
        <h1>Card {slug}</h1>
    </div>
  )
}


