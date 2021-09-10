import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login';

function App() {

  const signup = () =>{
    return(
      <Signup/>
    )
  }

  const login = () =>{
    return(
      <Login/>
    )
  }
  
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={signup} />
          <Route path='/signin' component={signup} />
          <Route path='/login' component={login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
