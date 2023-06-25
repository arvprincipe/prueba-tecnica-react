import Skeleton from 'react-loading-skeleton'
import { StyledGrid, StyledGridContainer, StyledGridItem } from './StyledUI/StyledProduct'

export default function SkeletonProductList() {
  return (
    <StyledGridContainer>
      <StyledGrid>
        {Array.from(new Array(12).keys()).map((_, index) => (
          <StyledGridItem key={index}>
            <Skeleton width={200} height={250} />
          </StyledGridItem>
        ))}
      </StyledGrid>
    </StyledGridContainer>
  )
}