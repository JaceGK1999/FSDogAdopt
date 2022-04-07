import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import EditDog from './Components/EditDog';
import SingleDog from './Components/SingleDog';
import { getUser } from './services/user';
import Auth from './Views/Auth';
import DogView from './Views/DogView';
import Links from './Views/Header/Links';
import NewDog from './Views/NewDog';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  return (
    <div className="App">
      <BrowserRouter>
        <Links currentUser={currentUser} />
        <Switch>
          <Route exact path={'/dog/:id/edit'}>
            {currentUser ? <EditDog /> : <Redirect to="/login" />}
          </Route>
          <Route exact path={'/dog/:id'}>
            <SingleDog />
          </Route>
          <Route exact path={'/create'}>
            {currentUser ? <NewDog /> : <Redirect to={'/login'} />}
          </Route>
          <Route exact path={'/login'}>
            {!currentUser ? <Auth setCurrentUser={setCurrentUser} /> : <Redirect to={'/'} />}
          </Route>
          <Route exact path={'/'}>
            <DogView />)
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
