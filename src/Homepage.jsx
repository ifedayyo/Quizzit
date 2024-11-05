import "./App.css";
import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <div>
      <>
        <p> Bored? No more. Get those neurons firing with Quizzit </p>
        <img
          className="planetearth"
          src="src/assets/planet_earth.webp"
          alt="picture of our lovely planet earth"
        />
      </>

      <div>
        <Link to="/signup">
          <button className="descriptionbutton">Get Started</button>
        </Link>{" "}
      </div>
    </div>
  );
}
