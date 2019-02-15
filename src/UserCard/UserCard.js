import React, { Component } from 'react';
import '../UserCard/UserCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class UserCard extends Component {
  render() {
    const { hideUserCard, card } = this.props;
    const cardData = card ? (
      <div className="user-card-data">
        <div className="user-card-data__avatar">
          {
            card.avatar ? 
            <img src={card.avatar} alt=""/> : 
            <FontAwesomeIcon className="user-card-data__avatar--size" icon="user-circle"/>
          }
        </div>
        <div className="user-card-data__name">
          <p>{card.name}</p>
        </div>
        <div className="user-card-data__house">
          <p>{card.house}</p>
        </div>
        <div className="user-card-data__phone">
          <p>{card.phone}</p>
        </div>
      </div>      
    ) : null;
    return(
      <section className={ card ? 'user-card user-card--open' : 'user-card user-card--close'}>
        <button onClick={hideUserCard}>
          <span className="icono-cross user-card-button user-card-button--position" icon="times-circle"></span>
        </button>
        {cardData}
      </section>
    )
  }
}

export default UserCard;