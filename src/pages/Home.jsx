import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'react-router-dom';

const Home = () => {
  let ctx = useContext(GlobalContext)
  console.log(ctx);
  console.log(ctx.recipes);



  return (
    <div className='bg-slate-300'>
      <div className='max-w-[1320px] mx-auto grid grid-cols-12  gap-10 py-10 ' >
        {ctx.recipes.map((ele, index) => {
          return <div key={index} className='col-span-4 flex flex-col place-items-center rounded-2xl bg-gray-500 h-96 px-10'>
             <div className=''>
             <div><img src={ele.recipe.image} className='p-2 rounded-2xl mx-auto' alt="" /></div>
             <div className='flex items-center justify-center'>
             <div> <h2 className='font-bold text-center p-2'>{ele.recipe.label}</h2></div>
           
           <div className=''><button> <Link className='bg-indigo-300 p-2 mb-4 rounded-xl  hover:text-white hover:bg-indigo-500 transition duration-200' to='/detail' state={ele}>Detailes</Link></button></div>
             </div>
             
             </div>
            
          </div>
        })}
      </div>
    </div>
  )
}

export default Home
