// implement AddMovie component here
import React, { Component } from 'react'

export default class AddMovie extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action'
  //   }
  // }


  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label> subtítulo
            <input />
          </label>

          <label> título
            <input />
          </label>

          <label> caminho da imagem
            <input />
          </label>

          <label> sinopse
            <input />
          </label>

          <label> avaliação
            <input />
          </label>

          <label> gênero
            <input />
          </label>
        </form>
      </div>
    )
  }
}
