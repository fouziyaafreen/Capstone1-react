import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";

import UsersList from "./Components/Users/UsersList";

const App = () => {
  const [userDetails, setUserDetails] = useState([]);

  const OnSubmit = (name,age) => {
    setUserDetails((userDetails) => {
      return [...userDetails, {id:Math.random().toString(), name:name, age:age}];
    });
  };


  return (
    <div>
      <AddUser userDetails={OnSubmit} />
      <UsersList users={userDetails} />

    </div>
  );
};

export default App;
