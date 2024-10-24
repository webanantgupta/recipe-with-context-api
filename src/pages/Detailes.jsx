import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Detailes = () => {
  let location = useLocation();
  console.log(location.state.recipe);
  let data = location.state.recipe;
  return (
    <div className='max-w-[1320px] bg-slate-400 mx-auto h-screen grid grid-cols-12 p-5'>
      <div className='col-span-6 mx-auto  p-5 '>
        <img className='rounded-xl shadow-2xl' src={data.image} alt="" />


        <div className='my-10'>
          <h3 className='text-center text-2xl font-semibold m-5 '>Ingredients</h3>
          <ul className='mx-5 my-5'>
            <li>{data.ingredientLines[0]}</li>
            <li>{data.ingredientLines[1]}</li>
            <li>{data.ingredientLines[2]}</li>
          </ul>
        </div>

        <div>
          <Link to={data.url} className=' w-full bg-indigo-300 p-3 my-10 rounded-xl hover:bg-indigo-600 hover:text-white transition duration-200 shadow-2xl'>How to make</Link>
        </div>

      </div>
      <div className='col-span-6 '>
        <h2 className='text-center text-3xl font-semibold'>{data.label}</h2> 
        <h2 className='text-center mx-6 text-2xl font-medium'>Meal Type -  {data.mealType}</h2>
        <h2 className='text-center mx-6 text-2xl font-medium'>Cuisine Type - {data.cuisineType}</h2>
        <h3 className='mx-6 text-2xl font-medium text-center'>Total Nutrients</h3><br />
        <div>
          <ol className='bg-slate-400 hover:bg-slate-600 hover:text-white p-5 transition duration-200 rounded-xl'>
            <li className='px-5 text-xl'>{data.totalNutrients.CA.label}  </li>
            <p className='px-5'>quantity - {Math.ceil(data.totalNutrients.CA.quantity)} {data.totalNutrients.CA.unit}</p>
            <li className='px-5 text-xl'>{data.totalNutrients.CHOCDF.label} </li>
            <p className='px-5'>quantity - {Math.ceil(data.totalNutrients.CHOCDF.quantity)} {data.totalNutrients.CHOCDF.unit}</p>
            <li className='px-5 text-xl'>{data.totalNutrients.ENERC_KCAL.label} </li>
            <p className='px-5'>quantity - {Math.ceil(data.totalNutrients.ENERC_KCAL.quantity)} {data.totalNutrients.ENERC_KCAL.unit}</p>
            <li className='px-5 text-xl'>{data.totalNutrients.FAT.label} </li>
            <p className='px-5'>quantity - {Math.ceil(data.totalNutrients.FAT.quantity)} {data.totalNutrients.FAT.unit}</p>
            <li className='px-5 text-xl'>{data.totalNutrients.PROCNT.label} </li>
            <p className='px-5'>quantity - {Math.ceil(data.totalNutrients.PROCNT.quantity)} {data.totalNutrients.PROCNT.unit}</p>

            <li className='px-5 text-xl'>{data.totalNutrients.ZN.label} </li>
            <p className='px-5'>quantity - {Math.ceil(data.totalNutrients.ZN.quantity)} {data.totalNutrients.ZN.unit}</p>
            <li className='px-5 text-xl'>{data.totalNutrients.K.label} </li>
            <p className='px-5'>quantity - {Math.ceil(data.totalNutrients.K.quantity)} {data.totalNutrients.K.unit}</p>
            <li className='px-5 text-xl'>{data.totalNutrients.MG.label} </li>
            <p className='px-5'>quantity - {Math.ceil(data.totalNutrients.MG.quantity)} {data.totalNutrients.MG.unit}</p>
          </ol>
        </div>





      </div>
    </div>
  )
}

export default Detailes
