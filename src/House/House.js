import React, { Component } from 'react';

import '../House/House.css';

class House extends Component {
  render() {
    const { houses } = this.props;
    return (
      <div className="houses">
        {houses.map((houseNumber) => {
          return (
          <div key={houseNumber} className="house">
            <p>{houseNumber}</p>
          </div>
          )       
        })}
      </div>
    );
  }
}

export default House;
