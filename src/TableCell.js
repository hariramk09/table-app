import React, { useState } from "react";
import { connect } from "react-redux";

const TableCell = (props) => {
  const [userEmail, setUserEmail] = useState(props.user.email);

  const onEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <tr key={props.user.id}>
      <td>{props.user.id}</td>
      <td>{props.user.name}</td>
      <td>{props.user.username}</td>
      <td>
        {!props.user.isEditable ? (
          props.user.email
        ) : (
          <input
            type="text"
            value={userEmail}
            onChange={(e) => onEmailChange(e)}
            onKeyDown={(e) => {
              props.onEmailKeyDown(e, props.user);
            }}
          />
        )}
      </td>
      <td>
        <button onClick={() => props.onDeleteClick(props.user)}>Delete</button>
      </td>
      <td>
        {!props.user.isEditable ? (
          <button onClick={() => props.onEditClick(props.user)}>Edit</button>
        ) : (
          <span>
            <button onClick={() => props.onCancelClick(props.user)}>
              Cancel
            </button>{" "}
            <button onClick={() => props.onDoneClick(userEmail, props.user)}>
              Done
            </button>
          </span>
        )}
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps, {})(TableCell);
