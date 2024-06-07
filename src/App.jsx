import { useState } from "react";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import Logo from "./Images/logo1.svg";
import Line from "./Sect 1/Line";
import L1 from "./Images/Vector.svg";
import L2 from "./Images/Vector3.svg";
import L3 from "./Images/Vector2.svg";
import F1 from "./Images/image17.png";
import Fact from "./Sect 2/Fact";
import Figure from "./Sect 3/Figure";
import A1 from "./Images/separatorBlack1.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="section1">
        <img src={Logo} alt="" />
        <Navbar />
        <Line />
        <img src={L1} alt="" />
        <img src={L2} alt="" />
        <img src={L3} alt="" />
        <img className="Man" src={F1} alt="" />
        <p className="man-text">
          this is not my photo, but I dearly hope to get one just like this{" "}
        </p>
      </div>

      <div className="itblogo">
        <Fact />
      </div>
      <div className="sect3">
        <Figure />
        <img src={A1} alt="" />
      </div>
      <div>
        <div className="rectanglelast">
          <h3>SKILLS</h3>
        </div>
      </div>
      <div className="skills-learn">
        <p className="pp">USING NOW:</p>
        <p class="pp">LEARNING:</p>
        <p class="pp">OTHER SKILLS:</p>
      </div>
    </>
  );
}

export default App;
