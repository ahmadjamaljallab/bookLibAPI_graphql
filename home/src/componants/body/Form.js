import React from "react";
// import FileUploder from "./FileUploder";

export default function Form() {
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          margin: "auto",
          marginTop: "50px",
          padding: "20px",
          border: "1px solid #000",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          <label>Name Auther : </label>
          <input type="text" placeholder="inter name" />
        </div>
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          <label>age Auther : </label>
          <input type="number" placeholder="inter age" />
        </div>
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          {/* <FileUploder /> */}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
