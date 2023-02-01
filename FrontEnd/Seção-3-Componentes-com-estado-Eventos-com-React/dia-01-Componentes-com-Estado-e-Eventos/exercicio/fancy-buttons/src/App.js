import React from "react"
import './App.css';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      botao1: 0,
      botao2: 0,
      botao3:0
    };
    this.clicaAqui = this.clicaAqui.bind(this);
    this.noClick = this.noClick.bind(this);
    this.clickMaybe = this.clickMaybe.bind(this);
  }
  clicaAqui() {
    console.log(this.getColorBtn(this.state.botao1));
    this.setState((estadoAnterior, _props) => ({
      botao1: estadoAnterior.botao1 + 1,
    }))
    
  }
  noClick () {
    this.setState((estadoAnterior, _props) => ({
      botao2: estadoAnterior.botao2 + 1,
    }))
    console.log(this.getColorBtn(this.state.botao2));
  }
  clickMaybe () {
    this.setState((estadoAnterior, _props) => ({
      botao3: estadoAnterior.botao3 + 1,
    }))
    console.log(this.getColorBtn(this.state.botao3));
  }
  getColorBtn (num) {
    if(num % 2 === 0) {
      return 'green'
    } else {
      return 'white'
    }
  }
  
  render() {
  const {botao1, botao2, botao3} = this.state;
  return (
    <>
       <h1>Faça sua escolha.</h1>
       <button onClick={this.clicaAqui} style={ { background: this.getColorBtn(botao1)} }>{ botao1 }</button>
       <button onClick={this.noClick} style={ { background: this.getColorBtn(botao2)} }>{ botao2 }</button>
       <button onClick={this.clickMaybe} style={ { background: this.getColorBtn(botao3)} }>{ botao3 }</button>
    </>

  );
  }
}

export default App;
