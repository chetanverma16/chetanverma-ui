import React from "react";
import Alert from ".";

const AlertDemo = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert type="success" message="This is a success alert." />
      <Alert type="error" message="This is an error alert." />
      <Alert type="warning" message="This is a warning alert." />
      <Alert type="info" message="This is an info alert." />
    </div>
  );
};

export default AlertDemo;
