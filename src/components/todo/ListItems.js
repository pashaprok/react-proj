import React from 'react'
import FlipMove from 'react-flip-move';

function ListItems(props) {
    const items = props.items;

    const listItems = items.map(item => {
       return <div className="todo-item" key={item.key}>
                <input 
                    type="text" 
                    id={item.key} 
                    value={item.text} 
                    onChange={(e) => {props.setUpdate(e.target.value,item.key)}}
                />
                <span>
                    <i 
                        className="far fa-trash-alt faicons"
                        onClick={() => {
                            props.deleteItem(item.key)
                        }}
                        icon="trash"
                    />
                </span>
        </div>
    })

    return <div>
        <FlipMove duration={300} easing="ease">
            {listItems}
        </FlipMove>
    
    </div>;
}

  export default ListItems;