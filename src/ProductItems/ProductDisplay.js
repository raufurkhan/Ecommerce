import { Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";


const ProductDisplay=(props)=>{
console.log("contet uing file updating")
    const ctx=useContext(CartContext);
    const item={
        id:props.id,
        title:props.title,
        imageUrl:props.imageUrl,
        price:props.price
    }
    const addToCartHandler = (e) =>{
        e.preventDefault();
        ctx.addItem(item);
    }

return(


    <div
    style={{
      margin: "0 auto",
      maxWidth: "10%",
      padding: "20px 30px",
      display: "flex",
      justifyContent: "space-around",
    }}>
    <div  style={{
       display: "flex",
       flexWrap: "wrap",
       flexDirection: "column",
      
  
  
  
    }}>
      
  <h3 
  
  style={{
    display: "block",
    width: "100%",
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "15px",
  }}
  >
  {props.title}
  </h3>
  
  
  <div
         style={{
          margin: "30px",
        }}
        >
         <Link to={`/products/${props.title}`}>
            <img 
              
              src={props.imageUrl}
              style={{
                transformOrigin: "center",
                objectFit: "cover",
                padding: "0px",
                margin: "0px",
                transition: "ease-in 0.5s",
                filter: "brightness(100%)",
                height: "250px",
                width: "250px",
              }}
              alt={props.title}
            />
          </Link>
        </div>
  
        <div     style={{
              margin: "30px",
              alignItems: "center",
              justifyContent: "space-between",
              background: "white",
              width: "80%",
              display: "flex",
            }}>
          <span>
            ${props.price.toFixed(2)}
          </span>
          <Button
            variant="info"
            className="btn-sm"
            onClick={addToCartHandler}
            style={{
              cursor: "pointer",
              padding: "8px",
              border: "none",
              fontSize: "15px",
              fontWeight: "bold",
              background: "#56ccf2",
            }}
          >
            ADD TO CART
          </Button>
        </div>
        
        </div>
        </div>




)





}
export default ProductDisplay;