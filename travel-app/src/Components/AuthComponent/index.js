import React, { Component } from "react";
import auth0 from "auth0-js";

const { Provider, Consumer: AuthConsumer } = React.createContext({
  isAutorized: false,
});

class AuthProvider extends Component {
  state = {
    isAutorized: false,
  };
  auth0 = new auth0.WebAuth({
    domain: "dev-hk6-pszx.us.auth0.com",
    clientID: "zmVr2e2KO9kKA7f885t7wIakLaZnX7TR",
    redirectUri: "http://localhost:3000/authPage",
    responseType: "token id_token",
    scope: "openid",
  });
  authorize = () => {
    this.auth0.authorize();
    /*this.setState({
            isAutorized: true
        })
        console.log("ccccc", this.state);*/
  };
  handleAuth = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        this.setState(
          {
            isAutorized: true,
          },
          () => {
            console.log("ddddd", this.props);
            this.props.history.push("/home");
          }
        );
      } else if (err) {
        console.log(err);
      }
    });
  };
  render() {
    const { isAutorized } = this.state;
    return (
      <Provider value={{ isAutorized, authorize: this.authorize , handleAuth: this.handleAuth }}>
        {this.props.children}
      </Provider>
    );
  }
}
export function withAuth(WrappedComponent) {
  return class AuthHOC extends Component {
    render() {
      return (
        <AuthConsumer>
          {(contextProps) => (
            <WrappedComponent {...contextProps} {...this.props} />
          )}
        </AuthConsumer>
      );
    }
  };
}
export { AuthProvider };
