const React = require('react')
class Show extends React.Component {
   render () {
    const pokemon = this.props.pokemon
    return (
        <div>
        <h1> {pokemon.name} Page </h1>
          The {pokemon.name} is {pokemon.color}
         
        </div>
     );
    }
 }
 module.exports = Show;