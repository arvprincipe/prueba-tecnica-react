import {
  StyledSearchBar,
  StyledSearchButton,
  StyledSearchInput,
} from "./StyledUI/StyledProduct";

type Props = {
  setTerm: (term: string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  term: string;
};

function SearchBar({ handleChange, handleSubmit, term }: Props) {
  return (
    <StyledSearchBar>
      <form onSubmit={handleSubmit}>
        <StyledSearchInput
          type="text"
          placeholder="buscar..."
          value={term}
          onChange={handleChange}
        />
        <StyledSearchButton type="submit">Buscar</StyledSearchButton>
      </form>
    </StyledSearchBar>
  );
}

export default SearchBar;
