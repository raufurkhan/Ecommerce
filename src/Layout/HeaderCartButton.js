
import CartIcon from '../Cart/CartIcon'
import Button from 'react-bootstrap/Button';



const HeaderCartButton=(props)=>{

return (
<Button variant="dark" className="border border-primary"  onClick={props.onClick}>

<span> Your Cart</span>
<span>0</span>

</Button>



    )


}
export default HeaderCartButton