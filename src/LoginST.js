import React, { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <h2>Login Status</h2>
      {}
      {isLoggedIn && <p>You are logged in</p>}
    </div>
  );
}

export default LoginStatus;
