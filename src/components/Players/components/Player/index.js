import * as React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import slug from "slug";

function InfoList({ player }) {
  return (
    <ul className="info-list">
      <li>
        APG<div>{player.apg}</div>
      </li>
      <li>
        SPG<div>{player.spg}</div>
      </li>
      <li>
        RPG<div>{player.rpg}</div>
      </li>
    </ul>
  );
}

InfoList.propTypes = {
  player: PropTypes.object.isRequired,
};

export default function Players({ players }) {
  const { playerId } = useParams();
  const player = players.find(({ name }) => slug(name) === playerId);

  return (
    <div className="panel">
      <img
        className="avatar"
        src={`${player.avatar}`}
        alt={`${player.name}'s avatar`}
      />
      <h1 className="medium-header">{player.name}</h1>
      <h3 className="header">#{player.number}</h3>
      <div className="row">
        <ul className="info-list" style={{ marginRight: 80 }}>
          <li>
            Team
            <div>
              <Link to={`/${player.teamId}`}>
                {player.teamId[0].toUpperCase() + player.teamId.slice(1)}
              </Link>
            </div>
          </li>
          <li>
            Position<div>{player.position}</div>
          </li>
          <li>
            PPG<div>{player.ppg}</div>
          </li>
        </ul>
        <InfoList player={player} />
      </div>
    </div>
  );
}

Players.propTypes = {
  players: PropTypes.array.isRequired,
};
