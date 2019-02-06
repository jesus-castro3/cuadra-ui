import React, { Component } from 'react';

import '../House/House.css';

class House extends Component {
  render() {
    const { houses, showUserCard } = this.props;
    return (
      <div className="houses">
        {houses.map((h) => {
          return ( h.empty ?
          <div key={h.house} className="house house--empty">
            <p>{h.house}</p>
          </div>
          :
          <div key={h.house} className="house" onClick={(e)=> showUserCard(h)}>
            <p >{h.house}</p>
          </div>
          )       
        })}
      </div>
    );
  }
}

export default House;
