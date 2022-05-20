import React, { useState } from "react";

import Header from "./header";
import UserList from "./listingPage";

import UserCard from "./UserCard";
import data from "./MOCK_DATA.json";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

function App() {
  const [newData, setnewData] = useState([]);

  const dataHandler = (userid) => {
    setnewData((previousdata) => {
      return [...previousdata, ...userid];
    });
  };

  return (
    <div className="App-link">
      <Header />

      <div className="App-User">
        <UserList
          placeHolder="Add by Name or email"
          data={data}
          addData={dataHandler}
        />

        <UserCard userId={newData} />
      </div>
    </div>
  );
}

export default App;
