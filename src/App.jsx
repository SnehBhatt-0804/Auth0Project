import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <br />
      {isAuthenticated && <h2> Welcome : {user.name} </h2>}

      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          Click : {count}
        </button> */}

        {isAuthenticated ? (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
      </div>
    </>
  );
}

export default App;
