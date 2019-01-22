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
        {zones.map((zone, index) => {
          return (
          <div key={index} className="zone-content" style={zoneContentWidth}>
            <House houses={zone.houses}/>
          </div>          
          )
        })}
      </div>
    );
  }
}

export default Zone;
