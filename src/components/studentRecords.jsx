import React from "react";
import StudentRecord from "./studentRecord";
import "./studentRecords.css";
import { useState } from "react";
import { useEffect } from "react";

const StudentRecords = ({ students, filterCriteria }) => {
  const [sortedStudents, setSortedStudents] = useState([]);
  const [scoreSortState, setScoreSortState] = useState(true);
  const [nameSortState, setNameSortState] = useState(true);

  useEffect(() => {
    setSortedStudents(students);
  }, [students]);

  const sortName = () => {
    const sorted = [...sortedStudents].sort((a, b) => {
      const t1 = a.firstName;
      const t2 = b.firstName;
      if (nameSortState) {
        return t1 < t2 ? -1 : t1 > t2 ? 1 : 0;
      } else {
        return t2 < t1 ? -1 : t2 > t1 ? 1 : 0;
      }
    });
    setSortedStudents(sorted);
    setNameSortState(!nameSortState);
  };

  const sortScore = () => {
    const sorted = [...sortedStudents].sort((a, b) =>
      scoreSortState
        ? a.lessonScore - b.lessonScore
        : b.lessonScore - a.lessonScore
    );
    setSortedStudents(sorted);
    setScoreSortState(!scoreSortState);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td onClick={sortName}>Student Name</td>
            <td onClick={sortScore}>Score</td>
          </tr>
        </thead>
        <tbody>
          {sortedStudents
            .map((student) => {
              student.fullName = `${student.firstName} ${student.lastName}`;
              return student;
            })
            .filter((student) => student.fullName.includes(filterCriteria))
            .map((student) => {
              return <StudentRecord key={student.id} student={student} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentRecords;
