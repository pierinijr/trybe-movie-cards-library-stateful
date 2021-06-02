import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="textarea"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
          name="storyline"
        />
      </label>
    );
  }
}
export default InputStoryline;

InputStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};