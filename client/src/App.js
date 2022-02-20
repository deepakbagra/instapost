

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Header from './components/header/Header';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/auth/signin' element={<SignIn />}></Route>
        <Route exact path='/auth/signup' element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
