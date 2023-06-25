import { useCallback, useEffect, useState } from "react"
import { Product } from "./product.interface"
import { fetchProductsAPI } from "../services/product.service"

type UseProductsProps = {
  search: string
}
export function useProducts({ search }: UseProductsProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  const fetchProducts = useCallback(async (search: string) => {
    try {
      setLoading(true)
      const products = await fetchProductsAPI(search)
      setProducts(products)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProducts("")
  }, [])

  return {
    products,
    loading,
    fetchProducts
  }
}

