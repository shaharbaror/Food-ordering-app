import React from 'react';
import classes from "./FoodOrder.module.css";
import Button from '../UI/Button/Button';

const FoodOrder = (props) => {
    return (
        <div className={classes.box}>
            <div className={classes['food_show']}>
                <h3>{props.food.title}</h3>
                <p className={classes.text} >{props.food.description}</p>
                <h3>{props.food.cost}$</h3>
            </div>
            <div className={classes.order} >
                <label>Amount</label>
                <input type="number" defaultValue={1} />
                <Button className={classes.btn} type="button">+Add</Button>
            </div>
        </div>
    );
};

export default FoodOrder;