import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGetUsersQuery } from "./features/users/user-api-slice";

function App() {
  const [count, setCount] = useState(0);

  const { data, error, isLoading, isSuccess, isError } = useGetUsersQuery(10);

  console.log("data", data);

  return (
    <div className="App">
      <header>
        {isLoading && <h2>loading</h2>}
        {isError && error.message}
        {isSuccess &&
          data &&
          data.map((data: any) => <li key={data.id}>{data.name}</li>)}

        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  );
}

export default App;
