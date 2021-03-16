import React from "react";
import s from "./AuthPage.module.scss";
import { withRouter } from "react-router";
import compose from "../../Utils/compose.js";
import { withAuth} from "../../Components/AuthComponent/index.js"
class AuthPage extends React.Component {
componentDidMount(){
  const {handleAuth}=this.props
  if(handleAuth) {handleAuth()}
}
  render() {
    return <div className={s.authPage}>загрузка</div>;
  }
}
export default compose(withRouter, withAuth)(AuthPage);
