import React from "react";
import "./App.css";
import userJSON from "./users.json";
import { getUsers } from "./action";
import Table from "./Table";
import { connect } from "react-redux";
import { useEffect } from "react";

const App = (props) => {
  useEffect(() => {
    props.getUsers(userJSON);
  }, []);

  return (
    <div>
      <Table />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { getUsers })(App);
