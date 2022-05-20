import React, { useState } from "react";
import Select from "react-select";

import "../App.css";

function UserList({ placeHolder, data, addData }) {
  // const [filterdata, setfilterdata] = useState({ id: "", name: "" });
  const [selectedOption, setSelectedOption] = useState([]);

  const dropDownValue = data.map((res) => ({
    value: res.id,
    label: res.first_name,
  }));

  //here getting the id
  const handlechange = (e) => {
    setSelectedOption(Array.isArray(e) ? e.map((x) => x.label) : []);
  };
  console.log(selectedOption);

  //handleSubmit
  const handleSubmit = () => {
    if (selectedOption.length !== 0) {
      addData(selectedOption);
    }
    setSelectedOption([]);
  };

  return (
    <div>
      <h5 style={{ margin: "20px", fontSize: "18px" }}>
        Customers Success Managers
      </h5>
      {/* dropdown shows here  */}

      <div style={{ margin: "10px 150px 0px 10px" }}>
        <Select
          placeholder={placeHolder}
          isMulti
          options={dropDownValue}
          onChange={handlechange}
        />
      </div>
      <button onClick={handleSubmit} className="btn-cls">
        {"submit"}
      </button>
    </div>
  );
}

export default UserList;
