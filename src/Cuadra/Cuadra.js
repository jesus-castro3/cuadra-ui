import React, { Component } from 'react';
import Zone from '../Zone/Zone';
import { PER_ROW } from '../constants';


// import UserCard from '../UserCard/UserCard';
import '../Cuadra/Cuadra.css';

class Cuadra extends Component {
  
  constructor(props) {
    super(props);
    this.state = { zones: [] }
  }

  componentDidMount() {
    fetch('http://localhost:3001/layout')
      .then((res) => {
        return res.json();
      })
      .then((zones) => {
        this.setState({
          zones
        });
      })
    fetch('http://localhost:3001/users')
      .then()
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