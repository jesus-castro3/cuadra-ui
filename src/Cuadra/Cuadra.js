import React, { Component } from 'react';
import Zone from '../Zone/Zone';
import { PER_ROW, ZONES } from '../constants';
// import UserCard from '../UserCard/UserCard';
import '../Cuadra/Cuadra.css';

class Cuadra extends Component {
  
  constructor(props) {
    super(props);
    this.state = { zones: [] }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        zones: ZONES
      });
    })
  }

  render() {
    return(
    <div className="cuadra">
      <Zone zones={this.state.zones} itemsPerRow={PER_ROW}/>
      {/* <UserCard/> */}
    </div>
    )
  }
}

export default Cuadra;