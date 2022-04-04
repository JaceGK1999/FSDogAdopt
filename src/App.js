import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CreateDog from './Components/CreateDog';
import EditDog from './Components/EditDog';
import SingleDog from './Components/SingleDog';
import Auth from './Views/Auth';
import DogView from './Views/DogsView';
import Links from './Views/Header/Links';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Links />
        <Route exact path={'/'}>
          <DogView />
        </Route>
        <Route exact path={'/dog/:id'}>
          <SingleDog />
        </Route>
        <Route path={'/dog/:id/edit'}>
          <EditDog />
        </Route>
        <Route path={'/create'}>
          <CreateDog />
        </Route>
        <Route path={'/login'}>
          <Auth />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
