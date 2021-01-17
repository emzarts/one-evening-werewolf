import React from 'react';

class CreateGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doppleganger: 0,
            werewolf: 0,
            minion: 0,
            mason: 0,
            seer: 0,
            robber: 0,
            troublemaker: 0,
            drunk: 0,
            insomniac: 0,
            hunter: 0,
            tanner: 0,
            villager: 0
        };
    }

    handleSubmit(event) {
        alert('An essay was submitted: ');
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch('', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }

    render () { 
        return (
            <div className="container">
                <h1>Create a Game</h1>
                <p>
                    Choose the configuration for your one night werewolf game.
                    Select one for each player plus three extra for the center pile
                </p>

                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li>Doppelganger <input type="number" value={this.state.doppleganger} min="0" max="1"></input> </li>
                        <li>Werewolf <input type="number" value={this.state.werewolf} min="0" max="2"></input> </li>
                        <li>Minion <input type="number" value={this.state.minion} min="0" max="1"></input> </li>
                        <li>Mason <input type="number" value={this.state.mason} min="0" max="2"></input> </li>
                        <li>Seer <input type="number" value={this.state.seer} min="0" max="1"></input> </li>
                        <li>Robber <input type="number" value={this.state.robber} min="0" max="1"></input> </li>
                        <li>Troublemaker <input type="number" value={this.state.troublemaker} min="0" max="1"></input> </li>
                        <li>Drunk <input type="number" value={this.state.drunk} min="0" max="1"></input> </li>
                        <li>Insomniac <input type="number" value={this.state.insomniac} min="0" max="1"></input> </li>
                        <li>Hunter <input type="number" value={this.state.hunter} min="0" max="1"></input> </li>
                        <li>Tanner <input type="number" value={this.state.tanner} min="0" max="1"></input> </li>
                        <li>Villager <input type="number" value={this.state.villager} min="0" max="3"></input> </li>
                    </ul>
                    <input type="submit" value="Start Game" />
                </form>
                
            </div>
        )
    }
}

export default CreateGame;