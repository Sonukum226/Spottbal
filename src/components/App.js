import React, { useState } from "react";

import Header from "./header";
import UserList from "./listingPage";
import UserCard from "./UserCard";

import data from "./MOCK_DATA.json";

function App() {
  const [newData, setnewData] = useState([]);

  const dataHandler = (userId, Username) => {
    setnewData((previousdata) => {
      return [...previousdata, { id: userId, name: Username }];
    });
  };

  return (
    <div className="App-link">
      <div>
        <Header />
      </div>

      <div className="App-User">
        <UserList
          placeHolder="Add by Name or email"
          data={data}
          addData={dataHandler}
        />

        <div style={{ margin: "20px 0 0 10px" }}>
          <UserCard />
        </div>
      </div>
    </div>
  );
}

export default App;
