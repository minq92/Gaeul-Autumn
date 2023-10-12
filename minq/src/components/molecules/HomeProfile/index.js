import education from '../../../assets/education.png'
import scholarship from '../../../assets/scholarship.png'
import teaching from '../../../assets/teaching.png'
import math from '../../../assets/math.png'
import email from '../../../assets/email.png'
import location from '../../../assets/location.png'
import cv from '../../../assets/cv.png'

function DetailProfile({ onDataChange }) {
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
            <p className='text-3xl mb-3'>Minkyu Kim Ph.D.</p>
            
            <hr/>
            <div className='text-base my-3'>
              <div className="flex">
                <img src={math} className="w-7 h-7 my-auto"></img>
                <p className='my-1 ml-2'>Research fellow, <a href='https://www.kias.re.kr/kias/main/main.do' target='_blank' className="text-sky-600">KIAS</a></p>
              </div>

              <div className="flex">
                <img src={location} className="w-7 h-7 my-auto"></img>
                <p className='my-1 ml-2'><a href='https://www.google.co.kr/maps/place/85+Hoegi-ro,+Dongdaemun-gu,+Seoul/data=!3m1!4b1!4m6!3m5!1s0x357cbb644dcd970d:0x43006ffa568fc0d5!8m2!3d37.5947781!4d127.0474636!16s%2Fg%2F11bz41_3jf?hl=en&entry=ttu' target='_blank' className="text-sky-600">85 Hoegi-ro, Dongdaemun-gu,  Seoul, Republic of Korea</a></p>
              </div>

              <div className="flex">
                <img src={email} className="w-7 h-7 my-auto"></img>
                <p className='my-1 ml-2'>kimminq(at)kias(dot)re(dot)kr</p>
              </div>
            </div>
            <hr/>
            <div className='text-base mt-3'>
              <p className='my-1 ml-2'>I am interested in algebraic phenomena arising in topology</p>
              <p className='my-1 ml-2'>and physics. Especially, so far my research interest has lied in</p>
              <p className='my-1 ml-2'>Hopf algebras and ordinary categories observed in such areas.</p>
              <p className='my-1 ml-2'>Besides mathematics, I love music, movie and autumn.</p>
            </div>
            
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
  
  export default DetailProfile;