import scholarship from '../../../assets/scholarship.png'

function Scholarships() {
    return (
      <>
        <div className="font-noto">
            <div className="flex mt-2">
                <img src={scholarship} className="w-8 h-8"></img>
                <p className="text-2xl mb-2 ml-3">Scholarships</p>
            </div>

            <hr/>

            <div className="my-2">
                <p className='font-semibold ml-4'>Apr 2018 - Mar 2023</p>
                <div className='ml-10'>
                    <p className='mt-1'>Leading Graduate Course for Frontiers of Mathematical Sciences and Physics</p>
                    <p className='mt-1'>(with a break between Apr 2020 - Mar 2022 due to military service.)</p>
                </div>
            </div>

            <div className="my-2">
                <p className='font-semibold ml-4'>Apr 2016 - Mar 2018</p>
                <div className='ml-10'>
                    <p className='mt-1'>The University of Tokyo Fellowship Special Scholarship Program for International Students</p>
                </div>
            </div>

            <div className="my-2">
                <p className='font-semibold ml-4'>Mar 2011 - Mar 2016</p>
                <div className='ml-10'>
                    <p className='mt-1'>Korea-Japan Joint Scholarship Program for Science and Engineering Students</p>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Scholarships;