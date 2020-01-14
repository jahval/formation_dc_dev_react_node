import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputUserNameSignup: "",
      inputPwdSignup: ""
    };
  }

  render() {
    return (
      <div className="Signup">
        <form className="formLogin" methode="post" action="compte.php">
          <h2>Création d'un compte</h2>
          <div className="UserNameSignup">
            <h3>Username</h3>
            <input
              placeholder="Username"
              onChange={e => {
                this.setState({ inputUserNameSignup: e.target.value });
              }}
              required
              minLength="3"
              maxLength="8"
            />
          </div>
          <div className="PasswordSignup">
            <h4>Password</h4>
            <input
              placeholder="Password"
              type="password"
              onChange={e => {
                this.setState({ inputPwdSignup: e.target.value });
              }}
              required
              minLength="3"
              maxLength="8"
            />
          </div>
          <div className="Boutonsignup">
            <button
              onClick={() => {
                this.props.addUser(this.state);
              }}
            >
              Créer un compte
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Signup;
