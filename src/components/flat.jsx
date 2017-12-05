import React, { Component } from 'react';

class Flat extends Component {
  // handleClick = () => {
  //   if (typeof this.props.selectGif === "function") {
  //     this.props.selectGif(this.props.id);
  //   }
  // }
  handleClick = () => {
    this.props.changeSelectedFlat(this.props.flatInfo);
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className={this.props.flatInfo === this.props.selectedFlat ? 'card active' : 'card'}
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.flatInfo.imageUrl}')`}}
      >
        <div className="card-category">{this.props.flatInfo.price} {this.props.flatInfo.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flatInfo.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;

