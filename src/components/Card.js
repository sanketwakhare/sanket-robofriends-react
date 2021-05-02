import React from 'react';

const Card = (props) => {
    const { id, name, email } = props;
    return (
        <React.Fragment>
            <div className='bg-light-green dib br3 ma2 grow bw2 shadow-5'>
                <img src={`https://robohash.org/${id}?size=200x200`} alt='Robots'></img>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Card;