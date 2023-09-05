import  React  from "react"
import { Button, Container, Row } from "react-bootstrap"
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






const product=productsArr.map((item)=>
(
  <div key={productsArr.id}
  style={{
    margin: "0 auto",
    maxWidth: "100%",
    padding: "20px 30px",
    display: "flex",
    justifyContent: "space-around",
    
  }}>
  <div  style={{
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
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
{item.title}
</h3>


<div
       style={{
        margin: "30px",
      }}
      >
       
          <img 
            
            src={item.imageUrl}
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
            alt={item.title}
          />
        
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
          ${item.price.toFixed(2)}
        </span>
        <Button
          variant="info"
          className="btn-sm"
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
)

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