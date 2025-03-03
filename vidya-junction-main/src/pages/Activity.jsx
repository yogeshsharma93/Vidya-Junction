import "./Activity.scss";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const Activity = () => {
  const [activity, setActivity] = useState([]);
  const getSlots = async () => {
    let response = await fetch("http://localhost:3003/getSlots")
      .then((data) => data.json())
      .then((data) => data);
    setActivity(response.slots);
  };
  useEffect(() => {
    getSlots();
  }, []);

  return (
    <>
      <Navbar />
      <ActivityList activities={activity} />
    </>
  );
};

const ActivityList = ({ activities }) => {
  return (
    <div className="activity-list-container">
      <h2>Activity List</h2>
      <ul className="activity-list">
        {activities.map((activity, index) => (
          <li key={index} className="activity-item">
            <div className="activity-details">
              <div className="date-time">
                <p>Date: {activity.date.split("T")[0]}</p>
                <p>Time: {activity.time}</p>
                {/* <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => {
                    return (
                      <span
                        key={star}
                        className={
                          star <= rating ? "star-filled" : "star-empty"
                        }
                        onClick={() => handleStarClick(star)}
                      >
                        ★
                      </span>
                    );
                  })}
                </div> */}
              </div>
              <div className="chapter-topic-description">
                <h3>Chapter: {activity.chapter}</h3>
                <p>Topics: {activity.subtopics.join(", ")}</p>
                <p>Description: {activity.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activity;
