import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="fixed top-0 z-40 flex h-16 w-full flex-row items-center bg-white px-2 text-black shadow-lg">
      <Image src="/../public/shit.svg" width={55} height={55} />
      <span className="blueberry px-4">My Shitty Health</span>
    </div>
  )
}
