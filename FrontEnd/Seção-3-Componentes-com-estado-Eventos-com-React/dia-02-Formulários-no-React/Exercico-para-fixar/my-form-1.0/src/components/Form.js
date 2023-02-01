import React from 'react';
import Idade from './Idade';
import Name from './Name';

class Form extends React.Component {
  state = {
    name: '',
    age: '',
    text: '',
    checkbox: '',
    formularioComErros: true,
  }

  handleError = () => {
    const { name, age, checkbox } = this.state;

    // Criamos um array com os dados obrigatórios.
    // Note que estamos usando a propriedade length.
    // Caso o length seja 0, então !campo.length será
    // true
    const errorCases = [
      !name.length,
      !age.length,
      !checkbox,
    ];

    // Caso haja algum campo que não seja true,
    // formularioPreenchido estará como false
    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      // Armazenamos o valor inverso no nosso estado
      // para sabermos se o formulário possui erros
      formularioComErros: !formularioPreenchido,
    });
  }
  handleChange = ({target}) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
      formularioComErros: false,
    }, this.handleError);
  }
  render() {
    return (
      <>
      <h1>Formulário</h1>
        <form>
            <label>
              Selecione uma Opção:
            <select>
              <option>Opção 1</option>
              <option>Opção 2</option>
              <option>Opção 3</option>
            </select>
            </label>
           <Name valor={this.state.name} handleChange={this.handleChange} />
           <Idade valor={this.state.age} handleChange={this.handleChange} />
            <p>Me fale um pouco sobre você;</p>
            <textarea rows= '4'name='text' value={ this.state.value } onChange={ this.handleChange }></textarea>
            <br />
            <label>
            <input type='checkbox' name='checkbox' value={ this.state.value } onChange={ this.handleChange }/>Concordo com os termos.
            <br/>
            </label>
            {this.state.formularioComErros ? (<span>Preencha todos os campos!</span>) : (<span style={{ color: 'green' }}>Todos campos foram preenchidos</span>)
            }
        </form> 
        </>     )
  }
}

export default Form;
