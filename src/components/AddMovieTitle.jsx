import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends Component {
  render() {
    const { value, handleInputs } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          name="title"
          value={ value }
          onChange={ handleInputs }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default AddMovieTitle;
