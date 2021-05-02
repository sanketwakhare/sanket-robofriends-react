import React from 'react';
import Card from './Card';

const CardList = (props) => {
    const { robots } = props;
    const cardsArray = robots.map(user => {
        return <Card key={user.id} id={user.id + 100} name={user.name} email={user.email} />;
    })
    return (
        <React.Fragment>
            {cardsArray}
        </React.Fragment>
    );
}

export default CardList;