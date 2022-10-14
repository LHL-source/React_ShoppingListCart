import React from "react"
import ListItem from "./ListItem";

class List extends React.Component{
    
    render (){   
         
        return (
            <div>
                <ul className="App-list">
                    console.log(" this.props.items:" this.props.items);
                {this.props.items.map((item =>(
                <ListItem
                          key={item.id} 
                          item={item}
                          />
                           
                          
                
                )))}
                </ul>
            </div> 
        )
    }
}

export default List