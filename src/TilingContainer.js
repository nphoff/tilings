import React, { Component } from 'react';

class TilingContainer extends Component {
  render() {
    return (
      <div className="Tiling-container">
        <div className="Tiling">
          Some tiling related to {this.props.type} would live here.
        </div>
        <div className="Tiling-info">
          Some information about the {this.props.type} tiling goes here.
        </div>
      </div>
    );
  }
}

export default TilingContainer;
