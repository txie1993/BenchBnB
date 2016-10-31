import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loggedIn: (state.currentUser ? true : false),
  errors: state.errors

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  formType: (location.pathname === "/login" ? "login" : "signup"),
  processForm: (user) =>(location.pathname === "/login" ? dispatch(login(user)) : dispatch(signup(user)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
