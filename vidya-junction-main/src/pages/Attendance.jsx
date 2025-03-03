import Attendance from "../components/Attendance";
import Navbar from "../components/Navbar";
import SelectClass from "../components/SelectClass";
import "./Attendance.scss";
import { useState, useEffect } from "react";

const AttendancePage = () => {
  const [slots, setSlots] = useState([]);
  const [students, setStudents] = useState([]);
  const [slot, setSlot] = useState({});
  const [attendance, setAttendance] = useState([]);
  const [className, setClassName] = useState("5A");

  const getSlots = async () => {
    let response = await fetch("http://localhost:3003/getSlots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ className: className }),
    })
      .then((data) => data.json())
      .then((data) => data);
    if (response.error) {
      return;
    }
    console.log(response.slots);
    setSlots(response.slots);
    setSlot(0);
    setStudents(response.students);
    setAttendance([...response.slots[0].attendance]);
  };

  useEffect(() => {
    getSlots();
  }, [className]);

  const onChange = async (e) => {
    let c = e.target.value;
    setClassName(c);
  };

  const onSlotChange = async (e) => {
    let temp = e.target.value;
    setSlot(temp);
    setAttendance([...slots[temp].attendance]);
  };

  return (
    <>
      <Navbar />
      <div id="attendance">
        <SelectClass onChange={onChange} className={className} />
        <select value={slot} onChange={onSlotChange}>
          {slots.map((slot, i) => {
            let d = slot.date.split("T")[0];
            return (
              <option key={i} value={i}>
                {d + " " + slot.time}
              </option>
            );
          })}
        </select>
        <Attendance
          attendance={attendance}
          students={students}
          id={slots.length > 0 ? slots[slot]._id : ""}
        />
      </div>
    </>
  );
};

export default AttendancePage;
