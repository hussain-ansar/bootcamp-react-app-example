import React from 'react';

function dinner(props) {
    return(
        <div>
        <h1>Today we are serving {props.dishName}</h1>
        <h1>Today we are serving Sweet Dish {props.sweetDish}</h1>
        </div>
    );
}

export default dinner;