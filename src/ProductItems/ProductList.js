import  React  from "react"
import { Button, Container, Row } from "react-bootstrap"
import ProductDisplay from "./ProductDisplay"
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

const ProductList=()=>{

const product=productsArr.map((item,index)=>
{
  return(
  
  <ProductDisplay 
  id={index}
  key={index}
  title={item.title}
  price={item.price}
  imageUrl={item.imageUrl}>

  </ProductDisplay>
)})

return (
  <React.Fragment>
    <h1
      style={{
        fontFamily: "metal mania",
        textAlign: "center",
        padding: "20px",
        fontSize: "30px",
        fontWeight: "bold",
      }}
    >MUSIC</h1>
    <div>{product}</div>
    
  </React.Fragment>
);
        }

export default ProductList