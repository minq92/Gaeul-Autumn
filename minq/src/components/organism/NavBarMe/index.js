import { useNavigate } from "react-router-dom";

import main from "../../../assets/main.png"
import cupisbagel from "../../../assets/cupisbagel.gif"

function NavBarMe() {
    const navigate = useNavigate();

    return (
      <>
        <nav className="h-[70px] w-[1300px] flex justify-around text-2xl bg-[#EDF1F5] font-noto">
          <p className="w-[700px]  flex items-center">
            <a href="https://minq92.github.io/Gaeul-Autumn/"><img src={cupisbagel} className="w-28"></img></a>
          </p>
          <p className="text-blue-500 my-auto"><button onClick={() => {navigate("/")}}>About Me</button></p>
          <p className="my-auto"><button onClick={() => {navigate("/Publications")}}>Publications</button></p>
          <p className="my-auto"><button onClick={() => {navigate("/ResearchTalks")}}>Research Talks</button></p>
          <p className="my-auto"><button onClick={() => {navigate("/ETC")}}>ETC</button></p>
        </nav>
      </>
    );
  }
  
  export default NavBarMe;