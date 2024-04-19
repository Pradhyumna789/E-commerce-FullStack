import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { BiAddToQueue } from "react-icons/bi"


const Home = () => {

  const addToCartHandler = ()=>{

  }

  return (
    <div className="home">
      <section>
        
      </section>

      <h1>
        Latest Products
        <Link className="findmore" to={"/search"}>More</Link>
      </h1>
      
      <main>
        
        <ProductCard
          productId="daasdasdasd"
          name="Suit"
          price={4545}
          stock={435}
          photo="https://m.media-amazon.com/images/I/61UC7Vh6UTL._AC_UL480_FMwebp_QL65_.jpg"
          handler={addToCartHandler}
        />

        <ProductCard
          productId="daasdasdasd"
          name="MacBook"
          price={4545}
          stock={435}
          photo="https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg"
          handler={addToCartHandler}
        />
      </main>
    </div>

    
  )
}

export default Home