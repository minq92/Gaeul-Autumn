import NavBarETC from "../../organism/NavBarETC";
import ETC1 from "../../molecules/ETC/1";
import ETC2 from "../../molecules/ETC/2";
import ETC3 from "../../molecules/ETC/3";
import ETC4 from "../../molecules/ETC/4";

function ETC() {
    
    return (
      <>
        <div className='w-[1280px] mx-auto'>
          <div className="z-30 sticky top-0">
            <NavBarETC />
          </div>

          <div className='mt-10 flex justify-around'>
            <ETC4/>
            <ETC3/>
          </div>

          <div className='mt-10 flex justify-around'>
            <ETC2/>
            <ETC1/>
          </div>
        </div>
      </>
    );
  }
  
  export default ETC;