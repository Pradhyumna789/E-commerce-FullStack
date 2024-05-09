import { useState } from "react"
import ProductCard from "../components/ProductCard"


const Search = () => {

  const [search,setSearch] = useState("")
  const [sort,setSort] = useState("")
  const [maxPrice,setMaxPrice] = useState(100000)
  const [category,setCategory] = useState("")
  const [page,setPage] = useState(1)

  const addToCartHandler = ()=> {
  
  }

  const isNextPage = page < 4;
  const isPrevPage = page > 1 ; //currently 4 is max page

  return (
    <div className="product-search-page"> 
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={e => setSort(e.target.value)}>

            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>

          </select>
        </div>

        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input type="range" min={100} max={100000} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} />
        </div>

        <div>
          <h4>Category</h4>
          <select value={category} onChange={e => setCategory(e.target.value)}>

            <option value="">All</option>
            <option value="">sample1</option>
            <option value="">sample2</option>

          </select>
        </div>

      </aside>
      <main>
        <h1>Products</h1>
        <input type="text" placeholder="Search by name..." value={search} onChange={e => setSearch(e.target.value)} />

        <div className="search-product-list">
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

        <ProductCard
          productId="daasdasdasd"
          name="book"
          price={300}
          stock={20}
          photo="https://m.media-amazon.com/images/I/81zWLzJMyXL._AC_UY327_FMwebp_QL65_.jpg"
          handler={addToCartHandler}
        />

        <ProductCard
          productId="daasdasdasd"
          name="book"
          price={250}
          stock={20}
          photo="https://m.media-amazon.com/images/I/716vqHaa8mL._AC_UY327_FMwebp_QL65_.jpg"
          handler={addToCartHandler}
        />

        <ProductCard
          productId="daasdasdasd"
          name="book"
          price={30000}
          stock={20}
          photo="https://m.media-amazon.com/images/I/61V2IPfjMEL._AC_UL480_FMwebp_QL65_.jpg"
          handler={addToCartHandler}
        /> 
        </div>
        <article>
          <button 
            onClick={()=>setPage(prev=>prev-1)}
            disabled={!isPrevPage}
          >
            Prev
          </button>
          <span>{page} of {4}</span>
          <button 
            onClick={()=>setPage(prev=>prev+1)}
            disabled={!isNextPage}
          >
            Next
          </button>
        </article>

      </main>
    </div>
  )
}

export default Search