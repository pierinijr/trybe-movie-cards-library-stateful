import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelTitle extends Component {
  render() {
    const { value, change } = this.props;
    return (
      <label htmlFor="titleInput" data-testid="title-input-label">
        Título:
        <input
          name="title"
          type="text"
          value={ value }
          onChange={ change }
          data-testid="title-input"
        />
      </label>
    );
  }
}

LabelTitle.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default LabelTitle;
