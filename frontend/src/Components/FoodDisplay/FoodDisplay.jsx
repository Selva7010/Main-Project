import React, { useContext } from 'react'
import { Store } from '../../Context/Store'
import FoodList from '../FoodList/FoodList'


const FoodDisplay = ({category}) => {
    const {food_list} = useContext(Store)


  return (
    <div className="flex justify-center">
    <div className='food-display w-7xl mt-10' id='food-display'>
      <h1 className='text-center text-3xl font-bold'>Top Dishes Near You</h1>

      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid md:grid-cols-3 gap-5 mt-5 m-5">
      {food_list.map((item, index)=>{
        if(category==="All" || category===item.category){
            return <FoodList key={index} id={item._id} name={item.name} rating={item.rating} description={item.description} price={item.price} image={item.image} />
        }
      })}
      </div>

    </div>
    </div>
  )
}

export default FoodDisplay
