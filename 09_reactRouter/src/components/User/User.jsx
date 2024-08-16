import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userID } = useParams(0);
  return (
    <div className="mx-auto my-5 text-center font-bold p-3">
      User : {userID}
    </div>
  );
}

export default User;
