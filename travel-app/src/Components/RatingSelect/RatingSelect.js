import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const RatingSelect = (props) => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <select onChange={props.handlerChangeRating} data-id={props.id}>
          <option> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
          <option> 4 </option>
          <option> 5 </option>
        </select>
      ) : null}
    </>
  );
};
export default RatingSelect;
