import { StyledGrid, StyledGridContainer, StyledGridItem } from './StyledUI/StyledProduct'
import Card from './Card'
import { Product } from '../hooks/product.interface';

type ProductListProps = {
  products: Product[];
};

function ProductList({ products }: ProductListProps) {
  return (
    <StyledGridContainer>
      <StyledGrid>
        {products.map((product) => (
          <StyledGridItem key={product.id} >
            <Card product={product} />
          </StyledGridItem>
        ))}
      </StyledGrid>
    </StyledGridContainer>
  );
}

export default ProductList;