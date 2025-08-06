import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black h-screen flex flex-row items-center justify-center'>
        <div className='w-1/2 h-3/4 mt-8 flex flex-col justify-center items-center bg-white/40 border border-white rounded-xl'>
          <h1 className='font-serif font-bold text-4xl'>Token Launchpad</h1>
          <div className='flex flex-col m-10 bg-black/90 w-1/2 p-8 rounded-xl border border-white'>
            <input className='my-4 h-10 p-4 bg-black/70 border border-white rounded-xl text-white' type="text" placeholder='Token Name' />
            <input className='my-4 h-10 p-4 bg-black/70 border border-white rounded-xl text-white' type="text" placeholder='Symbol' />
            <input className='my-4 h-10 p-4 bg-black/70 border border-white rounded-xl text-white' type="text" placeholder='Image URL' />
            <input className='my-4 h-10 p-4 bg-black/70 border border-white rounded-xl text-white' type="text" placeholder='Initial Supply' />
          </div>
          <button className='bg-black/90 h-10 w-40 rounded-xl text-white/80 border border-white hover:scale-105'>Create Token</button>

        </div>
      </div>
    </>
  )
}

export default App
