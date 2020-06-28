import React, { Component } from 'react'
import BtnFluid from '../buttons/BtnFluid'
import StartSection from '../sections/StartSectionComponent'
import BannerStartSection from '../sections/BannerStartSectionComponent'
import ListItems from './ListItems'
import './todo.css'

export default class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state = {
          items:[],
          currentItem:{
            text:'',
            key:''
          }
        }
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }

    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !==""){
            const items = [...this.state.items, newItem];
            this.setState({
            items: items,
            currentItem:{
                text:'',
                key:''
            }
        })
        }
    }

    handleInput(e) {
        this.setState({
          currentItem:{
            text: e.target.value,
            key: Date.now()
          }
        })
    }

    deleteItem(key){
        const filteredItems= this.state.items.filter(item =>
          item.key!==key);
        this.setState({
          items: filteredItems
        })
    }

    setUpdate(text,key){
        console.log("items:"+this.state.items);
        const items = this.state.items;
        items.forEach(item => {      
          if(item.key===key){
            item.text= text;
          }
        })
        this.setState({
          items: items
        })
    }

    render() {
        return (
            <div className="todo-app">
                <StartSection
                    bgi="todo-start start-section start-app-section"
                >
                    <BannerStartSection
                        title="ToDo App"
                        subtitle=""
                    />   
                </StartSection>
                <div className="todo-app-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <form id="to-do-form" onSubmit={this.addItem}>
                                    <input 
                                        type="text" 
                                        placeholder="Write text" 
                                        value= {this.state.currentItem.text} 
                                        onChange={this.handleInput}
                                    />
                                    <button type="submit">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </form>
                                
                                <ListItems 
                                    items={this.state.items} 
                                    deleteItem={this.deleteItem} 
                                    setUpdate={this.setUpdate}
                                />
                            </div>
                        </div>
                    </div>
                    <BtnFluid
                        half={false}
                        link="/apps"
                        text="apps list"
                        icon={<i className="fas fa-arrow-left"></i>}
                    />
                </div>
            </div>
        )
    }
}
