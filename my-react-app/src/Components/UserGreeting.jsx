import React from "react";
import PropTypes from "prop-types";

const UserGreeting = (props) => {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );

  const loginPrompt = <h2 className="login-prompt">Please Logged in</h2>;
  return <>{props.isLoggedIn ? welcomeMessage : loginPrompt}</>;
};

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
