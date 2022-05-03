import React, { useState } from "react";
import "./App.css";
import userJSON from "./users.json";
import Table from "./Table";
import { connect } from "react-redux";
import { getUsers } from "./action";
import { useEffect } from "react";

const App = (props) => {
  useEffect(() => {
    props.getUsers(userJSON);
  }, []);

  const onEditClick = (user) => {
    props.users[user.id - 1].isEdtiable = true;
    getUsers(props.users);
  };

  const onDeleteClick = (user) => {
    let filteredUsers = props.users.filter((ele) => ele.id != user.id);
    props.getUsers(filteredUsers);
  };

  return (
    <div>
      <Table
        users={props.users}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { users: state.users };
};

export default connect(mapStateToProps, { getUsers })(App);
