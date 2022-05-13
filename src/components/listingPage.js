// import React, { useState } from "react";

// import "../App.css";

// function UserList({ placeHolder, data}) {
//   const [filterdata, setfilterdata] = useState([]);

//   const handleFilter = (e) => {
//     const searchWord = e.target.value;
//     const newFilter = data.filter((value) => {
//       return (
//         value.first_name.toLowerCase().includes(searchWord.toLowerCase()) ||
//         value.email.toLowerCase().includes(searchWord.toLowerCase())
//       );
//     });

//     if (searchWord === "") {
//       setfilterdata([]);
//     } else {
//       setfilterdata(newFilter);
//     }
//   };

//   return (
//     <div>
//       <h5 style={{ margin: "20px", fontSize: "18px" }}>
//         Customers Success Managers
//       </h5>
//       {/*  */}
//       <div>
//         <div className="List-bar">
//           <input
//             className="search"
//             type="text"
//             placeholder={placeHolder}
//             onChange={handleFilter}
//           />

//           <button type="submit" className="btn-cls">
//             AddCsm
//           </button>
//           {filterdata.length !== 0 && (
//             <div className="dataResult">
//               {filterdata.slice(0, 15).map((name, key) => {
//                 return (
//                   <div className="dataItem">
//                     <p>
//                       {name.first_name}
//                       <br />
//                       {name.email}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserList;

import React, { useState } from "react";
import Select from "react-select";

import "../App.css";

function UserList({ placeHolder, data, addData }) {
  const [filterdata, setfilterdata] = useState([{ id: "", name: "" }]);
  // const [selectedOption, setSelectedOption] = useState([]);
  // // const [dropDown] = useState([]);

  const dropDownValue = data.map((res) => ({
    value: res.id,
    label: res.first_name,
  }));

  const handlechange = (e) => {
    console.log(e);
    setfilterdata({
      id: e.value,
      name: e[0].label,
    });
    console.log(filterdata);

    addData(filterdata.id, filterdata.name);
  };

  return (
    <div>
      <h5 style={{ margin: "20px", fontSize: "18px" }}>
        Customers Success Managers
      </h5>
      {/* dropdown shows here  */}
      <div style={{ margin: "10px 50px 0px 10px" }}>
        <Select
          placeholder={placeHolder}
          isMulti
          options={dropDownValue}
          onChange={handlechange}
        />
      </div>
    </div>
  );
}

export default UserList;
