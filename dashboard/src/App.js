import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./views/dashboard/Dashboard.js";
const Profile = React.lazy(() => import("profile/Profile"));
const Projects = React.lazy(() => import("projects/Projects"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <React.Suspense fallback={<LoadingModules />}>
        <div className="container mx-auto px-4 mt-16">
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
          </Switch>
        </div>
      </React.Suspense>
    </BrowserRouter>
  );
}

function LoadingModules() {
  return <div>Loading...</div>;
}

export default App;
