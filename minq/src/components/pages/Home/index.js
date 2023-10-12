import HomeProfile from '../../organism/HomeProfile'
import NavBarMe from '../../organism/NavBarMe';

function Home() {
    return (
      <>
        <div className='w-[1280px] mx-auto mb-10'>
          <div className="z-30 sticky top-0">
            <NavBarMe />
          </div>
          <HomeProfile />
        </div>
      </>
    );
  }
  
  export default Home;