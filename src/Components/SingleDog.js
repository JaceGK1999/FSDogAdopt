import React from 'react';
import { Link } from 'react-router-dom';

export default function SingleDog({ id, name, image, breed, bio, age, deleteDog }) {
  const getAge = () => {
    return `${age} years old`;
  };
  return (
    <div>
      <h3>Meet {name}</h3>
      <img src={image} />
      <p>
        {name} is a(n) {getAge()} {breed}
      </p>
      <div>
        <p>{bio}</p>
        <div>
          <Link to={`/dogs/${id}/edit`} className="button">
            Edit
          </Link>
          <button onClick={deleteDog}>Delete</button>
        </div>
      </div>
    </div>
  );
}
