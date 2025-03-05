import React from 'react'

const Navbar = () => {
    return (
      <div className='relative'>
      <div className='flex bg-black/70 min-w-full justify-between px-10 py-5 fixed top-0'>
          <div>
           <h1 className="text-3xl text-cyan-600 font-bold">Logo</h1> 
          </div>
          <div>
          <ul className='list-none flex gap-4 text-[1.2rem]'>
              <li className=' hover:text-cyan-400 cursor-pointer'>Home</li>
              <li className=' hover:text-cyan-400 cursor-pointer'>About</li>
              <li className=' hover:text-cyan-400 cursor-pointer'>Contact</li>
          </ul>
          </div>
      </div>
      </div>
    )
  }
  

export default Navbar