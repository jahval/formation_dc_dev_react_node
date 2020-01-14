import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.inputValue}</p>
        <input
          value={this.state.inputValue}
          placeholder="Ajouter un item"
          onChange={e => {
            this.setState({ inputValue: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.props.addItem(this.state.inputValue);
            this.setState({ inputValue: "" });
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default TodoInput;
