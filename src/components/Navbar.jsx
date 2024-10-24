import React, { useContext, useRef} from 'react'
import { Link } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext'

const Navbar = () => {
let nameRef = useRef();
let ctx = useContext(GlobalContext)
console.log(ctx);
 

function handleClick(){
   let value = nameRef.current.value;
   console.log(value);
   ctx.setParam(value);
}




  return (
    <div className='h-20 sticky top-0 z-50 '>
      <div className=' bg-orange-200 h-20 w-full flex items-center justify-between rounded-lg p-4'>
       <div className='flex justify-center items-center gap-2'> 
        <img height={50} width={50} src="https://r2.erweima.ai/imgcompressed/compressed_e437676707964e474f44c06e5ce6c160.webp" alt="Recipe" />
       <Link to='/'><h1>RECIPE PARADISE</h1></Link>
       </div>
        <div><input className='rounded-xl p-2 shadow-xl px-10' type="text" placeholder='search here...' ref={nameRef}/> <button     onClick={handleClick} className='bg-indigo-300 p-2 rounded-2xl shadow-xl hover:text-white hover:bg-indigo-500 transition-colors duration-300 px-10'>Enter</button></div>
        <div >
          <ul className='flex justify-center items-center gap-4'>
          <Link className='bg-indigo-300 p-2 rounded-2xl shadow-xl hover:text-white hover:bg-indigo-500 transition-colors duration-300 px-5' to='/'>Home</Link>
          <Link className='bg-indigo-300 p-2 rounded-2xl shadow-xl hover:text-white hover:bg-indigo-500 transition-colors duration-300 px-5' to='/fav'>Favourite</Link>
          </ul>
          </div>

      </div>
    </div>
  )
}

export default Navbar
