import * as React from "react";
import PropTypes from "prop-types";

export default function Championships({ team }) {
  return (
    <>
      <h4>Championships</h4>
      <ul className="championships">
        {team.championships.map((ship) => (
          <li key={ship}>{ship}</li>
        ))}
      </ul>
    </>
  );
}

Championships.propTypes = {
  team: PropTypes.object.isRequired,
};
