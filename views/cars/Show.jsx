const React = require('react')
class Show extends React.Component {
   render () {
    const car = this.props.car
    return (
        <div>
        <h1> {car.name} Page </h1>
          The {car.name} is {car.color}
          {car.isAwesome? '. Its is Awesome' : '. It is not awesome... Cant drive this'}
        </div>
     );
    }
 }
 module.exports = Show;