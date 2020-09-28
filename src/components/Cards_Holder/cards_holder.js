import React from 'react';
import classes from './cards_holder.module.css'

const CardHolder = (props) => {
    return (
        <div className={classes.cardsHolder}>
            {props.children}
        </div>
    )
}

export default CardHolder