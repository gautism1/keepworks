import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
const Nav = lazy(() => import("./components/nav"));
const Home = lazy(() => import("./components/home"));
// const Scientific = lazy(() => import("./components/scientific"));

function App() {
  return (
    <Suspense fallback={<h1>Loading Web App...</h1>}>
      <div className="App  dark-theme || light-theme">
        <div >
          <Router>
            <Nav/>
            
              <Suspense fallback={<h1>Loading Web App...</h1>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                   
                    <Route
                      path="*"
                      render={() => <p className="link">
                         <h1>Wrong url </h1>
                      </p>}
                    /> 
                </Switch>
              </Suspense>
          </Router>
        </div>
      </div>
    </Suspense>
  
  );
}

export default App;
