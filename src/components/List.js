import React from "react"
import ListItem from "./ListItem";

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state={groceryItems:[
            {id:1, title:"Eggs"},
            {id:2, title:"Cheese"},
            {id:3, title:"Garlic"},
            {id:4, title:"PindaButter"},
        ],
      
    }
    }
   

    render (){   
         
        return (
            <div>
                <ul>
                {this.state.groceryItems.map((eachItem =>
                {return <ListItem
                          key={eachItem.id} 
                          name={eachItem}
                          />
                           
                          
                }
                )) }
                </ul>
            </div> 
        )
    }
}



export default List