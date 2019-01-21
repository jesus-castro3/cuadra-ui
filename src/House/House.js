import React, { Component } from 'react';

import '../House/House.css';

class House extends Component {
  render() {
    const { houses } = this.props;
    return (
      <div className="houses">
        {houses.map((h) => {
          return (
          <div className="house">
            <p>{h.number}</p>
          </div>
          )       
        })}
      </div>
    );
  }
}

export default House;
