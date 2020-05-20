import React from "react";

function TeamMembers(props) {
  return (
    <div className="TeamMembers">
      {props.team.map(item => {
        return (
          <div className="teamMember" key={item.name}>
            <div className="name">{item.name}</div>
            <div className="email">{item.email}</div>
            <div className="role">{item.role}</div>

          </div>
        );
      })}
    </div>
  );
}

export default TeamMembers;