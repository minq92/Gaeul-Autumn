import education from '../../../assets/education.png'

function Education() {
    return (
      <>
        <div className="font-noto">
            <hr className="border-gray-800"/>

            <div className="flex mt-5">
                <img src={education} className="w-8 h-8"></img>
                <p className="text-2xl mb-2 ml-3">Education</p>
            </div>

            <hr/>

            <div className='my-2'>
                <p className='font-semibold ml-4'>Apr 2018 - Mar 2023</p>
                <div className='ml-10'>
                    <p className='mt-1'>Ph.D., Mathematical science (Advisor : Mikio Furuta)</p>
                    <p className='mt-1'>Graduate School of Mathematical Sciences, The University of Tokyo</p>
                    <p className='mt-1'>leave of absence due to military service in Republic of Korea (Apr 2020- Dec 2021)</p>
                </div>
            </div>

            <div className='my-2'>
                <p className='font-semibold ml-4'>Apr 2016 - Mar 2018</p>
                <div className='ml-10'>
                    <p className='mt-1'>Master of Science, Mathematical science (Advisor : Mikio Furuta)</p>
                    <p className='mt-1'>Graduate School of Mathematical Sciences, The University of Tokyo</p>
                    <p className='mt-1'>“A construction of TQFT using K-theory.”</p>
                    <p className='mt-1'>Dean’s Prize 2018 : awarded to students with superior grades who are expected to earn Master’s degree or Ph.D</p>
                </div>
            </div>

            <div className='my-2'>
                <p className='font-semibold ml-4'>Apr 2012 - Mar 2016</p>
                <div className='ml-10'>
                    <p className='mt-1'>Bachelor of Engineering, Applied physics (Advisor : Yasunobu Nakamura)</p>
                    <p className='mt-1'>Faculty of Engineering, The University of Tokyo</p>
                    <p className='mt-1'>“A generation of on-demand microwave single photons with superconducting qubit.”</p>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Education;