import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const {
      rating,
      handleChange,
    } = this.props;

    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="ratingNewMovieId">
          <span>Avaliação</span>

          <input
            id="ratingNewMovieId"
            type="number"
            name="rating"
            value={ rating }
            onChange={ handleChange }
            data-testid="rating-input"
          />

        </label>
      </div>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingInput;