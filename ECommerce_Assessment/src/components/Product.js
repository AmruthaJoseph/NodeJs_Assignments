import React, {useState} from 'react';
import Buttons from './Buttons';
import './Product.css';

function Product() {
    const products = [
                    {
                      title:"Brown Egg", 
                      type: "dairy", 
                      description: "Raw organic brown eggs in a basket",
                      url: "https://via.placeholder.com/150x150.png?text=Product1", 
                      price: 28.1, 
                      rating: 4
                    },
                    {
                      title:"Sweet fresh stawberry", 
                      type: "fruit", 
                      description: "Sweet fresh stawberry on the wooden table",
                      url: "https://via.placeholder.com/150x150.png?text=Product2",  
                      price: 29.45, 
                      rating: 4
                    },
                    {
                      title:"Laptop", 
                      type: "electronics", 
                      description: "Dell Latitude 5410",
                      url: "https://via.placeholder.com/150x150.png?text=Product3",  
                      price: 50000, 
                      rating: 5
                    },
                    {
                      title:"Apple", 
                      type: "fruit", 
                      description: "Red apples",
                      url: "https://via.placeholder.com/150x150.png?text=Product4",  
                      price: 50, 
                      rating: 5
                    }
                    ];

    const [searchName,setsearchName] = useState("");

    const handleChange = (event) => {
      setsearchName(event.target.value);
    }

  return (
    <div>
      <h1>Product List</h1>
      <input type="text" value={searchName} onChange={handleChange} placeholder='Search product name'></input>
      <div className='main-div'>     
        {
          products
          .filter(product => product.title.toLowerCase().match(searchName.toLowerCase()))
          .map(product => (
            <div className='product_list'>
              <label className='title'> {product.title} </label>
              <br /><br />
              <img src={product.url} alt="Product" height="150px" width="250px"></img>
              <br />
              <label className='description'> {product.description} </label>
              <br /><br />
              <Buttons value='Like'></Buttons>
              <Buttons value='Share'></Buttons>
              <Buttons value='Purchase'></Buttons>
              <br />
            </div>
            ))
          }
      </div>
    </div>
  )
}

export default Product