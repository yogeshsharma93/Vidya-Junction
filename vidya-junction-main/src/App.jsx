import "./style.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="diversity">
        <img src="./images/dl.beatsnoop 2.png" alt="diversity" height="175px" />
      </div>

      <div class="fixed"></div>
      <div id="abt">
        <div>
          <div class="About">
            <h3 style={{ color: "white" }}>About</h3>
          </div>
          <div class="info">
            <p>
              Welcome to Vidya Junction, your one-stop solution for attendance
              tracking, class topics, and result sharing. We are dedicated to
              simplifying the education process, making it easier for both
              students and educators to manage their academic journey.
            </p>

            <p>
              At Vidya Junction, we understand the importance of efficient
              attendance management, keeping track of topics covered in class,
              and seamlessly sharing results. Our user-friendly platform is
              designed to provide you with the tools you need to excel in your
              educational  endeavors.
            </p>
          </div>
        </div>
        <div>
          <div class="Highlights">
            <h3 style={{ color: "white" }}>Highlights</h3>
          </div>
          <div class="info2">
            <ul>
              <li>
                Effortlessly record and manage student attendance, ensuring no
                class is ever missed.
              </li>

              <li>
                Store and organize topics covered by teachers, making it easy
                for students to access and review their class materials.
              </li>

              <li>
                Provide valuable feedback and ratings for teachers to enhance
                the teaching experience and promote quality education.
              </li>

              <li>
                Your academic results with ease, keeping you informed about your
                progress and achievements.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="photos">
        <img src="./images/cbse 1.png" />
        <img src="./images/cisce-60-logo-new 1.png" />
        <img src="./images/Swachh_Bharat_Mission_Logo 1.png" />
        <img src="./images/beti bachao beti padhao 1.png" />
        <img src="./images/Ministry_of_Education_India 1.png" />
      </div>
      <div
        style={{ backgroundColor: "rgb(234, 222, 234)" }}
        className="disclaimer"
      >
        <h4 style={{ textAlign: "center" }}>Disclaimer</h4>
        <p>
          The official website "Vidya Junction" has been designed to provide a
          comprehensive educational platform for students, teachers, and parents
          alike. The information on this website is provided for general
          informational purposes only. While we aim to provide accurate and
          relevant content, we do not guarantee its completeness, accuracy, or
          suitability for your specific needs. Your use of this information is
          at your own risk.
        </p>
      </div>
    </div>
  );
}

export default App;
