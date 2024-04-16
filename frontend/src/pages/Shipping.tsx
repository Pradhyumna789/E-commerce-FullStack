import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {

  const navigate = useNavigate()

  const [shippingInfo, setShippingInfo] = useState({
      address: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
  });

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    setShippingInfo(prev =>({...prev,[e.target.name]: e.target.value}) )
  }

  return (
    <div className="shipping">
        <button className="back-btn" onClick={()=>navigate('/cart')}>
            <BiArrowBack/>
        </button>

        <form>
            <h1>Shipping Address</h1>

            <input type="text" 
                placeholder="Address"
                name="address"
                value={shippingInfo.address}
                onChange={(e)=>changeHandler(e)}
            />

            <input type="text" 
                placeholder="City"
                name="city"
                value={shippingInfo.city}
                onChange={(e)=>changeHandler(e)}
            />

            <input type="text" 
                placeholder="State"
                name="state"
                value={shippingInfo.state}
                onChange={(e)=>changeHandler(e)}
            />

            <select name="country" 
                required
                value={shippingInfo.country}
                onChange={(e)=>changeHandler(e)}
            > 
                <option value="">Choose Country</option>
                <option value="india">India</option>

            </select>


            <input type="number" 
                placeholder="Pin Code"
                name="pinCode"
                value={shippingInfo.pinCode}
                onChange={(e)=>changeHandler(e)}
            />

            <button type="submit">Pay Now</button>
        </form>
    </div>
  )
}

export default Shipping