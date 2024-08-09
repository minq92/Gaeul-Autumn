import NavBarPub from '../../organism/NavBarPub';
import Published from '../../organism/Published';
import PrePrints from '../../organism/PrePrints';
import Articles from '../../organism/Articles';

function Publications() {
    
    return (
      <>
        <div className='w-[1280px] mx-auto mb-10'>
          <div className="z-30 sticky top-0">
            <NavBarPub />
          </div>

          <div className='mt-10'>
            <p className='ml-24 text-2xl mt-10'>Published</p>
            <hr className='mt-3 ml-20' width="1100px"/>
            <Published/>
            
            <p className='ml-24 text-2xl mt-10'>Preprints</p>
            <hr className='mt-3 ml-20' width="1100px"/>
            <PrePrints/>

            <p className='ml-24 text-2xl mt-10'>Articles</p>
            <hr className='mt-3 ml-20' width="1100px"/>
            <Articles/>
          </div>
        </div>
      </>
    );
  }
  
  export default Publications;