import React from "react";

class PersonData extends React.Component {
    render() {
        const { name, email, dob } = this.props;
        return (
            <div>
                <h1> { name.first } </h1>
                <p> { email }</p>
                <p> { dob.age }</p>
            </div>        
            )
    }
}

export default PersonData;