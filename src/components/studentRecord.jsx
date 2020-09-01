import React from "react";
import './studentRecord.css';

const StudentRecord = ({student}) => {
  return (
    <tr className={student.lessonScore < 35 ? "highlight": ""}>
        <td>{student.fullName}</td>
        <td>{student.lessonScore}</td>
    </tr>
  );
};

export default StudentRecord;
