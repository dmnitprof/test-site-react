import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Navbar} from './components/Navbar'
import { Footer } from './components/Footer'


function App() {
  return (

    <BrowserRouter>
    <Navbar/>
  
    <div>
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/about'} component={About}/>
        <Route path={'/contacts'} component={Contact}/>
      </Switch>
    </div>
    
    <Footer />
  </BrowserRouter>
  
  );
}

export default App;
