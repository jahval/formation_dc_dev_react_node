import React from "react";

import Todo from "./todo/Todo";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Signup from "./Header/Login/Signup";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ":path",
      isUserConnected: false,
      users: [
        { id: 1, username: "Alice", password: "Alice" },
        { id: 2, username: "Bob", password: "Bob" },
        { id: 3, username: "Claire", password: "Claire" },
        { id: 4, username: "David", password: "David" }
      ]
    };
  }
  connected = user => {
    let i = 0;
    let userFound = false;
    console.log("connected", this.state.users, user);
    while (i < this.state.users.length + 1 && userFound === false) {
      if (this.state.users.username === user.inputUserNameSignup)
        userFound = true;
      i++;
    }
    this.setState({ isUserConnected: userFound });
  };

  render() {
    let page;
    if (this.state.isUserConnected === true) {
      page = <Todo />;
    } else {
      page = (
        <Signup
          addUser={user => {
            let newUser = {
              username: user.inputUserNameSignup,
              password: user.inputPwdSignup
            };
            let newUsers = [...this.state.users, newUser];
            this.setState({ users: newUsers });
          }}
        />
      );
    }
    return (
      <div id="App">
        <Header users={this.state.users} connected={this.connected} />
        {page}
        <Footer />
      </div>
    );
  }
}

export default App;
