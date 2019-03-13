import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js'
import './SeasonDisplay.css'
import Spinner from './Spinner.js';
import Error from './Error.js'


class App extends React.Component {
    
    //initialize your state
    state = {
        lat: null,
        err : ''
    };

    //Can use to load state
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}), 
            (err) => this.setState({err : err.message})
        );
    }

    //Can use to save state
    componentDidUpdate() {
        console.log('Component was updated');
    }

    //helper function
    renderContent = () => {
        if (!this.state.lat && this.state.err) {
            return <div><Error message="User Denied Their GeoLocation." /></div>
        }

        if (this.state.lat && !this.state.err) {
            return (
                <div>
                    <SeasonDisplay
                        lat={this.state.lat}
                        err={this.state.err}
                    />
                </div>
            ) 
        }

        return (
            <div><Spinner /></div>
        )
    }
    //Can send your state as props
    render() {
        return (
            <div className="">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));