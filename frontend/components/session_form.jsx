import React from 'react';
import { Link, withRouter } from 'react-router';
class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
    this.ensureNoLogin();
  }

  ensureNoLogin() {
    if (this.props.loggedIn) this.props.router.push("/");
  }

  update(field){
    return e => (this.setState({[field]: e.currentTarget.value}));
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  loginOrSignUp(){
    return (this.props.formType === "login" ? <Link to="/signup">Sign Up</Link> : <Link to="/signup">Log In</Link>);
  }

  render(){
    let header = this.props.formType;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{header}</h1>
        <label>Username
          <input type="text" value={this.state.username} onChange={this.update("username")}></input>
        </label>
        <label>Password
          <input type="text" value={this.state.password} onChange={this.update("password")}></input>
        </label>
        {this.loginOrSignUp()}
        <input type="submit" value={this.props.formType}/>
      </form>
    );
  }
}

export default SessionForm;
