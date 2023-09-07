
import CartIcon from '../Cart/CartIcon'
import Button from 'react-bootstrap/Button';
import CartContext from '../store/cart-context';
import { useContext } from "react";


const HeaderCartButton=(props)=>{

    const ctx=useContext(CartContext);
    const total=ctx.items.length;

return (
<Button variant="dark" className="border border-primary"  onClick={props.onClick}>

<span> Your Cart</span>
<span>{total}</span>

</Button>



    )


}
export default HeaderCartButton