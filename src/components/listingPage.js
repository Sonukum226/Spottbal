import React, { useState } from "react";

import "../App.css";

function UserList({ placeHolder, data }) {
  const [filterdata, setfilterdata] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
      return (
        value.first_name.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.email.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setfilterdata([]);
    } else {
      setfilterdata(newFilter);
    }
  };

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div>
      <h5 style={{ margin: "20px", fontSize: "18px" }}>
        Customers Success Managers
      </h5>
      {/*  */}
      <div>
        <div className="List-bar">
          <input
            className="search"
            type="text"
            placeholder={placeHolder}
            onChange={handleFilter}
            onClick={handleClick}
          />

          <button type="submit" className="btn-cls">
            AddCsm
          </button>

          {filterdata.length !== 0 && (
            <div className="dataResult">
              {filterdata.slice(0, 15).map((name, key) => {
                return (
                  <div className="dataItem">
                    <p>
                      {name.first_name}
                      <br />
                      {name.email}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserList;
