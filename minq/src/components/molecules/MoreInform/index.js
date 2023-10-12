import education from '../../../assets/education.png'
import scholarship from '../../../assets/scholarship.png'
import teaching from '../../../assets/teaching.png'
import cv from '../../../assets/cv.png'

function MoreInform({ onDataChange }) {
    const clickEducation = () => {
      const newNumber = 1;
      onDataChange(newNumber);
    };

    const clickScholarships = () => {
      const newNumber = 2;
      onDataChange(newNumber);
    };

    const clickAssistantships = () => {
      const newNumber = 3;
      onDataChange(newNumber);
    };

    return (
      <>
        <div className='font-noto'>  
            <div>
              <p className='text-xl mt-5'>More Information</p>
              
              <div className='flex justify-between my-3 text-base'>
                <div className='h-[30px]'>
                  <button className='inline-flex ml-2 text-sky-600' onClick={clickEducation}><img src={education}/><span className='ml-2'>Education</span></button>
                </div>
                <div className='h-[30px]'>
                  <button className='inline-flex text-sky-600' onClick={clickScholarships}><img src={scholarship}/><span className='ml-2'>Scholarships</span></button>
                </div>
                <div className='h-[30px]'>
                  <button className='inline-flex text-sky-600' onClick={clickAssistantships}><img src={teaching}/><span className='ml-2'>Assistantships</span></button>
                </div>
                <div className='h-[30px]'>
                  {/* <button className='inline-flex text-sky-600' onClick={clickAssistantships} ta><img src={cv}/><span className='ml-2'>CV</span></button> */}
                  <a href='https://drive.google.com/file/d/1V7Sotnlolx5qyvegbWclYWjp7rZDbZr6/view?usp=sharing' target="_blank" className='inline-flex text-sky-600'><img src={cv} className="mr-2"/>CV</a>
                </div>
              </div>
            </div>
        </div>
      </>
    );
  }
  
  export default MoreInform;