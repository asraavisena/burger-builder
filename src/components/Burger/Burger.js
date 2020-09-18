import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

    // convert object to array
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key= {igKey + i} type= {igKey} />; //igKey like salad i is 1,2,3 and so on
            }); // []
    } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []); //Transform an Array into something else
    
    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding INGREDIENTS!</p>
    };

    // for teseting inside transformedIngredients
    // console.log(transformedIngredients);

    return (
        <div className= {classes.Burger}>
            <BurgerIngredient type= "bread-top" />
            {transformedIngredients}
            <BurgerIngredient type= "bread-bottom" />
        </div>
    );
};

export default burger;