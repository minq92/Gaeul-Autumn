import teaching from '../../../assets/teaching.png'

function Assistantships() {
    return (
      <>
        <div className="font-noto">
            <div className="flex">
                <img src={teaching} className="w-8 h-8"></img>
                <p className="text-2xl mb-2 ml-3">Teaching Assistantships</p>
            </div>
            
            <hr/>

            <div className='my-2 flex justify-between'>
                <p className='w-3/5 ml-4'>Mathematics II PEAK, The University of Tokyo</p>
                <p className='font-semibold w-1/4 text-right'>Autumn semester 2022</p>
            </div>

            <div className='my-2  flex justify-between'>
                <p className='w-3/5 ml-4'>Geometry I /Geometry Special Exercise I, The University of Tokyo</p>
                <p className='font-semibold w-1/4 text-right'>Spring semester 2022</p>
            </div>

            <div className='my-2  flex justify-between'>
                <p className='w-3/5 ml-4'>Mathematics II PEAK, The University of Tokyo</p>
                <p className='font-semibold w-1/4 text-right'>Spring semester 2022</p>
            </div>

            <div className='my-2 flex justify-between'>
                <p className='w-3/5 ml-4'>Linear Algebra Exercise, The University of Tokyo</p>
                <p className='font-semibold w-1/4 text-right'>Autumn semester 2019</p>
            </div>

            <div className='my-2 flex justify-between'>
                <p className='w-3/5 ml-4'>Geometry I /Geometry Special Exercise I, The University of Tokyo</p>
                <p className='font-semibold w-1/4 text-right'>Spring semester 2019</p>
            </div>

            <div className='my-2 flex justify-between'>
                <p className='w-3/5 ml-4'>Geometry I /Geometry Special Exercise I, The University of Tokyo</p>
                <p className='font-semibold w-1/4 text-right'>Spring semester 2018</p>
            </div>

            <div className='my-2 flex justify-between'>
                <p className='w-3/5 ml-4'>Advanced Calculus, The University of Tokyo</p>
                <p className='font-semibold w-1/4 text-right'>Spring semester 2016</p>
            </div>
        </div>
      </>
    );
  }
  
  export default Assistantships;