import React, { useState } from "react";
import { connect } from "react-redux";

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>User Name</td>
          <td>Email</td>
          <td>Delete</td>
          <td>Edit</td>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{!user.isEdtiable ? user.email : <input type="text" />}</td>
              <td>
                <button onClick={() => props.onDeleteClick(user)}>
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    props.onEditClick(user);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps)(Table);
