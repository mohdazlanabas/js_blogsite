import Link from 'next/link'
import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <header>
      <div className='head-container'>
      <Marquee className="marque">
      Your time is limited, so do not waste it living someone else life. Do not be trapped by dogma, which is living with the results of what other people are thinking
      </Marquee>
      </div>
    </header>
  )
}