import React, { useState, useEffect } from "react";
import "./studentsContainer.css";
import StudentRecords from "./studentRecords";
import axios from "axios";

const StudentsContainers = () => {
  const [students, setStudents] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://upload.smartsparrow.com/application/3597e6a6c1899dfda348ffac4f8434c0.json"
      )
      .then((result) => setStudents(result.data));
  }, []);

  const setFilterCritera = (event) => {
    setFilterCriteria(event.target.value);
  };

  return (
    <div className="container">
      <label htmlFor="nameFilter">Name filter </label>
      <input id="nameFilter" onChange={setFilterCritera} />
      <StudentRecords students={students} filterCriteria={filterCriteria} />
    </div>
  );
};

export default StudentsContainers;
