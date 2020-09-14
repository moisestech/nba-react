import * as React from "react";
import PropTypes from "prop-types";

export default function Stats({ team }) {
  return (
    <ul className="info-list row" style={{ width: "100%" }}>
      <li>
        Est.<div>{team.established}</div>
      </li>
      <li>
        Manager<div>{team.manager}</div>
      </li>
      <li>
        Coach<div>{team.coach}</div>
      </li>
      <li>
        Record
        <div>
          {team.wins} - {team.losses}
        </div>
      </li>
    </ul>
  );
}

Stats.propTypes = {
  team: PropTypes.object.isRequired,
};
