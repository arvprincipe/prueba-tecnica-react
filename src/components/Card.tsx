import { Product } from "../hooks/product.interface";
import { StyledCard, StyledProductImage, StyledProductPrice, StyledProductTitle } from "./StyledUI/StyledProduct";

type CardProps = {
  product: Product;
};

function Card({ product }: CardProps) {
  const { thumbnail, title, price } = product;

  return (
    <StyledCard className="card">
      <div className="card-header">
        <StyledProductImage src={thumbnail} alt={title} />
      </div>

      <div className="card-body">
        <StyledProductTitle>{title}</StyledProductTitle>
        <StyledProductPrice>${price}</StyledProductPrice>
      </div>
    </StyledCard>
  )
}

export default Card;