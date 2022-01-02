import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGetUsersQuery } from "./features/users/user-api-slice";

import { useAddContactMutation } from "./features/users/user-api-slice";

function App() {
  const [count, setCount] = useState(0);

  const { data, error, isLoading, isSuccess, isError } = useGetUsersQuery(10);

  const [addContact] = useAddContactMutation();

  const handleAdd: any = () => {
    const user = {
      id: 11,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    addContact(user);
  };

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

        <button onClick={handleAdd()}>Add contact</button>
      </header>
    </div>
  );
}

export default App;
