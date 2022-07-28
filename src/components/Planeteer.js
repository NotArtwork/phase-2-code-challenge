import { useState } from "react";

function Planeteer({name, image, bio, twitter, fromUSA, quote, age}) {


  const [about, setAbout] = useState(true)

  const changeAbout = () => {
    setAbout(about => !about)
  }

  



  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={image}
          alt={name}
          className="card__image"
          onClick={changeAbout}
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{about ? bio : quote}</p>
          <p className="card_age">Age: {age}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>
              {
                fromUSA ? 'USA-based' : 'Working overseas'
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
