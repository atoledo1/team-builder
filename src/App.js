import React, { useState } from "react";
import "./App.css";
import TeamMembers from "./components/TeamMemberList.js";
import Form from "./components/Form.js";

function App() {
  const [team, setTeam] = useState(teamData);
  

  const addMember = member => {
  
    setTeam([...team, member]);
  
  };

  return (
    <div className="App">
      <h1>TEAM MEMBERS</h1>
      <TeamMembers team={team} />
      <Form addMember={addMember} />
    </div>
  );
}

const teamData = [
  {
    name: "Maria",
    email: "maria_engineer@lambda.com",
    role: "Backend Engineer"
  },
  {
    name: "Carla",
    email: "carla_designer@lambda.com",
    role: "UX Designer"
  },
  {
    name: "Ana",
    email: "ana_engineer@lambda.com",
    role: "Frontend Engineer"
  }
];

export default App;