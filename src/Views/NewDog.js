import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DogForm from '../Components/DogForm';
import { createDog } from '../services/dogs';

export default function NewDog() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const history = useHistory();
  const [error, setError] = useState('');

  const saveDog = async (e) => {
    try {
      e.preventDefault();
      await createDog({ name, age, bio, breed, image });
      history.push('/');
    } catch (e) {
      setError(e.message);
    }
  };
  //add in all props as a use state form form
  //call saveDog here somehow

  return (
    <div>
      {error && (
        <p>
          {error}{' '}
          <span onClick={() => setError('')}>Something went wrong when creating your dog!!!</span>
        </p>
      )}
      <DogForm
        {...{
          name,
          setName,
          age,
          setAge,
          bio,
          setBio,
          breed,
          setBreed,
          image,
          setImage,
          saveDog,
        }}
      />
    </div>
  );
}
