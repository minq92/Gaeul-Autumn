import teaching from '../../../assets/teaching.png'

function Assistantships() {
    return (
      <>
        <div className="font-noto">
            
            <div className="flex mt-2">
                <img src={teaching} className="w-8 h-8"></img>
                <p className="text-2xl mb-2 ml-3">Teaching Assistantships</p>
            </div>
            
            <hr/>

            <div className='my-2 flex justify-between'>
                <p className='font-semibold w-1/4 text-left ml-5'>Autumn semester 2022</p>
                <p className='w-3/5 text-right'>Mathematics II PEAK, The University of Tokyo</p>
            </div>

            <div className='my-2  flex justify-between'>
                <p className='font-semibold w-1/4 text-left ml-5'>Spring semester 2022</p>
                <p className='w-3/5 text-right'>Geometry I /Geometry Special Exercise I, The University of Tokyo</p>
            </div>

            <div className='my-2  flex justify-between'>
                <p className='font-semibold w-1/4 text-left ml-5'>Spring semester 2022</p>
                <p className='w-3/5 text-right'>Mathematics II PEAK, The University of Tokyo</p>
            </div>

            <div className='my-2 flex justify-between'>
                <p className='font-semibold w-1/4 text-left ml-5'>Autumn semester 2019</p>
                <p className='w-3/5 text-right'>Linear Algebra Exercise, The University of Tokyo</p>
            </div>

            <div className='my-2 flex justify-between'>
                <p className='font-semibold w-1/4 text-left ml-5'>Spring semester 2019</p>
                <p className='w-3/5 text-right'>Geometry I /Geometry Special Exercise I, The University of Tokyo</p>
            </div>

            <div className='my-2 flex justify-between'>
                <p className='font-semibold w-1/4 text-left ml-5'>Spring semester 2018</p>
                <p className='w-3/5 text-right'>Geometry I /Geometry Special Exercise I, The University of Tokyo</p>
            </div>

            <div className='my-2 flex justify-between'>
                <p className='font-semibold w-1/4 text-left ml-5'>Spring semester 2016</p>
                <p className='w-3/5 text-right'>Advanced Calculus, The University of Tokyo</p>
            </div>
        </div>
      </>
    );
  }
  
  export default Assistantships;