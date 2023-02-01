import React from 'react';

class Name extends React.Component {

   render() {
    const { valor, handleChange } = this.props;
    return (
        <>
         <br />
            <label>Qual seu nome?
            <input name='name' value={ valor } onChange={ handleChange } />
            </label>
         <br />
        </>
    )
    }
}

export default Name;