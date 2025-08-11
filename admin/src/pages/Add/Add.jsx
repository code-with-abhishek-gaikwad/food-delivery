import React from 'react'
import './Add.css'
import { useState } from 'react'
export const Add = () => {

     const [image,setImage]= useState(false)
  return (
    <div classname='add'>
     <form action="" className="flex-col">
        <div className="add-img-upload flex-col">
            <p>upload Image</p>
            <label htmlFor='image'>
               <img src={ image?URL.createObjectURL:assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
            <p>Product name</p>
            <input type="text" name='name' placeholder='type here' />
        </div>

        <div className="add-product-description flex-col">
            <p>Product description</p>
            <textarea name="description" rows="6" placeholder='write content here'></textarea>
        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Product category</p>
                <select name="category" >
                    <option value="salad"></option>
                     <option value="Rolls"></option>
                      <option value="Deserts"></option>
                       <option value="Sandwich"></option>
                        <option value="cake"></option>
                         <option value="Pure veg"></option>
                         <option value="Pasta"></option>
                          <option value="Noodles"></option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>product price</p>
                <input type="Number" name="price" placeholder='$20' />
            </div>
        </div>

        <button type='submit' className='add-btn'>ADD</button>
     </form>
    </div>
  )
}
