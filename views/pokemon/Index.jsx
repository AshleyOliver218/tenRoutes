const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemons } = this.props;
        return (
            <div>
                <h1>pokemon Index Page</h1>
                <ul>
                    {pokemons.map((pokemon, i) => {
                        return (
                            <li>
                                The{' '}
                                <a href={`/pokemons/${i}`}>
                                    {pokemon.name}
                                </a>{' '}
                                is {pokemon.color} <br></br>
                                
                                <br />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
module.exports = Index;