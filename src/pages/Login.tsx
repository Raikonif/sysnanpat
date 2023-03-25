import React from "react";
import LoginCard from "~/components/LoginCard";

function Login(): JSX.Element {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-700">
      <LoginCard />
    </div>
  );
}

export default Login;
