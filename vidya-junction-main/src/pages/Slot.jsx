import "./Slot.scss";
import Navbar from "../components/Navbar";
import SelectClass from "../components/SelectClass";
import { useState } from "react";

const Slot = () => {
  const [className, setClassName] = useState("5A");

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    topics: [],
    chapter: "",
    description: "",
  });
  const handleInputChange = (e) => {
    const { name, value, type, options } = e.target;
    const newValue =
      type === "select-multiple"
        ? Array.from(options)
            .filter((opt) => opt.selected)
            .map((opt) => opt.value)
        : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:3003/add-slot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, className: className }),
    })
      .then((data) => data.json())
      .then((data) => data);
    if (response.error) {
      alert(response.error);
      return;
    }
  };

  const onChange = (e) => {
    setClassName(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div id="slot">
        <SelectClass onChange={onChange} className={className} />
        <div className="form-container">
          {" "}
          {/* Apply the "form-container" class */}
          <h1>Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label">Date:</label>{" "}
              {/* Apply the "label" class */}
              <input
                className="input" // Apply the "input" class
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="label">Time:</label>
              <input
                className="input"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="label">Chapter</label>
              <select
                name="chapter"
                value={formData.chapter}
                onChange={handleInputChange}
                id=""
              >
                <option value="1">Chap1</option>
                <option value="2">Chap2</option>
                <option value="3">Chap3</option>
                <option value="4">Chap4</option>
              </select>
            </div>
            <div>
              <label className="label">Topics:</label>
              <select
                className="select"
                name="topics"
                multiple
                value={formData.topics}
                onChange={handleInputChange}
              >
                <option value="1">Yo</option>
                <option value="2">Yo1</option>
                <option value="3">Yo1</option>
                <option value="4">Yo1</option>
              </select>
            </div>
            <div>
              <label className="label">Description:</label>
              <textarea
                className="textarea"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Slot;
