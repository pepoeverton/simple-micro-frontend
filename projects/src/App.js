import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Projects from "./views/projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<LoadingModules />}>
        <Switch>
          <Route path="/" exact>
            <Projects />
          </Route>
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

function LoadingModules() {
  return <div>Loading...</div>;
}

export default App;
