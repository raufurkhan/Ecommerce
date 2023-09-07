import { useContext } from "react";
import { Button,Container,Table } from "react-bootstrap";
import CartContext from "../store/cart-context";







const Cart = () => {
    
    const ctx = useContext(CartContext);
    // console.log(ctx);
    const productsArr = ctx.items;

    let totAmount = 0;
    productsArr.forEach((item) => {
        totAmount += item.price;
        console.log(item._id);
    })

    return (
        <Container>
            <div className="d-flex justify-content-between">
                <Table hover>
                    <thead>
                        <tr>
                            <th>ITEM</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>-</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsArr.map((item) => (
                            <tr key={item.title}>
                                <td className="d-flex">
                                    <img src={item.imageUrl} alt="Albums" width="50" height="50" />
                                    {item.title}
                                </td>
                                <td>${item.price}</td>
                                <td>1</td>


                                <td><button className="btn btn-danger" onClick={()=>ctx.removeItem(item.id)}>REMOVE</button></td>

                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>
            <div className="text-right">
                <strong>Total</strong>
            </div>
                <div>
                <h4><strong>${totAmount}</strong></h4>
                </div>
            

            {/* Purchase Button */}
            <div className="text-center">
                <Button variant="primary">PURCHASE</Button>
            </div>
        </Container>
    );
};

export default Cart;