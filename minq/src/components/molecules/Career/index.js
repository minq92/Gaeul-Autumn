import career from '../../../assets/career.png'

function Career() {
    return (
      <>
        <div className="font-noto">
            <hr className="border-gray-800"/>

            <div className="flex mt-5">
                <img src={career} className="w-8 h-8"></img>
                <p className="text-2xl mb-2 ml-3">Career</p>
            </div>

            <hr/>

            <div className='my-2 flex'>
                <p className='font-semibold ml-4 w-[180px]'>May 2025 - Present</p>
                <p className='ml-4'>KIAS Junior Fellow</p>
                {/* <div className='ml-10'>
                    <p className='mt-1'>KIAS Junior Fellow</p>
                </div> */}
            </div>

            <div className='my-2 flex'>
                <p className='font-semibold ml-4 w-[180px]'>May 2023 - April 2025</p>
                <p className='ml-4'>KIAS Research Fellow</p>
            </div>
        </div>
      </>
    );
  }
  
  export default Career;