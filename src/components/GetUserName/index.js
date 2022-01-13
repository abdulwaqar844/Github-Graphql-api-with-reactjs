import React from "react";

export default function GetUser({HandleChangeUser}) {
  return (
    <div>
      <h1>Github User List</h1>
      <input
      style={{padding:"6px 14px",border:"2px solid grey",borderRadius:"12px",fontSize:"15px",margin:"0px 4px"}}
        type="text"
        placeholder="Github Username"
        onChange={(e) => HandleChangeUser(e.target.value)}
      />
      <button style={{padding:"6px 14px",border:"2px solid grey",borderRadius:"12px",background:"blue" ,color:"whitesmoke",fontSize:"15px"}} onClick={() => console.log("Clicked")}>Search</button>
    </div>
  );
}
