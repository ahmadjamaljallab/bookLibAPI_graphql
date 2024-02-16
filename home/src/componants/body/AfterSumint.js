import React from "react";
// import FileUploder from "./FileUploder";
import "./AfterSum.css";
export default function Form() {
  let id_auther = "abpood";

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
          backgroundColor: "#c4c4c4",
        }}
      >
        <div
          style={{
            textAlign: "end",
          }}
        >
          <label htmlFor="abpood" id={id_auther}>
            abood
          </label>
        </div>
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          <label>Book Name : </label>
          <input type="text" placeholder="inter name" />
        </div>
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          <label>grene : </label>
          <input type="number" placeholder="inter age" />
        </div>
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          {/* <FileUploder /> */}
        </div>
        <div
          style={{
            textAlign: "end",
            marginBottom: "1rem",
          }}
        >
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              ></path>
            </svg>

            <div class="text">Add</div>
          </button>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
