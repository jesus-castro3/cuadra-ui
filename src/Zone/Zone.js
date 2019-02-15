import React, { Component } from 'react';
import House from '../House/House';

import '../Zone/Zone.css';

class Zone extends Component {
  render() {
    
    const { zones, users, showUserCard } = this.props;
    const _usersByKey = users.reduce((accum, user) => {
      accum[user.house] = user;
      return accum;
    },{})
    const _zones = (users.length) ? zones.map( z => {
      return z.houses.map( house => {
        return _usersByKey[house] || { house, empty: true }
      })
    }) : [];
    return (
      <div className="zone">
        {_zones.map((zone, index) => {
          return (
          <div key={index} className="zone-content" >
            <House showUserCard={showUserCard} houses={zone}/>
          </div>          
          )
        })}
      </div>
    );
  }
}

export default Zone;
