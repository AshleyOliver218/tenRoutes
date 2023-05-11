const React = require('react');

class Index extends React.Component {
    render() {
        const { cars } = this.props;
        return (
            <div>
                <h1>cars Index Page</h1>
                <ul>
                    {cars.map((car, i) => {
                        return (
                            <li>
                                The{' '}
                                {car.maker}
                                {' '}
                                <a href={`/cars/${i}`}>
                                    {car.name}
                                </a>{' '}
                                is {car.color}. <br></br>
                                {car.isAwesome ? `It is awesome` : `It is not awesome`}
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