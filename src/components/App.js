import React, { useState } from "react";

import Header from "./header";
import UserList from "./listingPage";

import data from "./MOCK_DATA.json";

function App() {
  return (
    <div className="App-link">
      <Header />

      <div className="App-User">
        <UserList placeHolder="Add by Name or email" data={data} />
      </div>
    </div>
  );
}

export default App;
