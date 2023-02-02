import React from 'react';


class ShowData extends React.Component {
    state = {
        person: [],
        loading: true,
    }
    requestApi = async () => {
        const request = await fetch('https://api.randomuser.me/');
        const data = await request.json();
        this.setState({
            person: data.results[0],
            loading: false,

        })

    } 

    componentDidMount() {
        this.requestApi();
    }

    shouldComponentUpdate(_nextProps, nextState) {
        if(nextState.person.dob.age < 50) {
            return true;
        }
        return false
    }

    render() {
        const { person, loading } = this.state;

        if(loading) {
            return(<div>Carregando....</div>)
        }
            return (
                <div>
                <h1>{person.name.first}</h1>
                <p>Email: {person.email}</p>
                <p>Idade: {person.dob.age}</p>
                <img src={person.picture.medium} alt="pessoa"></img>
                </div>
            )
    }
}

export default ShowData;