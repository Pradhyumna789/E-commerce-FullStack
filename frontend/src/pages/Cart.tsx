import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItems from "../components/cartItems";
import { Link } from "react-router-dom";

const cartItems = [
  
  {
    productId: "asdasd",
    photo: "https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg",
    name: "Macbook",
    price: 120000,
    quantity: 2,
    stock: 10,
  }

]
const subtotal = 4000
const tax = Math.round(subtotal*0.19);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 400

const Cart = () => {

  const [couponCode, setCouponCode] = useState<string>("")
  const [isValidCoponCode, setIsValidCouponCode] = useState<boolean>(false)

  useEffect(() => {
    const id = setTimeout(() => {
      if(Math.random()>0.5){
        setIsValidCouponCode(true)
      }else setIsValidCouponCode(false)
    }, 1000);
    
    return ()=>{
      clearTimeout(id)
      setIsValidCouponCode(false)
    }

  }, [couponCode])
  

  return (
    <div className="cart">
      <main>
        
        {
          cartItems.length>0? (
            cartItems.map((i,index)=>
            <CartItems key={index} cartItem={i}/>
            )
          ):( <h1>No Items Added</h1> )
        }

      </main>
      <aside>

        <p>SubTotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>Discount: <em className="red">- ₹{discount}</em></p>
        <p><b>Total:</b> ₹{total}</p>

        <input type="text" placeholder="Coupon Code" value={couponCode} onChange={e=>setCouponCode(e.target.value)} />

        {
            couponCode && (
              couponCode && isValidCoponCode?(
                <span className="green">₹{discount} off using the {couponCode}</span> 
                ): (
                <span className="red">Invalid Code <VscError/></span>
              )
            )
        }

        {
          cartItems.length > 0 && <Link to={"/shipping"}>Checkout</Link>
        }

      </aside>
    </div>
  )
}

export default Cart