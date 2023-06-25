import styled from 'styled-components';

export const StyledGridContainer = styled.div`
  width: 100%;
`

export const StyledCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;

  .card-header{
    width: 100%;
    min-height: 150px;
    max-height: 250px;
    height: 250px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  .card-body{
    width: 100%;
    padding: 0px 10px;
  }
`
export const StyledGrid = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns:  repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px 10px;
  padding: 0px;
`
export const StyledGridItem = styled.li``
export const StyledProductImage = styled.img`
   width: 100%;
  height: 100%;
  object-fit: cover;
`
export const StyledProductTitle = styled.h3``
export const StyledProductPrice = styled.p``
export const StyledProductContainer = styled.div``

export const StyledSearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  background-color: #ccc;
  gap: 10px;
  form{
    display: flex;
    gap: 10px;
  }
`

export const StyledSearchInput = styled.input`
padding: 10px;
border-radius: 6px;
`
export const StyledSearchButton = styled.button`
  color: white;
`

export const StyledSkeleton = styled.div`
  ${({ theme }) => {
    console.log(theme)
    return ''
  }};
`