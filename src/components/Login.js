import React, { PropTypes as T } from 'react';
import AuthService from '../utils/AuthService';

// export class Login extends React.Component {
//   static propTypes = {
//     location: T.object,
//     auth: T.instanceOf(AuthService)
//   }
//
//   render() {
//     const { auth } = this.props
//     return (
//       <div className={styles.root}>
//         <h2>Login</h2>
//         <button className="btn btn-primary" onClick={auth.login.bind(this)}></button>
//       </div>
//     )
//   }
// }
//
// export default Login;


const Login = React.createClass({
  propTypes: {
    location: T.object,
    auth: T.instanceOf(AuthService)
  },
  handleLogin() {
    const { auth } = this.props;
    auth.login();
  },
  render() {
    return (
      <div>
        <h2>Login</h2>
        <button className="btn btn-primary" onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
});

export default Login;
