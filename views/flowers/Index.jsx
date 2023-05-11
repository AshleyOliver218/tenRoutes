const React = require('react');

class Index extends React.Component {
    render() {
        const { flowers } = this.props;
        return (
            <div>
                <h1>flowers Index Page</h1>
                <ul>
                    {flowers.map((flower, i) => {
                        return (
                            <li>
                                The{' '}
                                <a href={`/flowers/${i}`}>
                                    {flower.name}
                                </a>{' '}
                                is {flower.color} <br></br>
                                
                            </li>
                        );
                    })}
                </ul>
                
                
            </div>
        );
    }
}
module.exports = Index;