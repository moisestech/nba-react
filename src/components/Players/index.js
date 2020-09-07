import React from "react";
import PropTypes from "prop-types";
import {
  useLocation,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link,
} from "react-router-dom";
import { parse } from "query-string";
import usePlayers from "../../hooks/usePlayers";
import Sidebar from "../Sidebar";
import Player from "../Players/components/Player/";

export default function Players() {
  const location = useLocation();
  const { url } = useRouteMatch();

  const team = location.search ? parse(location.search).teamId : null;

  const { response: players, loading } = usePlayers(team);

  if (loading === true) {
    return <p>LOADING</p>;
  }

  return (
    <div className="container two-column">
      <Sidebar title="Players" list={players.map((player) => player.name)} />

      <Switch>
        <Route path={`${url}/:playerId`}>
          <Player players={players} />
        </Route>

        <Route path="*">
          <div className="sidebar-instruction">Select a Player</div>
        </Route>
      </Switch>
    </div>
  );
}

Players.propTypes = {};
