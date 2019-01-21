import React, { Component } from 'react';
import House from '../House/House';

import '../Zone/Zone.css';

class Zone extends Component {
  render() {
    
    const { zones, itemsPerRow } = this.props;
    const percentPerItem = 100/itemsPerRow;
    const zoneContentWidth = {width: `${percentPerItem}%`}
    
    return (
      <div className="zone">
        {zones.map((z) => {
          return (
          <div className="zone-content" style={zoneContentWidth}>
            <h2>{z.zone}</h2>
            <House houses={z.houses}/>
          </div>          
          )
        })}
      </div>
    );
  }
}

export default Zone;
