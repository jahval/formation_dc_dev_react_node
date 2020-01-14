import React from "react";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          titre: "Faire les courses",
          isDone: false
        },
        {
          titre: "Faire le ménage",
          isDone: false
        }
      ]
    };
  }

  handleDone(index) {
    let newItem = {
      titre: this.state.items[index].titre,
      isDone: !this.state.items[index].isDone
    };
    let newItems = [...this.state.items];
    newItems.splice(index, 1, newItem);

    this.setState({ items: newItems });
  }
  handleRemoveItem(index) {
    let newItems = [...this.state.items];
    newItems.splice(index, 1);
    this.setState({ items: newItems });
  }
  render() {
    return (
      <div id="Todo">
        <div class="TodoList">
          <TodoList
            items={this.state.items}
            removeItem={index => {
              this.handleRemoveItem(index);
            }}
            doneItem={index => {
              this.handleDone(index);
            }}
          />
        </div>
        <div class="TodoList">
          <TodoInput
            addItem={value => {
              let newItem = { titre: value, isDone: false };

              let newItems = [...this.state.items, newItem];

              this.setState({ items: newItems });

              console.log("newItem", newItem);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
