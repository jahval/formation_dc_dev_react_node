import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputNameValue: "",
      inputPasswordValue: ""
    };
  }
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.connect(this.state);
          }}
        >
          <div className="login">
            <div>
              <input
                placeholder="Username"
                onChange={e => {
                  this.setState({ inputNameValue: e.target.value });
                }}
              />
            </div>
            <div>
              <input
                placeholder="Password"
                type="password"
                onChange={e => {
                  this.setState({ inputPasswordValue: e.target.value });
                }}
              />
            </div>
          </div>
          <button>Login</button>
          <button>
            <a href="signup.js">Sign Up</a>
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
