import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'
import ProductList from './components/ProductList'
import { useProducts } from './hooks/useProducts'
import SearchBar from './components/SearchBar'
import SkeletonProductList from './components/Skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  const [term, setTerm] = useState<string>('')
  const { products, fetchProducts, loading } = useProducts({ search: term })

  const debouncedSearchTerm = useCallback(debounce((term: string) => {
    fetchProducts(term)
  }, 500), [fetchProducts])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setTerm(newQuery)
    debouncedSearchTerm(newQuery)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchProducts(term)
  }

  return (
    <div className="main">
      <SearchBar setTerm={setTerm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        term={term}
      />

      {loading ? <SkeletonProductList /> : <ProductList
        products={products}
      />}

    </div>
  )
}

export default App
