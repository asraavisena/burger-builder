import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {
      // This could be a functional component does not have to be a class
    //   componentDidUpdate() {
    //     console.log('[OrderSummary] WillUpdate')
    // };
    const ingredientSummary = Object.keys(props.ingredients)
            .map(igKey => {
                return <li key= {igKey}><span style= {{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
            });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to check out?</p>
            <Button btnType= "Danger" clicked= {props.purchaseCancelled}>CANCEL</Button>
            <Button btnType= "Success" clicked= {props.purchaseContinued}>COUNTINUE</Button>
        </Aux>
    );
};

export default orderSummary;