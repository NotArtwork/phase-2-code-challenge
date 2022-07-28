import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ planeteers, year }) {
  return (
    <ul className="cards">
      {planeteers.map((member, index) => {
        return (
        <li>
          <Planeteer
          name={member.name}
          image={member.pictureUrl}
          bio={member.bio}
          key={index}
          twitter={member.twitter}
          fromUSA={member.fromUSA}
          quote={member.quote}
          age={year - member.born}
          />
        </li>
      )})}
    </ul>
  );
}

export default PlaneteersContainer;
