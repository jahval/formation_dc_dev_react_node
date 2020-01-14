import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li key={this.props.item.index}>
        <button
          onClick={() => {
            this.props.done();
          }}
        >
          Terminer
        </button>
        {this.props.item.titre} {this.props.item.isDone ? "Fini" : "En cours"}
        <button
          onClick={() => {
            this.props.remove();
          }}
        >
          Supprimer
        </button>
      </li>
    );
  }
}

export default TodoItem;
