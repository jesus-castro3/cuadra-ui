import React, { Component } from 'react';
import Zone from '../Zone/Zone';
import UserCard from '../UserCard/UserCard'
import { PER_ROW } from '../constants';

import '../Cuadra/Cuadra.css';

class Cuadra extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      zones: [],
      users: [],
      userCard: null
    }
    this.showUserCard = this.showUserCard.bind(this);
    this.hideUserCard = this.hideUserCard.bind(this);

  }

  showUserCard(userCard) {
    this.setState({
      userCard
    })
  }

  componentDidMount() {
    fetch('http://localhost:3001/layout')
      .then(res => res.json())
      .then((zones) => {
        this.setState({
          zones
        });
      })
    fetch('http://localhost:3001/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState({
          users
        })
      })
  }


  hideUserCard() {
    this.setState({
      userCard: null
    })
  }

  render() {
    return(
    <div className="cuadra">
      <Zone zones={this.state.zones} users={this.state.users} itemsPerRow={PER_ROW} showUserCard={this.showUserCard}/>
      <UserCard card={this.state.userCard} hideUserCard={this.hideUserCard}/>
    </div>
    )
  }
}

export default Cuadra;