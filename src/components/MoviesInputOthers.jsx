import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MoviesInputOthers extends Component {
  render() {
    const { storylineValue, ratingValue, genreValue, onchange } = this.props;

    return (
      <>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
        </label>
        <textarea
          id="storyline"
          name="storyline"
          value={ storylineValue }
          data-testid="storyline-input"
          onChange={ onchange }
        />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
        </label>
        <input
          name="rating"
          type="number"
          value={ ratingValue }
          data-testid="rating-input"
          onChange={ onchange }
        />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
        </label>
        <select
          name="genre"
          value={ genreValue }
          onChange={ onchange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">
            Ação
          </option>
          <option value="comedy" data-testid="genre-option">
            Comédia
          </option>
          <option value="thriller" data-testid="genre-option">
            Suspense
          </option>
        </select>
      </>
    );
  }
}

MoviesInputOthers.propTypes = {
  storylineValue: PropTypes.string.isRequired,
  ratingValue: PropTypes.number.isRequired,
  genreValue: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};