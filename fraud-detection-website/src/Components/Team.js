import React from "react";
import "./Team.css";
import Ananya from './Assets/Anuu.jpeg';
import Kalpii from './Assets/Kalpii.jpeg';
import Divii from './Assets/Divii.jpeg';

function Team() {
  const teamMembers = [
    {
      id: 1,
      Name: "ANANYA R HAVANUR",
      USN: "1BM22IS029",
      image: Ananya, // Replace with actual image URLs
    },
    {
      id: 2,
      Name: "DIVYA B",
      USN: "1BM23IS406",
      image: Divii,
    },
    {
      id: 3,
      Name: "KALPITHA R B",
      USN: "1BM23IS408",
      image: Kalpii,
    },
  ];

  return (
    <div className="team-page">
      <h1 className="team-heading">Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <div className="team-avatar">
              <img src={member.image} alt={member.name} className="avatar-image" />
            </div>
            <h3 className="team-name">{member.Name}</h3>
            <p className="team-roll">USN: {member.USN}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
