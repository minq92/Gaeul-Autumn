import { useNavigate } from "react-router-dom";

import main from "../../../assets/main.png"

function NavBarPub() {
    const navigate = useNavigate();

    return (
      <>
        <nav className="h-[70px] w-[1300px] flex justify-around text-2xl bg-slate-100 font-noto">
          <p className="w-[700px]  flex items-center">
            <img src={main} className="w-28"></img>
          </p>
          <p className="my-auto"><button onClick={() => {navigate("/")}}>About Me</button></p>
          <p className="text-blue-500 my-auto"><button onClick={() => {navigate("/Publications")}}>Publications</button></p>
          <p className="my-auto"><button onClick={() => {navigate("/ResearchTalks")}}>Research Talks</button></p>
        </nav>
      </>
    );
  }
  
  export default NavBarPub;