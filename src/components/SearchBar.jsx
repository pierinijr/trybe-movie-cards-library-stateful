import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form
        data-testid="search-bar-form"
        searchText={ searchText }
        onSearchTextChange={ onSearchTextChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ onBookmarkedChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ onSelectedGenreChange }
      >
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            id="searchText"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            id="bookmarkedOnly"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="selectedGenre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            id="selectedGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
