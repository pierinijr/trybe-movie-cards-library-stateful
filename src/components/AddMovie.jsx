// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: '0',
      genre: 'action',
    };
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            id="title"
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.changeTitle }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            type="text"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.changeTitle }
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            id="image"
            type="text"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.changeTitle }
          />
        </label>
        <label htmlFor="textArea" data-testid="storyline-input-label">
          Sinopse
          <textarea 
            name="storyLine" 
            id="textArea"
            value={storyLine} 
            data-testid="storyline-input"
            cols="30" 
            rows="10">
          </textarea>
         
        </label>
        <p>{subtitle}</p>
        <p>{title}</p>
        <p>{imagePath}</p>
        <p>{storyLine}</p>
        <p>{rating}</p>
        <p>{genre}</p>
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};
 */
export default AddMovie;
