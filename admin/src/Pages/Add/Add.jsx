import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';


const Add = () => {

  const url = "https://main-project-server-6dg0.onrender.com"
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Select category",
    rating: ""
  })



  const onchangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("category", data.category)
    formData.append("price", Number(data.price))
    formData.append("rating", data.rating)
    formData.append("image", image)

    const response = await axios.post(`${url}/api/food/add`, formData)

    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Select category",
        rating: ""
      })
      setImage(false)
      toast.success(response.data.message)


    }

  }


  return (
    <div>
      <Navbar />
      <div className=''>
        <Sidebar />
        <div>
          <div className="form ">
            <ToastContainer />
            <form onSubmit={onSubmitHandler} className='flex'>
              <div className='xl:flex xl:justify-evenly w-7xl mt-5 ml-3'>
                <div className="flex justify-center">
                  <div className="image-uploading">
                  <p className='mb-2'>Upload Image</p>
                  <label htmlFor="image">
                    <img className='cursor-pointer w-80 xl:w-full xl:mt-5' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                  </label>
                  <input className='mb-2' onChange={(e) => setImage(e.target.files[0])} id='image' type="file" required />
                </div>
                </div>
                <div>
                  <div className='xl:flex xl:justify-between xl:w-xl'>
                    <div className='mr-5'>
                      <div className="product-name flex flex-col mt-2 w-90">
                        <label htmlFor="">Product Name</label>
                        <input onChange={onchangeHandler} className='border p-2 mt-2 xl:w-full w-98' type="text" name='name' value={data.name} placeholder='Type your Product' />
                      </div>
                      <div className="product-description flex flex-col mt-2">
                        <label htmlFor="">Product Description</label>
                        <textarea onChange={onchangeHandler} className='mt-2 border p-2' rows='4' name='description' value={data.description} placeholder='Write your Description'></textarea>
                      </div>
                    </div>
                    <div className="category mt-2">
                      <div className="flex flex-col">
                        <p>Product Category</p>
                        <div className="category-list mt-2">
                          <select onChange={onchangeHandler} className='w-98 xl:w-80 border p-2' name="category" value={data.category}>
                            <option value="Category">Select Category</option>
                            <option value="Veg">Veg</option>
                            <option value="Parotta">Parotta</option>
                            <option value="Biriyani">Biriyani</option>
                            <option value="Chicken">Chicken</option>
                            <option value="Fast Food">Fast Food</option>
                            <option value="Sweets">Sweets</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>

                          </select>
                        </div>
                      </div>

                      <div className='flex xl:justify-between mt-2'>
                        <div className="price flex flex-col mr-5">
                          <label htmlFor="">Product Price</label>
                          <input onChange={onchangeHandler} className='mt-2 border xl:w-40 sm:w-60 p-2' type="number" name='price' value={data.price} placeholder='0' />
                        </div>

                        <div className="rating flex flex-col">
                          <label htmlFor="">Ratings</label>
                          <input className='mt-2 border xl:w-30 w-38 p-2' type="text" name='rating' placeholder='5.0' value={data.rating} onChange={onchangeHandler} />
                        </div>
                      </div>
                      <div className="button mt-5 p-2 mb-5 ">
                        <button className='bg-black px-10 py-3 text-white w-full'>Add</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add

