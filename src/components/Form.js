import React, { useState } from "react";

function Form(props) {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  const changeHandler = (e) => {
    setTeamMember({ ...teamMember, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.addMember(teamMember);
    setTeamMember({ name: "", email: "", role: "" });
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <div className="formItem">
          <label htmlFor="name">Name: </label>
          <input
            onChange={changeHandler}
            name="name"
            type="text"
            placeholder="Write Name Here"
            value={teamMember.name}
          />
        </div>
        <div className="formItem">
          <label htmlFor="email">Email: </label>
          <input
            onChange={changeHandler}
            name="email"
            type="text"
            placeholder="Write Email Here"
            value={teamMember.email}
          />
        </div>
        <div className="formItem">
          <label htmlFor="role">Role: </label>
          <input
            onChange={changeHandler}
            name="role"
            type="text"
            placeholder="Write Role Here"
            value={teamMember.role}
          />
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default Form;
