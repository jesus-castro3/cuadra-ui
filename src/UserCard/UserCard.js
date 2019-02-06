import React, { Component } from 'react';
import '../UserCard/UserCard.css';

class UserCard extends Component {
  render() {
    const { hideUserCard, card } = this.props;
    const cardData = card ? (<p>{card.name}</p>) : null;
    return(
      <section className={ card ? 'user-card user-card--open' : 'user-card user-card--close'}>
        <button onClick={hideUserCard}>close</button>
        {cardData}
      </section>
    )
  }
}

export default UserCard;