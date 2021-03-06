import { connect } from 'react-redux';
import { login, signup, logout } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loggedIn: (state.currentUser ? true : false),
  errors: state.errors

});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    logout: () => logout()
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
