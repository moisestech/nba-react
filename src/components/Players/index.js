import React from "react";
import { useLocation, Switch, Route, useRouteMatch } from "react-router-dom";
import { parse } from "query-string";
import usePlayers from "../../hooks/usePlayers";

import Sidebar from "../Sidebar";
import Player from "../Players/components/Player/";
import Loading from "../Loading";

export default function Players() {
  const location = useLocation();
  const { path } = useRouteMatch();

  const team = location.search ? parse(location.search).teamId : null;

  const { response: players, loading } = usePlayers(team);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div className="container two-column">
      <Sidebar title="Players" list={players.map((player) => player.name)} />

      <Switch>
        <Route path={`${path}/:playerId`}>
          <Player players={players} />
        </Route>

        <Route path="*">
          <div className="sidebar-instruction">Select a Player</div>
        </Route>
      </Switch>
    </div>
  );
}
