import Image from 'next/image'
import logo from '../../../public/logoRick.png'

export default function TopBar() {
  return (
    <div>
      <Image
        className='rounded-md object-cover'
        height={180}
        width={180}
        src={logo}
        alt=''
      />
    </div>
  )
}
