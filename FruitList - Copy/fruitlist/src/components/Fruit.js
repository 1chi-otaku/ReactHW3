import React from 'react'
import classes from './Fruit.module.css'
function Fruit(props) {
    return (
       <div className={classes.item}>
            <h3>{props.fruit.name}</h3>
            <p>Calories: {props.fruit.calories}</p>
            <p>Color: {props.fruit.color}</p>
            <img src={props.fruit.image} alt={props.fruit.name} />
       </div>
    )
}

export default Fruit
