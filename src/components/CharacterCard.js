import React from "react";

export default function CharacterCard({ character }) {
  
  const {image, name, species, status, location, } = character;
  return (
    <div className="characterCard">
      <img src={image} alt="character pic" />
      <h2>{name}</h2>
      <p>{species}</p><p>{status}</p>
      <br/>
      <p>Location: {location.name}</p>
      <br/>
      {/* <p>Origin: {origin}</p> */}
      <h3>Episodes</h3>

      {/* {props.character.episode.map(item => (
        <div className="episodes" key={item}>
          {item}
        </div>
      ))} */}
    

    </div>
  );
}
