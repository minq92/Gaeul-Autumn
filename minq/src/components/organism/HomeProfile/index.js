import React, { useState } from 'react';

import MainProfileImg from '../../../assets/main_profileImg.JPG'
import DetailProfile from '../../../components/molecules/HomeProfile'
import Education from '../../molecules/Education';
import Scholarships from '../../molecules/Scholarships';
import Assistantships from '../../molecules/Assistantships';

function HomeProfile() {
    const [number, setNumber] = useState(0);

    const handleDataChange = (newNumber) => {
      setNumber(newNumber);
    };

    return (
      <>
        <div>
          <div className='w-[1300px]'>
            <div className='flex justify-center mt-10 mb-5'>
              <div className='w-[920px] flex justify-between'>
              {/* <div className='w-[1200px] flex justify-between'> */}
                  <div>
                      <img src={MainProfileImg} width='400'/>
                  </div>        
                  <div className='text-lg ml-10 flex items-center'>
                      <DetailProfile onDataChange={handleDataChange}/>
                  </div>
              </div>
            </div>

            {number === 1 && (
              <div className='flex justify-center'>
                <div className='w-[920px]'>
                  <Education onDataChange={handleDataChange}/>
                </div>
              </div>
            )}

            {number === 2 && (
              <div className='flex justify-center'>
                <div className='w-[920px]'>
                  <Scholarships onDataChange={handleDataChange}/>
                </div>
              </div>
            )}

            {number === 3 && (
              <div className='flex justify-center'>
                <div className='w-[920px]'>
                  <Assistantships onDataChange={handleDataChange}/>
                </div>
              </div>
            )}

          </div>
        </div>
      </>
    );
  }
  
  export default HomeProfile;