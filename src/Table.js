import React from "react";
import TableCell from "./TableCell";
import { getUsers, updateUser } from "./action";
import { connect } from "react-redux";

const Table = (props) => {
  const onEditClick = (user) => {
    user.isEditable = true;
    props.updateUser(user);
  };
  const onCancelClick = (user) => {
    user.isEditable = false;
    props.updateUser(user);
  };
  const onDoneClick = (userEmail, user) => {
    user.email = userEmail;
    user.isEditable = false;
    props.updateUser(user);
  };
  const onEmailKeyDown = (e, user) => {
    if (e.keyCode == 13) {
      user.email = e.target.value;
      user.isEditable = false;
      props.updateUser(user);
    }
  };
  const onDeleteClick = (user) => {
    let filteredUsers = props.users.filter((ele) => ele.id != user.id);
    props.getUsers(filteredUsers);
  };
  return (
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>User Name</td>
          <td>Email</td>
          <td>Delete</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <TableCell
            user={user}
            onEditClick={onEditClick}
            onCancelClick={onCancelClick}
            onDoneClick={onDoneClick}
            onEmailKeyDown={onEmailKeyDown}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps, { getUsers, updateUser })(Table);
