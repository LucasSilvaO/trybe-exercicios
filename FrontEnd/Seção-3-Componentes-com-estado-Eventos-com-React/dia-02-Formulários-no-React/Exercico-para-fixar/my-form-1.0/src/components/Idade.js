import React from 'react';

class Idade extends React.Component {

   render() {
    const { valor, handleChange } = this.props;
    return (
        <>
         <br />
            <label>Qual sua idade?
            <input name='age' value={ valor } onChange={ handleChange } />
            </label>
         <br />
        </>
    )
    }
}

export default Idade;