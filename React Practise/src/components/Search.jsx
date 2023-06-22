import React from "react";
import { useState } from "react";
import JSONDATA from "../Data/data.json";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="container m-auto w-50 my-5">
        <h1 className="text-left mb-5 text-success">SEARCH TABLE IN REACT</h1>
        <div className="input-group">
          <input
            className="form-control mb-5"
            type="search"
            placeholder="Search..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <i className="fa-solid fa-magnifying-glass icon"></i>
        </div>
        <table className="table table-bordered mt-3 table-striped">
          <thead className="table-success">
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>

            </tr>
          </thead>
          <tbody>
            {JSONDATA.filter((value) => {
              if (search === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              } else if (
                value.email.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              }
            }).map((value) => {
              return (
                <>
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>

                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
