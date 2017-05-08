import Auth0Lock from 'auth0-lock';
import Auth0 from 'auth0-js';
import { browserHistory } from 'react-router';

import { FIREBASE_AUTH } from '../config';

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:8080/login',
        responseType: 'token'
      }
    });

    this.auth0 = new Auth0({
      domain : domain,
      clientID: clientId
    });


    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this);
    this.listen();

  }
  listen() {
    const self = this;
    FIREBASE_AUTH.onAuthStateChanged(authData => {
			if (authData) {
        console.log(authData);
        self.setToken(authData);
      }
    });
  }
  _doAuthentication(authResult) {
    const self = this;
    this.lock.getProfile(authResult.idToken, function(error, profile) {

      if (error) {
        // handle error
        return;
      }

      localStorage.setItem('profile', JSON.stringify(profile))

      // Set the options to retreive a firebase delegation token
      var options = {
        id_token : authResult.idToken,
        api : 'firebase',
        scope : 'openid name email displayName',
        target: 'dxxv4smzlVhEQRbvsn7gooKYtDHknjDf'
      };

      // Make a call to the Auth0 '/delegate'
      self.auth0.getDelegationToken(options, function(err, result) {
        if(!err) {
          // Exchange the delegate token for a Firebase auth token
          FIREBASE_AUTH.signInWithCustomToken(result.id_token)
          .catch(function(error) {
            console.log(error);
          });
        }
      });
    });
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken()
  }

  setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token');
    FIREBASE_AUTH.signOut();
  }
}
