import React from "react";

const RemoteButton = React.lazy(() => import("remote_app/Button"));

const App: React.FC = () => {
  return (
    <React.Suspense fallback="Loading...">
      <div>
        <h1>Host Application</h1>
        <RemoteButton onClick={() => alert("Button Clicked!")}>
          <p> Click Me</p>
        </RemoteButton>
      </div>
    </React.Suspense>
  );
};

export default App;
