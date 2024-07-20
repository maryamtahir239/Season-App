import React from 'react'
import ReactDOM from 'react-dom/client'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './spinner';

class App extends React.Component {

    state = { lat: null, errorMessage: ''};

    componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude }),
        err => this.setState({ errorMessage: err.message})
        
       );  
        }

  

    // React says that we have to define render!!
   render() {
    if (this.state.errorMessage && !this.state.lat){
     return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Please accept the location request!"/>;
   }
}

export default App
