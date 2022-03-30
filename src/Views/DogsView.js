import React, { useState, useEffect } from 'react';
import Dogs from '../Components/Dogs';

import { fetchDogs } from '../services/dogs';

export default function DogView() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogs();
      setDogs(resp);
    };
    fetchData();
  }, []);
  return (
    <div>
      {' '}
      {dogs.map((dog) => (
        <div key={dog.id} to={`/dogs/${dog.id}`}>
          <Dogs {...dog} />
        </div>
      ))}
    </div>
  );
}
