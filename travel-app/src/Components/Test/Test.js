import React from "react";
import s from "./style.module.scss";

class Test extends React.PureComponent {
  render() {
    return <div className={s.test}>It's Test component</div>;
  }
}

export default Test;
