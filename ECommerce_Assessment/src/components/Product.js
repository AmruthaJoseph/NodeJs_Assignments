import React, {useState} from 'react';
import Buttons from './Buttons';
import './Product.css';

function Product() {
    const products = [
                    {
                      title:"Brown Egg", 
                      type: "dairy", 
                      description: "Raw organic brown eggs in a basket",
                      url: "https://s3.amazonaws.com/images.ecwid.com/images/26273031/1370821191.jpg", 
                      price: 28.1, 
                      rating: 4
                    },
                    {
                      title:"Sweet fresh stawberry", 
                      type: "fruit", 
                      description: "Sweet fresh stawberry on the wooden table",
                      url: "https://cgreenag.com/assets/images/crop-images/strawberry/Strawberrieswithleaves..png",
                      price: 29.45, 
                      rating: 4
                    },
                    {
                      title:"Laptop", 
                      type: "electronics", 
                      description: "Dell Latitude 5410",
                      url: "https://i5.walmartimages.com/asr/9555580b-d38c-4d19-88b0-61991bf6c33f_1.7fc8d4fa1fa63c94dee13b67aae2e856.jpeg",
                      price: 50000, 
                      rating: 5
                    },
                    {
                      title:"Laptop", 
                      type: "electronics", 
                      description: "Lenovo ultra slim thinkpad",
                      url: "https://allthingsd.com/files/2012/08/U510_hero_04.jpg",
                      price: 45000, 
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
              <img src={product.url} alt="Product" height="250px" width="250px"></img>
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