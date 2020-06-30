import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Profile from "./views/profile/Profile.js";

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<LoadingModules />}>
        <Switch>
          <Route path="/" exact>
            <Profile />
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
