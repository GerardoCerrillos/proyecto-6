import { useEffect } from "react"
import useFetch from "../../../hooks/useFetch"
import CardProduct from "../CardProduct"

const SimilarProducts = ({product}) => {

  const [ productsByCategory, getProductsByCategory ] = useFetch()

  useEffect(() => {
    if(product){
    getProductsByCategory(`/products?categoryId=${product.categoryId}`)
    }
  }, [product])
  
  const cdFilter = prod => {
    if(prod.id !== product.id){
      return prod
    }
  }

  return (
    <div>
      <h3>Similar Products</h3>
      <div>
        {
          productsByCategory?.filter(prod => cdFilter).map(prod => (
            <CardProduct
              key={prod.id}
              product={prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default SimilarProducts