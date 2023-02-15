// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './Product.css';
// import data from "./products.json";
import axios from 'axios';


function ProductList() {

  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  let url = 'https://dummyjson.com/products'

  const handleInput = (event) => {
    setSearchQuery(event.target.value)
  }

  const filteredProducts = products.filter((product) => {
    // console.log(product.title, searchQuery);
    return product.title.toLowerCase().includes(searchQuery.toLowerCase())
  })


  async function fetchProducts() {
    try {
      const response = await axios.get(url);
      console.log(response.data.products, 'response')
      setProducts(response.data.products)
    }
    catch (e) {
      alert('Error, fetching api ')
    }

  }


  useEffect(() => {
    fetchProducts()
  }, []);

  // // data.products.map(item => {console.log(item.title)})
  // console.log("length", products.length)
  // console.log("filter", filteredProducts)
  if (products.length > 0) {
    return (
      <div>
        <div className='search-container'>
          <input
          className='search'
            placeholder='Seach by title'
            type='text'
            value={searchQuery}
            onChange={handleInput}
          >

          </input>
        </div>
        {filteredProducts.map(({ id, thumbnail, title, price, description }) => (
          <div key={id} className="card">
            <img src={thumbnail} alt={title} style={{ width: "100%" }} />
            <h1>{title}</h1>
            <p className="price">{price} Rs</p>
            <p>{description}</p>
            <p><button>Add to Cart</button></p>
          </div>
        ))}
      </div>
    );
  }
  else {
    return (
      
   <div class="loader">
    <p>Loading</p>
   </div>
    
    )
  }

}

export default ProductList;
