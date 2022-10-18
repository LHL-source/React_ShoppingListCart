import React from 'react';
import List from './List';

function ShoppingCard ({items}){
       console.log ("func/shoppingCard/items:", items);
    return (
            <div className="shopping-card">
                <h2>Shopping Cart</h2>

                <List
                    item ={items}
                    />
                
            </div>
    )
}

export default ShoppingCard;