import * as React from "react";
import Sidebar from "../Sidebar";
import Team from "./components/Team";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import useTeamNames from "../../hooks/useTeamNames";
import Loading from "../Loading";

export default function Teams() {
  const { response: teamNames, loading } = useTeamNames();
  const { path } = useRouteMatch();

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div className="container two-column">
      <Sidebar title="Teams" list={teamNames} />

      <Switch>
        <Route path={`${path}/:teamId`}>
          <Team />
        </Route>

        <Route path="*">
          <div className="sidebar-instruction">Select a Team</div>
        </Route>
      </Switch>
    </div>
  );
}
