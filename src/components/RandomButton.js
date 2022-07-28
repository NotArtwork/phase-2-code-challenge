import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";
import Planeteer from "./Planeteer";

function RandomButton({ planeteers, setPlaneteers}) {
  function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();
    setPlaneteers([...planeteers, randomPlaneteer])

    // const postPlaneteers = () => {
    //   fetch('http://localhost:8003/planeteers',
    //   {method: 'POST',
    // 'application/})
    // }
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Show a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
