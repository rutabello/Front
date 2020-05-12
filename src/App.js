import React from 'react';
//import './App.css';
import Home from './Components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import Stock from './Components/Stock/Stock';
import Box from './Components/Box/Box';


class App extends React.Component {


   render (){

  return (
     <div className="App">
        <Switch>
          <Route
            exact path="/"
            render={(props) => (
              <div> <Home  {...props} /> </div>
                )}
            />
         <Route
              path="/stock"
            render={(props) => (
              <div> <Stock  {...props} /> </div>
                )}
            /> 
            <Route
              path="/box"
            render={(props) => (
              <div> <Box  {...props} /> </div>
                )}
            />
          
          </Switch>
       </div>
  );
 }
}

export default App;
