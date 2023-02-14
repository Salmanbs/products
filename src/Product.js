// import logo from './logo.svg';
import './Product.css';
import data from "./products.json";

function Product() {
  // data.products.map(item => {console.log(item.title)})
  return (
    data.products.map(item => (
        <div key={item.id} className="card">
        <img src={item.thumbnail} alt={item.title} style={{width: "100%"}} />
        <h1>{item.title}</h1>
        <p className="price">{item.price} Rs</p>
        <p>{item.description}</p>
        <p><button>Add to Cart</button></p>
      </div>
   
    ))
  );
}

export default Product;
