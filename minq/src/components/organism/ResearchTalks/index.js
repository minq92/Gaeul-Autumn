import Research2018 from "../../molecules/ResearchTalks/2018";
import Research2019 from "../../molecules/ResearchTalks/2019";
import Research2020 from "../../molecules/ResearchTalks/2020";
import Research2021 from "../../molecules/ResearchTalks/2021";
import Research2022 from "../../molecules/ResearchTalks/2022";
import Research2023 from "../../molecules/ResearchTalks/2023";
import Research2024 from "../../molecules/ResearchTalks/2024";
import Research2025 from "../../molecules/ResearchTalks/2025";

import ResearchImg4 from "../../../assets/researchImg4.webp"
import ResearchImg3 from "../../../assets/researchImg3.webp"
import ResearchImg2 from "../../../assets/researchImg2.webp"
import ResearchImg1 from "../../../assets/researchImg1.webp"

function ResearchTalks() {

    return (
      <>
        <div className="flex justify-between mt-5 mb-10">
          <div className="w-1/3 grid place-items-center">
            <div className="mt-5">
              <img src={ResearchImg4} width='300'/>
              <p className="text-sm mt-2 text-center">"CT2024, Santiago de Compostela (2024)</p>
            </div>

            <div className="mt-5">
              <img src={ResearchImg3} width='300'/>
              <p className="text-sm mt-2 text-center">"Interactions between Topology and</p>
              <p className="text-sm mt-1 text-center"> Representation theory by Toric code",</p>
              <p className="text-sm mt-1  text-center">RIKEN iTHEMS (Oct 3, 2023)</p>
            </div>

            {/* <div className="mt-5">
              <img src={ResearchImg2} width='300'/>
              <p className="text-sm mt-2 text-center">The commencement ceremony,</p>
              <p className="text-sm mt-1  text-center">University of Tokyo (Mar 23, 2023)</p>
            </div> */}

            <div className="mt-5">
              <img src={ResearchImg1} width='300'/>
              <p className="text-sm mt-2 text-center">Thesis Defense Presentation,</p>
              <p className="text-sm mt-1  text-center">University of Tokyo (Jan 26, 2023)</p>
            </div>
          </div>

          <div className="w-2/3">
            <Research2025/>
            <Research2024/>
            <Research2023/>
            <Research2022/>
            <Research2021/>
            <Research2020/>
            <Research2019/>
            <Research2018/>
          </div>   
        </div>
      </>
    );
  }
  
  export default ResearchTalks;