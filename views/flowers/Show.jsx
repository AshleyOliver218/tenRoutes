const React = require('react')
class Show extends React.Component {
   render () {
    const flower = this.props.flower
    return (
        <div>
        <h1> {flower.name} Page </h1>
          The {flower.name} is {flower.color}
         
        </div>
     );
    }
 }
 module.exports = Show;