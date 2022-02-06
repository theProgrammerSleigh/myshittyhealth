import Image from 'next/image'
import shit from './../public/shit.svg'
import hand from './../public/hand.svg'
import appstore from './../public/appstore.svg'

export default function Home() {
  return (
    <>
      {/** Desktop View */}
      <div className="mt-16 hidden min-h-screen w-full flex-col items-center justify-evenly py-2 pt-16 md:flex">
        <div className="flex h-full w-2/3 flex-col items-center justify-center px-4">
          <span className="blueberry px-4 text-center text-2xl text-black">
            Your Poop Tells Your Health Story
          </span>
          <Image src={shit} width={300} height={300} />

          <div className="mt-16 flex w-full flex-row items-center justify-center">
            <div className="mx-16 flex h-full w-full flex-col items-center justify-center rounded-lg bg-white px-4 pt-4 shadow-lg">
              <span className="blueberry mb-4 text-center text-lg text-black">
                Let Us Help Decipher It
              </span>
              <Image src={hand} width={200} height={200} />
            </div>
          </div>

          <div className="mb-16 flex w-full flex-row items-center justify-center">
            <span className="blueberry mt-8 px-4 text-center text-2xl text-black">
              In three Easy Steps You Can Rest Assured Your Shit Is Clean
            </span>
          </div>

          <div className="mx-2 flex w-full items-stretch justify-evenly">
            <div className="mx-2 flex w-full flex-1 flex-col items-center justify-center rounded-lg bg-white px-4 pt-4 shadow-lg">
              <span className="blueberry mb-4 text-center text-lg text-black ">
                Download The App
              </span>
              <Image src={appstore} width={300} height={300} />
            </div>

            <div className="mx-2 flex w-full flex-1 flex-col items-center justify-center rounded-lg bg-white px-4 pt-4 shadow-lg">
              <span className="blueberry mb-4 flex-1 text-center text-lg text-black">
                Upload Pictures Of Your Bowl Movements
              </span>
              <Image src={shit} width={180} height={180} />
            </div>

            <div className="mx-2 flex w-full flex-1 flex-col items-center justify-center rounded-lg bg-white px-4 pt-4 shadow-lg">
              <span className="blueberry mb-4 text-center text-lg text-black">
                Wait For Results
              </span>
              <Image src={hand} width={300} height={300} />
            </div>
          </div>

          <div className="mt-16 flex flex-row items-center justify-center pb-40">
            <span className="blueberry mt-8 px-4 text-center text-2xl text-black">
              Its That Easy
            </span>
          </div>
        </div>
      </div>

      {/** Mobile View */}
      <div className="mt-16 flex min-h-screen w-full flex-col items-center justify-start py-2 md:hidden">
        <div className="flex flex-row">
          <Image src={shit} width={200} height={200} />
        </div>
        <div className="flex flex-row">
          <span className="blueberry px-4 text-center text-2xl text-black">
            Your Poop Tells Your Health Story
          </span>
        </div>

        <div className="mt-16 flex w-full flex-row items-center justify-center">
          <div className="mx-16 flex h-full w-full flex-col items-center justify-center rounded-lg bg-white px-4 pt-4 shadow-lg">
            <span className="blueberry mb-4 text-center text-lg text-black">
              Let Us Help Decipher It
            </span>
            <Image src={hand} width={200} height={200} />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <span className="blueberry mt-8 px-4 text-center text-2xl text-black">
            In three Easy Steps You Can Rest Assured Your Shit Is Clean
          </span>
        </div>

        <div className="mt-16 flex w-full flex-row items-center justify-center">
          <div className="mx-16 flex h-full w-full flex-col items-center justify-center rounded-lg bg-white px-4 pt-4 shadow-lg">
            <span className="blueberry mb-4 text-center text-lg text-black">
              Download The App
            </span>
            <Image src={appstore} width={200} height={200} />
          </div>
        </div>
        <div className="mt-16 flex w-full flex-row items-center justify-center">
          <div className="mx-16 flex h-full w-full flex-col items-center justify-center rounded-lg bg-white px-4 pt-4 shadow-lg">
            <span className="blueberry mb-4 text-center text-lg text-black">
              Upload Pictures Of Your Bowl Movements
            </span>
            <Image src={shit} width={200} height={200} />
          </div>
        </div>
        <div className="mt-16 flex w-full flex-row items-center justify-center">
          <div className="mx-16 flex h-full w-full flex-col items-center justify-center rounded-lg bg-white px-4 pt-4 shadow-lg">
            <span className="blueberry mb-4 text-center text-lg text-black">
              Wait For Results
            </span>
            <Image src={hand} width={200} height={200} />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center pb-40">
          <span className="blueberry mt-8 px-4 text-center text-2xl text-black">
            Its That Easy
          </span>
        </div>
      </div>
    </>
  )
}
