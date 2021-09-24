import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateUser from "../components/CreateUser";
import CreateWaiter from "../components/CreateWaiter";
import EditWaiter from "../components/EditWaiter";
import Waiter from "../components/Waiter";
import WaiterList from "../components/WaiterList";
import Navbar from './../components/Navbar'

export default function Home() {
  return (
    <div>
      <Router>
        <div>
            <Navbar />
            <h1>Залиш чаюху</h1>
          {/* <ul>
            <li>
              <Link to="/">Головна</Link>
            </li>
            <li>
              <Link to="/">Редагувати</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul> */}

          <Switch>
            <Route path="/" exact>
              <WaiterList />
            </Route>
            <Route path="/edit/:id">
              <EditWaiter />
            </Route>
            <Route path="/waiter/:id">
              <Waiter />
            </Route>
            <Route path="/create">
              <CreateWaiter />
            </Route>
            <Route path="/user">
              <CreateUser />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
