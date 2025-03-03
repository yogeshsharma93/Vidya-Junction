import React, { useEffect, useState } from "react";
import "./Attendance.scss";

const Attendance = ({ attendance, students, id }) => {
  const [data, setData] = useState([...attendance]);
  useEffect(() => {
    setData(attendance);
  }, [attendance]);
  console.log(students);

  const handleToggleAttendance = (index) => {
    const updatedData = [...data];
    updatedData[index] = !updatedData[index];
    setData(updatedData);
  };

  const updateAttendance = async () => {
    let response = await fetch("http://localhost:3003/updateAttendance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id, attendance: data }),
    })
      .then((data) => data.json())
      .then((data) => data);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Student ID</th>
            <th>Attended</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{students[index].name}</td>
                <td>{students[index].id}</td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={item}
                      onChange={() => handleToggleAttendance(index)}
                    />
                    <span className="slider round"></span>
                  </label>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          updateAttendance();
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Attendance;
