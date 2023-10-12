import NavBarTalk from '../../organism/NavBarTalk';
import ResearchTalk from '../../organism/ResearchTalks';

function ResearchTalks() {
    return (
      <>
        <div className='w-[1280px] mx-auto'>
          <div className="z-30 sticky top-0">
            <NavBarTalk />
          </div>
          <ResearchTalk />
        </div>
      </>
    );
  }
  
  export default ResearchTalks;