import React from "react";
import s from "./AuthPage.module.scss";
import { withRouter } from "react-router";

class AuthPage extends React.Component {
componentDidMount(){
  const {handleAuth}=this.props
  if(handleAuth) {handleAuth()}
}
  render() {
    return <div className={s.authPage}></div>;
  }
}
export default withRouter(AuthPage);
