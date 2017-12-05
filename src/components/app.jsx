import React, { Component } from 'react';
import flats from '../../data/flats.js';
import FlatList from './flat_list';
import GoogleMap from './google_map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0]
    };
  }

  changeSelectedFlat = (newFlat) => {
    this.setState({
      selectedFlat: newFlat
    })
  }

  render() {
    return (
      <div className="container">
        <div>
          <div className="flat-list">
            <FlatList flatData={ flats } selectedFlat={this.state.selectedFlat}  changeSelectedFlat={this.changeSelectedFlat}/>
          </div>
          <div className="map-container">
            <GoogleMap selectedFlat={this.state.selectedFlat}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
